<?php
require_once 'config.php';

/**
 * Simplified and reliable email sender
 * Uses native PHP mail() function with proper headers
 */
class LuxuryAndamansMailer {
    
    /**
     * Send email using native PHP mail() with enhanced headers
     */
    public static function sendEmail($to, $subject, $body, $fromEmail, $fromPassword, $fromName = '', $isHTML = true, $replyTo = null) {
        consoleLog("=== EMAIL SEND ATTEMPT ===", [
            'to' => $to,
            'from' => $fromEmail,
            'from_name' => $fromName,
            'subject' => $subject,
            'isHTML' => $isHTML,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
        // Always try native PHP mail first
        return self::sendWithNativePHP($to, $subject, $body, $fromEmail, $fromName, $isHTML, $replyTo);
    }
    
    /**
     * Send email using native PHP mail() function with comprehensive headers
     */
    private static function sendWithNativePHP($to, $subject, $body, $fromEmail, $fromName, $isHTML, $replyTo) {
        consoleLog("Using native PHP mail() function", [
            'to' => $to,
            'from' => $fromEmail,
            'from_name' => $fromName
        ]);
        
        // Validate email addresses
        if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
            consoleLog("Invalid recipient email", ['email' => $to]);
            return false;
        }
        
        if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
            consoleLog("Invalid sender email", ['email' => $fromEmail]);
            return false;
        }
        
        $headers = [];
        
        // Basic headers
        if ($isHTML) {
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=UTF-8';
        } else {
            $headers[] = 'Content-type: text/plain; charset=UTF-8';
        }
        // Encourage proper UTF-8 handling in some MTAs
        $headers[] = 'Content-Transfer-Encoding: 8bit';
        
        // From header
        if (!empty($fromName)) {
            $headers[] = "From: {$fromName} <{$fromEmail}>";
        } else {
            $headers[] = "From: {$fromEmail}";
        }
        
        // Additional headers for better delivery
        if (!empty($replyTo) && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
            $headers[] = "Reply-To: {$replyTo}";
        } else {
            $headers[] = "Reply-To: {$fromEmail}";
        }
        $headers[] = "Return-Path: {$fromEmail}";
        $headers[] = "X-Mailer: PHP/" . phpversion();
        $headers[] = "X-Priority: 3";
        $headers[] = "Message-ID: <" . time() . "." . uniqid() . "@luxuryandamans.com>";
        $headers[] = "Date: " . date('r');
        
        // Combine headers
        $headerString = implode("\r\n", $headers);
        
        consoleLog("Email headers prepared", [
            'headers' => $headerString,
            'subject' => $subject
        ]);
        
        // Attempt to send email with envelope sender to improve deliverability
        $additionalParameters = '';
        if (!empty($fromEmail)) {
            $additionalParameters = '-f' . escapeshellarg($fromEmail);
        }
        $result = mail($to, $subject, $body, $headerString, $additionalParameters);
        
        if ($result) {
            consoleLog("✅ Email sent successfully", [
                'to' => $to,
                'subject' => $subject,
                'method' => 'native_php_mail'
            ]);
        } else {
            consoleLog("❌ Email send failed", [
                'to' => $to,
                'subject' => $subject,
                'last_error' => error_get_last()
            ]);
            
            // Log the failure
            logToFile('form_errors.txt', [
                'error' => 'Email send failed using PHP mail()',
                'to' => $to,
                'from' => $fromEmail,
                'subject' => $subject,
                'last_error' => error_get_last(),
                'timestamp' => date('Y-m-d H:i:s')
            ]);
        }
        
        return $result;
    }
    
    /**
     * Send email with retry mechanism
     */
    public static function sendEmailWithRetry($to, $subject, $body, $fromEmail, $fromPassword, $fromName = '', $maxRetries = 3, $replyTo = null) {
        $attempt = 1;
        
        while ($attempt <= $maxRetries) {
            consoleLog("Email send attempt #{$attempt}", [
                'attempt' => $attempt, 
                'max_retries' => $maxRetries,
                'to' => $to
            ]);
            
            $success = self::sendEmail($to, $subject, $body, $fromEmail, $fromPassword, $fromName, true, $replyTo);
            
            if ($success) {
                consoleLog("✅ Email sent successfully on attempt #{$attempt}", ['to' => $to]);
                return true;
            }
            
            if ($attempt < $maxRetries) {
                consoleLog("❌ Email send failed, retrying in 2 seconds...", ['attempt' => $attempt]);
                sleep(2); // Wait 2 seconds before retry
            }
            
            $attempt++;
        }
        
        consoleLog("❌ Email send failed after all {$maxRetries} attempts", ['to' => $to]);
        
        // Log the final failure
        logToFile('form_errors.txt', [
            'error' => "Email send failed after {$maxRetries} attempts",
            'to' => $to,
            'from' => $fromEmail,
            'subject' => $subject,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
        return false;
    }
}

// Wrapper functions for backward compatibility
function sendViaSMTP($to, $subject, $body, $fromEmail, $password, $fromName = '', $replyTo = null) {
    return LuxuryAndamansMailer::sendEmailWithRetry($to, $subject, $body, $fromEmail, $password, $fromName, 3, $replyTo);
}

function sendSMTPMail($to, $subject, $body, $fromEmail, $fromName = '', $isHTML = true, $replyTo = null) {
    return LuxuryAndamansMailer::sendEmail($to, $subject, $body, $fromEmail, '', $fromName, $isHTML, $replyTo);
}

// Test function to verify mail capability
function testMailFunction() {
    consoleLog("=== TESTING MAIL FUNCTION ===");
    
    if (!function_exists('mail')) {
        consoleLog("❌ PHP mail() function is not available");
        return false;
    }
    
    consoleLog("✅ PHP mail() function is available");
    
    // Test with a simple email
    $testResult = mail('test@example.com', 'Test Subject', 'Test message', 'From: test@luxuryandamans.com');
    
    if ($testResult) {
        consoleLog("✅ Test mail() call returned true");
    } else {
        consoleLog("❌ Test mail() call returned false");
    }
    
    return $testResult;
}
?>
