<?php
/**
 * Luxury Andamans Form Handler
 * Handles all form submissions and sends proper emails
 */

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

// Load configuration
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/log-submissions.php';
require_once __DIR__ . '/emailService.php';

/**
 * Build beautiful HTML email template
 */
function buildEmailTemplate($title, $content, $isUserEmail = false) {
    $logoUrl = defined('LOGO_URL') ? LOGO_URL : '';
    $brandHeader = $logoUrl ? 
        '<img src="' . htmlspecialchars($logoUrl, ENT_QUOTES, 'UTF-8') . '" alt="Luxury Andamans" style="height:48px;vertical-align:middle;" />' : 
        '<span style="font-size:20px;font-weight:700;color:#ffffff;">Luxury Andamans</span>';
    
    $headerColor = $isUserEmail ? '#0f4c75' : '#2c3e50';
    $accentColor = $isUserEmail ? '#0f4c75' : '#2c3e50';
    
    return "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>{$title}</title>
    </head>
    <body style='margin:0;padding:0;background:#ffffff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#111827;'>
        <div style='max-width:640px;margin:0 auto;padding:16px;'>
            <div style='border:1px solid #e5e7eb;border-radius:10px;'>
                <div style='padding:20px 24px;'>
                    <h2 style='margin:0 0 12px;font-size:18px;font-weight:700;color:#111827;'>{$title}</h2>
                    <div style='font-size:14px;line-height:1.6;color:#111827;'>
                        {$content}
                    </div>
                </div>
                <div style='background:#f9fafb;padding:16px 24px;border-top:1px solid #e5e7eb;'>
                    <p style='margin:0;color:#374151;font-size:13px;'><strong>Call:</strong> +91 6297576826</p>
                    <p style='margin:6px 0 0;color:#6b7280;font-size:12px;'>Luxury Andamans</p>
                </div>
            </div>
        </div>
    </body>
    </html>";
}

/**
 * Build admin notification email content
 */
function buildAdminEmailContent($formData) {
    $content = "<h2 style='color:#2c3e50;margin-top:0;'>New Website Enquiry</h2>";
    $content .= "<p style='color:#555;font-size:16px;line-height:1.6;'>You have received a new enquiry from your website:</p>";
    
    // Customer Details Section
    $content .= "<div style='background:#f8f9fa;padding:20px;border-radius:8px;margin:20px 0;'>";
    $content .= "<h3 style='color:#2c3e50;margin:0 0 16px;font-size:18px;'>👤 Customer Details</h3>";
    $content .= "<table style='width:100%;border-collapse:collapse;'>";
    
    $customerFields = [
        'Name' => $formData['name'] ?? '',
        'Email' => $formData['email'] ?? '',
        'Phone' => $formData['phone'] ?? '',
        'Subject' => $formData['subject'] ?? ''
    ];
    
    foreach ($customerFields as $label => $value) {
        if (!empty($value)) {
            $content .= "<tr><td style='padding:8px 12px;border-bottom:1px solid #dee2e6;font-weight:600;color:#495057;width:120px;'>{$label}:</td>";
            $content .= "<td style='padding:8px 12px;border-bottom:1px solid #dee2e6;color:#212529;'>" . htmlspecialchars($value) . "</td></tr>";
        }
    }
    $content .= "</table></div>";
    
    // Travel Details Section (if available)
    $travelFields = [
        'Destination' => $formData['destination'] ?? '',
        'Guests' => $formData['guests'] ?? $formData['travelers'] ?? '',
        'Travel Date' => $formData['travel_date'] ?? '',
        'Duration' => ($formData['duration'] ?? '') ? $formData['duration'] . ' days' : '',
        'Preferred Contact' => $formData['preferred_contact'] ?? '',
        'Package' => $formData['packageName'] ?? '',
        'Total Price' => $formData['totalPrice'] ?? '',
        'Preferred Star Category' => isset($formData['starTier']) && $formData['starTier'] !== '' ? ($formData['starTier'] . '-Star') : '',
        'Preferred Room Type' => $formData['roomType'] ?? '',
        'Selected Hotel' => $formData['hotelName'] ?? ''
    ];
    
    // Additional pricing calculator fields
    $calculatorFields = [
        'Selected Destinations' => is_array($formData['selectedDestinations'] ?? '') ? implode(', ', $formData['selectedDestinations']) : ($formData['selectedDestinations'] ?? ''),
        'Accommodation Tier' => $formData['accommodationTier'] ?? '',
        'Room Type' => $formData['roomType'] ?? '',
        'Meal Plan' => $formData['mealPlan'] ?? '',
        'Selected Activities' => is_array($formData['selectedActivities'] ?? '') ? implode(', ', $formData['selectedActivities']) : ($formData['selectedActivities'] ?? ''),
        'Package Activities' => is_array($formData['selectedActivities'] ?? '') ? implode(', ', $formData['selectedActivities']) : ($formData['selectedActivities'] ?? ''),
        'Tour Type' => $formData['tourType'] ?? '',
        'Include Flights' => ($formData['includeFlights'] ?? false) ? 'Yes' : 'No',
        'Include Insurance' => ($formData['includeInsurance'] ?? false) ? 'Yes' : 'No'
    ];
    
    $hasTravelData = array_filter($travelFields);
    if (!empty($hasTravelData)) {
        $content .= "<div style='background:#e8f5e8;padding:20px;border-radius:8px;margin:20px 0;'>";
        $content .= "<h3 style='color:#2c3e50;margin:0 0 16px;font-size:18px;'>✈️ Travel Details</h3>";
        $content .= "<table style='width:100%;border-collapse:collapse;'>";
        
        foreach ($travelFields as $label => $value) {
            if (!empty($value)) {
                $content .= "<tr><td style='padding:8px 12px;border-bottom:1px solid #c3e6c3;font-weight:600;color:#495057;width:140px;'>{$label}:</td>";
                $content .= "<td style='padding:8px 12px;border-bottom:1px solid #c3e6c3;color:#212529;'>" . htmlspecialchars($value) . "</td></tr>";
            }
        }
        $content .= "</table></div>";
    }
    
    // Calculator Details Section (if available)
    $hasCalculatorData = array_filter($calculatorFields);
    if (!empty($hasCalculatorData)) {
        $content .= "<div style='background:#f0f8ff;padding:20px;border-radius:8px;margin:20px 0;'>";
        $content .= "<h3 style='color:#2c3e50;margin:0 0 16px;font-size:18px;'>🧮 Calculator Selections</h3>";
        $content .= "<table style='width:100%;border-collapse:collapse;'>";
        
        foreach ($calculatorFields as $label => $value) {
            if (!empty($value)) {
                $content .= "<tr><td style='padding:8px 12px;border-bottom:1px solid #c3e6c3;font-weight:600;color:#495057;width:140px;'>{$label}:</td>";
                $content .= "<td style='padding:8px 12px;border-bottom:1px solid #c3e6c3;color:#212529;'>" . htmlspecialchars($value) . "</td></tr>";
            }
        }
        $content .= "</table></div>";
    }
    
    // Message Section
    $message = $formData['message'] ?? '';
    if (!empty($message)) {
        $content .= "<div style='background:#fff3cd;padding:20px;border-radius:8px;margin:20px 0;border-left:4px solid #ffc107;'>";
        $content .= "<h3 style='color:#856404;margin:0 0 12px;font-size:18px;'>💬 Customer Message</h3>";
        $content .= "<p style='color:#856404;margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap;'>" . htmlspecialchars($message) . "</p>";
        $content .= "</div>";
    }
    
    // Action Section
    $content .= "<div style='background:#e3f2fd;padding:20px;border-radius:8px;margin:20px 0;text-align:center;'>";
    $content .= "<h3 style='color:#1565c0;margin:0 0 12px;'>🎯 Next Steps</h3>";
    $content .= "<p style='color:#1565c0;margin:0;'>Reply to this email or contact the customer directly to provide a personalized quote and assistance.</p>";
    $content .= "</div>";
    
    return $content;
}

/**
 * Build user thank you email content
 */
function buildUserEmailContent($customerName) {
    $content = "<p style='font-size:16px;line-height:1.6;color:#111827;margin:0 0 12px;'>Hi " . htmlspecialchars($customerName) . ",</p>";
    $content .= "<p style='font-size:16px;line-height:1.6;color:#111827;margin:0 0 12px;'>Thanks for getting in touch with Luxury Andamans. We've received your enquiry and a travel expert will contact you within 24 hours.</p>";
    $content .= "<p style='font-size:14px;line-height:1.6;color:#374151;margin:0 0 6px;'><strong>Need something urgent?</strong> Call us at <a href='tel:+916297576826' style='color:#0f4c75;text-decoration:none;'>+91 6297576826</a>.</p>";
    $content .= "<p style='font-size:14px;line-height:1.6;color:#6b7280;margin:12px 0 0;'>We'll be in touch soon.</p>";
    return $content;
}

// Parse request data
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$rawBody = file_get_contents('php://input');

$formData = [];
if (strpos($contentType, 'application/json') !== false && $rawBody) {
    $decoded = json_decode($rawBody, true);
    if (json_last_error() === JSON_ERROR_NONE) {
        $formData = $decoded;
    }
} else {
    $formData = $_POST;
}

// Sanitize input data
function sanitizeData($data) {
    if (is_array($data)) {
        return array_map('sanitizeData', $data);
    }
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

$formData = sanitizeData($formData);

// Validate required fields
$name = $formData['name'] ?? '';
$email = $formData['email'] ?? '';
$phone = $formData['phone'] ?? '';
$message = $formData['message'] ?? '';

if (empty($name) || empty($message) || (empty($email) && empty($phone))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields: name, message, and at least one contact (email or phone)']);
    exit;
}

$hasValidEmail = !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL);
if (!empty($email) && !$hasValidEmail) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Log the submission
logSubmission($formData, 'processing');

try {
    // Send admin notification
    $adminContent = buildAdminEmailContent($formData);
    $adminHtml = buildEmailTemplate('New Website Enquiry', $adminContent, false);
    
    $adminSubject = '[Enquiry] ' . ($formData['subject'] ?? 'Website enquiry');
    $adminResult = sendEmail(
        ['xumeet1987@gmail.com' => 'Admin'],
        $adminSubject,
        $adminHtml,
        "New enquiry from {$name}" . ($email ? " ({$email})" : "") . "\n\nMessage: {$message}",
        'info@luxuryandamans.com'
    );
    
    // Send user thank you email
    $userContent = buildUserEmailContent($name);
    $userHtml = buildEmailTemplate('Thank You for Your Enquiry', $userContent, true);
    
    $userResult = ['success' => false];
    if ($hasValidEmail) {
        $userResult = sendEmail(
            [$email => $name],
            'We received your enquiry',
            $userHtml,
            "Thank you for contacting Luxury Andamans. We have received your enquiry and will respond within 24 hours.",
            'bookings@luxuryandamans.com'
        );
    }
    
    // Log results
    logSubmission($formData, $adminResult['success'] ? 'sent' : 'failed');
    
    // Return response
    $response = [
        'success' => $adminResult['success'],
        'message' => $adminResult['success'] ? 'Your enquiry has been submitted successfully!' : 'Failed to send enquiry. Please try again.',
        'admin_email_sent' => $adminResult['success'],
        'user_email_sent' => $userResult['success'],
        'timestamp' => date('c')
    ];
    
    echo json_encode($response);
    
} catch (Exception $e) {
    error_log("Form handler error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error occurred. Please try again.',
        'timestamp' => date('c')
    ]);
}
?>
