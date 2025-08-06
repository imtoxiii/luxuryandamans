<?php
/**
 * PHPMailer Simple Autoloader
 * Since we're using a simple setup, we'll include the necessary files manually
 */

// Download PHPMailer from: https://github.com/PHPMailer/PHPMailer
// For now, we'll use a simple mail() function with SMTP headers
// But it's recommended to install PHPMailer via Composer for production

// Simple SMTP mail function using PHP's built-in mail()
function sendSMTPMail($to, $subject, $body, $fromEmail, $fromName = '', $isHTML = true) {
    $headers = array();
    
    if ($isHTML) {
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=UTF-8';
    }
    
    $headers[] = "From: $fromName <$fromEmail>";
    $headers[] = "Reply-To: $fromEmail";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    
    $headerString = implode("\r\n", $headers);
    
    return mail($to, $subject, $body, $headerString);
}

// Alternative: Using cURL to send via SMTP (more reliable)
function sendViaSMTP($to, $subject, $body, $fromEmail, $password, $fromName = '') {
    // This is a simplified version - in production, use PHPMailer
    consoleLog("Attempting to send email via SMTP", [
        'to' => $to,
        'from' => $fromEmail,
        'subject' => $subject
    ]);
    
    // For now, using simple mail() function
    // In production, implement proper SMTP authentication
    return sendSMTPMail($to, $subject, $body, $fromEmail, $fromName, true);
}
?> 