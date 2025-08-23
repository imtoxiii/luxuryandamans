<?php
// Robust PHP mail handler for Contact, Calculator, Enquiry forms
// Supports application/json and x-www-form-urlencoded bodies

// Headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Debug: Log that processForm.php is being called
error_log('[' . date('c') . '] processForm.php called with method: ' . $_SERVER['REQUEST_METHOD']);

// Load config
$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server config missing']);
    exit;
}
require_once $configPath;

// Small helper for JSON response
function respond($data, int $status = 200) {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

// Parse body (JSON or form)
$contentType = isset($_SERVER['CONTENT_TYPE']) ? strtolower(trim($_SERVER['CONTENT_TYPE'])) : '';
$rawBody = file_get_contents('php://input');
$payload = [];
if (strpos($contentType, 'application/json') !== false && $rawBody) {
    $decoded = json_decode($rawBody, true);
    if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
        $payload = $decoded;
    }
}
if (empty($payload)) {
    // Fallback to form data
    $payload = $_POST;
}

// Sanitize helper
function field($arr, $key, $default = '') {
    if (!isset($arr[$key])) return $default;
    $val = is_string($arr[$key]) ? trim($arr[$key]) : $arr[$key];
    return is_string($val) ? strip_tags($val) : $val;
}

// Extract fields
$name = field($payload, 'name');
$email = field($payload, 'email');
$phone = field($payload, 'phone');
$subject = field($payload, 'subject', 'New Enquiry');
$message = field($payload, 'message');
$destination = field($payload, 'destination');
$guests = field($payload, 'guests');
$travelDate = field($payload, 'travel_date');
$duration = field($payload, 'duration');
$preferredContact = field($payload, 'preferred_contact', 'email');
$packageName = field($payload, 'packageName');
$totalPrice = field($payload, 'totalPrice');

// Log submission for debugging
require_once __DIR__ . '/log-submissions.php';
logSubmission([
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'subject' => $subject,
    'destination' => $destination,
    'guests' => $guests,
    'travel_date' => $travelDate,
    'duration' => $duration,
    'preferred_contact' => $preferredContact,
    'package_name' => $packageName,
    'total_price' => $totalPrice,
    'message_length' => strlen($message)
], 'received');

// Validate required fields
if ($name === '' || $email === '' || $message === '') {
    respond(['success' => false, 'message' => 'Missing required fields: name, email, message'], 400);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(['success' => false, 'message' => 'Invalid email address'], 400);
}

// Load our standalone mailer implementation (try both casings)
$mailerPaths = [__DIR__ . '/phpmailer.php', __DIR__ . '/PHPMailer.php'];
$loaded = false;
foreach ($mailerPaths as $path) {
    if (file_exists($path)) {
        require_once $path;
        $loaded = true;
        break;
    }
}
if (!$loaded) {
    respond(['success' => false, 'message' => 'Mail library not found on server'], 500);
}

// Create mailers (admin + autoresponder)
try {
    $mailer = new SimplePHPMailer();

    // Admin notification should come from info@luxuryandamans.com
    $adminFromEmail = defined('ADMIN_FROM_EMAIL') ? ADMIN_FROM_EMAIL : 'info@luxuryandamans.com';
    
    // Use correct SMTP credentials for info@ account
    $smtpUsername = INFO_SMTP_USERNAME;
    $smtpPassword = INFO_SMTP_PASSWORD;
    
    // Server settings
    $mailer->CharSet = 'UTF-8';
    $mailer->isSMTP();
    $mailer->Host = SMTP_HOST;
    $mailer->SMTPAuth = true;
    $mailer->Username = $smtpUsername;
    $mailer->Password = $smtpPassword;
    $mailer->SMTPSecure = strtolower(SMTP_ENCRYPTION);
    $mailer->Port = SMTP_PORT;

    $mailer->setFrom($adminFromEmail, SMTP_FROM_NAME);
    $mailer->Sender = $adminFromEmail; // Return-Path
    $mailer->addReplyTo($email, $name);
    $mailer->Priority = 3; // Normal
    $mailer->addCustomHeader('X-Mailer', 'Luxury Andamans Mailer');

    // Recipients - send to sumeet1987@gmail.com
    $admins = ADMIN_RECIPIENTS;
    if (is_string($admins)) {
        $admins = array_filter(array_map('trim', explode(',', $admins)));
    }
    if (empty($admins)) {
        $admins = ['sumeet1987@gmail.com'];
    }
    foreach ($admins as $adminEmail) {
        $mailer->addAddress($adminEmail);
    }

    // Content
    // DKIM not supported in SimplePHPMailer

    $mailer->isHTML(true);
    $mailer->Subject = ($subject ? $subject . ' - ' : '') . 'Luxury Andamans Website Enquiry';

    // Prepare fields for table: include common fields first then all additional payload keys
    $fieldsTable = [
        'Name' => $name,
        'Email' => $email,
        'Phone' => $phone,
        'Subject' => $subject,
        'Destination' => $destination,
        'Guests' => $guests,
        'Travel Date' => $travelDate,
        'Duration' => $duration,
        'Preferred Contact' => $preferredContact,
        'Package' => $packageName,
        'Total Price' => $totalPrice,
    ];
    // Merge arbitrary payload keys (arrays/objects JSON-encoded)
    foreach ($payload as $k => $v) {
        if (in_array($k, ['name','email','phone','subject','message','destination','guests','travel_date','duration','preferred_contact','packageName','totalPrice'], true)) {
            continue;
        }
        $label = ucwords(str_replace(['_', '-'], ' ', (string)$k));
        if (is_array($v) || is_object($v)) {
            $v = json_encode($v, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        }
        $fieldsTable[$label] = (string)$v;
    }

    $htmlRows = '';
    foreach ($fieldsTable as $label => $value) {
        if ($value === '' || $value === null) continue;
        $safeLabel = htmlspecialchars($label, ENT_QUOTES, 'UTF-8');
        $safeValue = nl2br(htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8'));
        $htmlRows .= "<tr><td style=\"padding:8px;border:1px solid #eee;\"><strong>{$safeLabel}</strong></td><td style=\"padding:8px;border:1px solid #eee;\">{$safeValue}</td></tr>";
    }

    $safeMsg = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $logoUrl = defined('LOGO_URL') ? LOGO_URL : '';
    $brandHeader = $logoUrl ? '<img src="' . htmlspecialchars($logoUrl, ENT_QUOTES, 'UTF-8') . '" alt="Luxury Andamans" style="height:48px;vertical-align:middle;" />' : '<span style="font-size:20px;font-weight:700;color:#0f172a;">Luxury Andamans</span>';
    $mailer->Body = "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#0f172a;background:#f8fafc;padding:24px\">
        <div style=\"max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden\">
            <div style=\"display:flex;align-items:center;gap:12px;padding:16px 20px;background:#0f172a;color:#fff\">{$brandHeader}<span style=\"margin-left:auto;font-size:12px;color:#cbd5e1\">Website Enquiry</span></div>
            <div style=\"padding:20px\">
                <h2 style=\"margin:0 0 8px;font-size:18px\">New Website Enquiry</h2>
                <p style=\"margin:0 0 16px;color:#475569;font-size:14px\">You have received a new enquiry from the website forms.</p>
                <table cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;margin-bottom:16px\">{$htmlRows}</table>
                <div style=\"padding:12px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px\">
                    <div style=\"font-weight:600;margin-bottom:6px;font-size:14px\">Message</div>
                    <div style=\"color:#0f172a;font-size:14px\">{$safeMsg}</div>
                </div>
            </div>
            <div style=\"padding:14px 20px;background:#f8fafc;border-top:1px solid #e5e7eb;color:#64748b;font-size:12px\">This email was sent from the website contact/enquiry/calculator forms.</div>
        </div>
    </div>";
    $mailer->AltBody = "New Website Enquiry\n\n" .
        "Name: {$name}\n" .
        "Email: {$email}\n" .
        ($phone ? "Phone: {$phone}\n" : '') .
        ($destination ? "Destination: {$destination}\n" : '') .
        ($guests ? "Guests: {$guests}\n" : '') .
        ($travelDate ? "Travel Date: {$travelDate}\n" : '') .
        ($duration ? "Duration: {$duration}\n" : '') .
        ($preferredContact ? "Preferred Contact: {$preferredContact}\n" : '') .
        ($packageName ? "Package: {$packageName}\n" : '') .
        ($totalPrice ? "Total Price: {$totalPrice}\n" : '') .
        "\nMessage:\n{$message}\n";

    $adminSent = $mailer->send();
    if (!$adminSent) {
        $logEntry = '[' . date('c') . "] Admin email failed via SMTP. Check mail-errors.log for details.\n";
        @file_put_contents(__DIR__ . '/mail-errors.log', $logEntry, FILE_APPEND | LOCK_EX);
    } else {
        $logEntry = '[' . date('c') . "] Admin email sent successfully via SMTP.\n";
        @file_put_contents(__DIR__ . '/mail-errors.log', $logEntry, FILE_APPEND | LOCK_EX);
    }

    // Autoresponder (optional)
    $userSent = false;
    try {
        $auto = new SimplePHPMailer();
        
        // User autoresponder should come from bookings@luxuryandamans.com
        $userFromEmail = defined('USER_FROM_EMAIL') ? USER_FROM_EMAIL : 'bookings@luxuryandamans.com';
        
        // Use correct SMTP credentials for bookings@ account
        $autoSmtpUsername = BOOKINGS_SMTP_USERNAME;
        $autoSmtpPassword = BOOKINGS_SMTP_PASSWORD;
        
        $auto->CharSet = 'UTF-8';
        $auto->isSMTP();
        $auto->Host = SMTP_HOST;
        $auto->SMTPAuth = true;
        $auto->Username = $autoSmtpUsername;
        $auto->Password = $autoSmtpPassword;
        $auto->SMTPSecure = strtolower(SMTP_ENCRYPTION);
        $auto->Port = SMTP_PORT;

        $auto->setFrom($userFromEmail, SMTP_FROM_NAME);
        $auto->Sender = $userFromEmail;
        $auto->addAddress($email, $name);
        $auto->isHTML(true);
        $auto->Subject = 'We received your enquiry - Luxury Andamans';
        $auto->addCustomHeader('Auto-Submitted', 'auto-replied');
        $auto->Body = "<div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#0f172a;background:#f8fafc;padding:24px\">
            <div style=\"max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden\">
                <div style=\"display:flex;align-items:center;gap:12px;padding:16px 20px;background:#0f172a;color:#fff\">{$brandHeader}<span style=\"margin-left:auto;font-size:12px;color:#cbd5e1\">Enquiry Received</span></div>
                <div style=\"padding:20px\">
                    <p style=\"margin:0 0 10px\">Hi " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . ",</p>
                    <p style=\"margin:0 0 12px;color:#475569\">Thank you for contacting Luxury Andamans. We've received your enquiry and our travel expert will get back to you shortly.</p>
                    <div style=\"padding:12px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:10px\">
                        <div style=\"font-weight:600;margin-bottom:6px;font-size:14px\">Your message</div>
                        <div style=\"color:#0f172a;font-size:14px\">{$safeMsg}</div>
                    </div>
                    <p style=\"margin:0;color:#64748b;font-size:12px\">If you didn't submit this request, you can ignore this email.</p>
                </div>
                <div style=\"padding:14px 20px;background:#f8fafc;border-top:1px solid #e5e7eb;color:#64748b;font-size:12px\">Warm regards, <strong>Luxury Andamans</strong></div>
            </div>
        </div>";
        $auto->AltBody = "Thank you for contacting Luxury Andamans. We have received your message and will respond shortly.";
        $userSent = $auto->send();
        if (!$userSent) {
            $logEntry = '[' . date('c') . "] Autoresponder email failed via SMTP. Check mail-errors.log for details.\n";
            @file_put_contents(__DIR__ . '/mail-errors.log', $logEntry, FILE_APPEND | LOCK_EX);
        } else {
            $logEntry = '[' . date('c') . "] Autoresponder email sent successfully via SMTP.\n";
            @file_put_contents(__DIR__ . '/mail-errors.log', $logEntry, FILE_APPEND | LOCK_EX);
        }
    } catch (Exception $e) {
        // Autoresponder failure should not fail the whole request
        $userSent = false;
    }

    $success = ($adminSent === true);
    $message = $success ? 'Message sent successfully via SMTP' : 'Failed to send message via SMTP. Please check server configuration.';
    
    respond([
        'success' => $success,
        'message' => $message,
        'admin_email_sent' => $adminSent,
        'user_email_sent' => $userSent,
        'smtp_used' => true,
        'debug_info' => 'Check mail-errors.log for detailed information',
        'timestamp' => date('c'),
    ], $success ? 200 : 500);
} catch (Exception $e) {
    // Log error and respond
    $error = $e->getMessage();
    $logFile = __DIR__ . '/mail-errors.log';
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] SMTP Error: $error\n";
    @file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    
    respond(['success' => false, 'message' => 'Server error sending email'], 500);
}


