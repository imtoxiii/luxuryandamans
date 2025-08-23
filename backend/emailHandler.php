<?php
/**
 * Robust Email Handler for Luxury Andamans
 * Handles both contact forms and automated emails
 */

// Headers for API response
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Load configuration
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/log-submissions.php';

/**
 * Send email using improved SMTP configuration
 */
function sendEmail($to, $subject, $htmlBody, $altBody = '', $fromName = null) {
    return sendEmailWithCustomFrom($to, $subject, $htmlBody, $altBody, SMTP_FROM_EMAIL, $fromName);
}

/**
 * Send email with custom FROM address
 */
function sendEmailWithCustomFrom($to, $subject, $htmlBody, $altBody = '', $fromEmail = null, $fromName = null) {
    try {
        $mailer = new SimplePHPMailer();
        
        // Set sender info with custom FROM address
        $fromEmail = $fromEmail ?: SMTP_FROM_EMAIL;
        $fromName = $fromName ?: SMTP_FROM_NAME;
        
        // Choose correct SMTP credentials based on FROM address
        $smtpUsername = SMTP_USERNAME;
        $smtpPassword = SMTP_PASSWORD;
        
        if ($fromEmail === 'info@luxuryandamans.com') {
            $smtpUsername = INFO_SMTP_USERNAME;
            $smtpPassword = INFO_SMTP_PASSWORD;
        } elseif ($fromEmail === 'bookings@luxuryandamans.com') {
            $smtpUsername = BOOKINGS_SMTP_USERNAME;
            $smtpPassword = BOOKINGS_SMTP_PASSWORD;
        }
        
        // Basic configuration with correct credentials
        $mailer->CharSet = 'UTF-8';
        $mailer->isSMTP();
        $mailer->Host = SMTP_HOST;
        $mailer->SMTPAuth = true;
        $mailer->Username = $smtpUsername;
        $mailer->Password = $smtpPassword;
        $mailer->SMTPSecure = strtolower(SMTP_ENCRYPTION);
        $mailer->Port = SMTP_PORT;
        
        $mailer->setFrom($fromEmail, $fromName);
        $mailer->Sender = $fromEmail; // Use same email for return-path
        
        // Set recipient(s)
        if (is_array($to)) {
            foreach ($to as $email => $name) {
                if (is_numeric($email)) {
                    $mailer->addAddress($name);
                } else {
                    $mailer->addAddress($email, $name);
                }
            }
        } else {
            $mailer->addAddress($to);
        }
        
        // Email content
        $mailer->isHTML(true);
        $mailer->Subject = $subject;
        $mailer->Body = $htmlBody;
        if ($altBody) {
            $mailer->AltBody = $altBody;
        }
        
        // Send email
        $result = $mailer->send();
        
        $toList = is_array($to) ? implode(', ', array_keys($to)) : $to;
        if ($result) {
            logError("Email sent successfully FROM: {$fromEmail} (auth: {$smtpUsername}) TO: {$toList}");
            return ['success' => true, 'message' => 'Email sent successfully'];
        } else {
            logError("Failed to send email FROM: {$fromEmail} (auth: {$smtpUsername}) TO: {$toList}");
            return ['success' => false, 'message' => 'Failed to send email via SMTP'];
        }
        
    } catch (Exception $e) {
        $toList = is_array($to) ? implode(', ', array_keys($to)) : $to;
        logError("Email sending error FROM: {$fromEmail} (auth: {$smtpUsername}) TO: {$toList} - " . $e->getMessage());
        return ['success' => false, 'message' => 'Email sending failed: ' . $e->getMessage()];
    }
}

/**
 * Log errors and debug information
 */
function logError($message) {
    $logFile = __DIR__ . '/mail-errors.log';
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] $message\n";
    @file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}

/**
 * Sanitize and validate form input
 */
function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

/**
 * Validate email address
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Build HTML email template
 */
function buildEmailTemplate($title, $content, $footerText = 'Luxury Andamans') {
    $logoUrl = defined('LOGO_URL') ? LOGO_URL : '';
    $brandHeader = $logoUrl ? 
        '<img src="' . htmlspecialchars($logoUrl, ENT_QUOTES, 'UTF-8') . '" alt="Luxury Andamans" style="height:48px;vertical-align:middle;" />' : 
        '<span style="font-size:20px;font-weight:700;color:#0f172a;">Luxury Andamans</span>';
    
    return "
    <div style=\"font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#0f172a;background:#f8fafc;padding:24px\">
        <div style=\"max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden\">
            <div style=\"display:flex;align-items:center;gap:12px;padding:16px 20px;background:#0f172a;color:#fff\">
                {$brandHeader}
                <span style=\"margin-left:auto;font-size:12px;color:#cbd5e1\">{$title}</span>
            </div>
            <div style=\"padding:20px\">
                {$content}
            </div>
            <div style=\"padding:14px 20px;background:#f8fafc;border-top:1px solid #e5e7eb;color:#64748b;font-size:12px\">
                {$footerText}
            </div>
        </div>
    </div>";
}

// Handle the email sending request
try {
    // Parse input data
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    $rawBody = file_get_contents('php://input');
    
    $data = [];
    if (strpos($contentType, 'application/json') !== false && $rawBody) {
        $decoded = json_decode($rawBody, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            $data = $decoded;
        }
    } else {
        $data = $_POST;
    }
    
    // Sanitize input data
    $data = sanitizeInput($data);
    
    // Extract and validate required fields
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $message = $data['message'] ?? '';
    $subject = $data['subject'] ?? 'Website Enquiry';
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        throw new Exception('Missing required fields: name, email, and message are required');
    }
    
    if (!isValidEmail($email)) {
        throw new Exception('Invalid email address provided');
    }
    
    // Log the submission
    logSubmission($data, 'processing');
    
    // Build admin email content
    $adminContent = "<h2>New Website Enquiry</h2>";
    $adminContent .= "<p>You have received a new enquiry from the website:</p>";
    $adminContent .= "<table style=\"width:100%;border-collapse:collapse;margin:16px 0;\">";
    
    $fields = [
        'Name' => $name,
        'Email' => $email,
        'Phone' => $data['phone'] ?? '',
        'Subject' => $subject,
        'Destination' => $data['destination'] ?? '',
        'Guests' => $data['guests'] ?? '',
        'Travel Date' => $data['travel_date'] ?? '',
        'Duration' => $data['duration'] ?? '',
        'Preferred Contact' => $data['preferred_contact'] ?? '',
        'Package' => $data['packageName'] ?? '',
        'Total Price' => $data['totalPrice'] ?? '',
    ];
    
    foreach ($fields as $label => $value) {
        if (!empty($value)) {
            $adminContent .= "<tr><td style=\"padding:8px;border:1px solid #eee;font-weight:bold;\">{$label}</td>";
            $adminContent .= "<td style=\"padding:8px;border:1px solid #eee;\">" . nl2br(htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8')) . "</td></tr>";
        }
    }
    
    $adminContent .= "</table>";
    $adminContent .= "<div style=\"padding:12px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;margin-top:16px;\">";
    $adminContent .= "<h4 style=\"margin:0 0 8px;\">Message:</h4>";
    $adminContent .= "<p style=\"margin:0;\">" . nl2br(htmlspecialchars($message)) . "</p>";
    $adminContent .= "</div>";
    
    $adminEmailBody = buildEmailTemplate('Website Enquiry', $adminContent);
    
    // Send admin notification using info@luxuryandamans.com as sender
    $adminRecipients = explode(',', ADMIN_RECIPIENTS);
    $adminEmails = [];
    foreach ($adminRecipients as $recipient) {
        $adminEmails[trim($recipient)] = '';
    }
    
    $adminResult = sendEmailWithCustomFrom(
        $adminEmails,
        $subject . ' - Website Enquiry',
        $adminEmailBody,
        "New enquiry from {$name} ({$email})\n\nMessage: {$message}",
        ADMIN_FROM_EMAIL,
        SMTP_FROM_NAME
    );
    
    // Send autoresponder to customer
    $customerContent = "<p>Hi " . htmlspecialchars($name) . ",</p>";
    $customerContent .= "<p>Thank you for contacting Luxury Andamans. We have received your enquiry and our travel experts will get back to you within 24 hours.</p>";
    $customerContent .= "<div style=\"padding:12px;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;margin:16px 0;\">";
    $customerContent .= "<h4 style=\"margin:0 0 8px;\">Your Message:</h4>";
    $customerContent .= "<p style=\"margin:0;\">" . nl2br(htmlspecialchars($message)) . "</p>";
    $customerContent .= "</div>";
    $customerContent .= "<p>If you have any urgent queries, please feel free to call us directly.</p>";
    $customerContent .= "<p>Best regards,<br><strong>Luxury Andamans Team</strong></p>";
    
    $customerEmailBody = buildEmailTemplate('Enquiry Received', $customerContent);
    
    $customerResult = sendEmailWithCustomFrom(
        $email,
        'Thank you for your enquiry - Luxury Andamans',
        $customerEmailBody,
        "Thank you for contacting Luxury Andamans. We have received your enquiry and will respond shortly.",
        USER_FROM_EMAIL,
        SMTP_FROM_NAME
    );
    
    // Log results
    logSubmission($data, $adminResult['success'] ? 'sent' : 'failed');
    
    // Return response
    $response = [
        'success' => $adminResult['success'],
        'message' => $adminResult['message'],
        'admin_email_sent' => $adminResult['success'],
        'customer_email_sent' => $customerResult['success'],
        'timestamp' => date('c')
    ];
    
    echo json_encode($response);
    
} catch (Exception $e) {
    logError("Email handler error: " . $e->getMessage());
    
    $response = [
        'success' => false,
        'message' => $e->getMessage(),
        'timestamp' => date('c')
    ];
    
    http_response_code(500);
    echo json_encode($response);
}
?>
