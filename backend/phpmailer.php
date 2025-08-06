<?php
require_once 'config.php';

// For now, using a custom SMTP implementation
// To use PHPMailer, run: composer install in the backend directory

// Try to load PHPMailer if available
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class LuxuryAndamansMailer {
    
    /**
     * Send email using SMTP with proper authentication
     */
    public static function sendEmail($to, $subject, $body, $fromEmail, $fromPassword, $fromName = '', $isHTML = true) {
        consoleLog("Attempting to send email", [
            'to' => $to,
            'from' => $fromEmail,
            'subject' => $subject,
            'isHTML' => $isHTML
        ]);
        
        // Check if PHPMailer is available
        if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
            return self::sendWithPHPMailer($to, $subject, $body, $fromEmail, $fromPassword, $fromName, $isHTML);
        } else {
            return self::sendWithNativePHP($to, $subject, $body, $fromEmail, $fromName, $isHTML);
        }
    }
    
    /**
     * Send email using PHPMailer (recommended)
     */
    private static function sendWithPHPMailer($to, $subject, $body, $fromEmail, $fromPassword, $fromName, $isHTML) {
        try {
            $mail = new PHPMailer(true);
            
            // Server settings
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = $fromEmail;
            $mail->Password = $fromPassword;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = SMTP_PORT;
            
            // Enable debugging
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->Debugoutput = function($str, $level) {
                consoleLog("SMTP Debug", ['level' => $level, 'message' => $str]);
            };
            
            // Recipients
            $mail->setFrom($fromEmail, $fromName);
            $mail->addAddress($to);
            $mail->addReplyTo($fromEmail, $fromName);
            
            // Content
            $mail->isHTML($isHTML);
            $mail->Subject = $subject;
            $mail->Body = $body;
            
            if ($isHTML) {
                $mail->AltBody = strip_tags($body);
            }
            
            $result = $mail->send();
            consoleLog("Email sent successfully via PHPMailer", ['to' => $to, 'result' => $result]);
            return true;
            
        } catch (Exception $e) {
            consoleLog("PHPMailer Error", ['error' => $mail->ErrorInfo, 'exception' => $e->getMessage()]);
            return false;
        }
    }
    
    /**
     * Fallback: Send email using native PHP mail() function
     */
    private static function sendWithNativePHP($to, $subject, $body, $fromEmail, $fromName, $isHTML) {
        consoleLog("Using native PHP mail() function as fallback");
        
        $headers = [];
        
        if ($isHTML) {
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=UTF-8';
        }
        
        $headers[] = "From: $fromName <$fromEmail>";
        $headers[] = "Reply-To: $fromEmail";
        $headers[] = "X-Mailer: PHP/" . phpversion();
        $headers[] = "X-Priority: 1";
        $headers[] = "X-MSMail-Priority: High";
        
        $headerString = implode("\r\n", $headers);
        
        $result = mail($to, $subject, $body, $headerString);
        
        consoleLog("Native PHP mail result", ['success' => $result, 'to' => $to]);
        return $result;
    }
    
    /**
     * Send email with retry mechanism
     */
    public static function sendEmailWithRetry($to, $subject, $body, $fromEmail, $fromPassword, $fromName = '', $maxRetries = 3) {
        $attempt = 1;
        
        while ($attempt <= $maxRetries) {
            consoleLog("Email send attempt", ['attempt' => $attempt, 'max_retries' => $maxRetries]);
            
            $success = self::sendEmail($to, $subject, $body, $fromEmail, $fromPassword, $fromName);
            
            if ($success) {
                consoleLog("Email sent successfully", ['attempt' => $attempt]);
                return true;
            }
            
            if ($attempt < $maxRetries) {
                consoleLog("Email send failed, retrying", ['attempt' => $attempt]);
                sleep(2); // Wait 2 seconds before retry
            }
            
            $attempt++;
        }
        
        consoleLog("Email send failed after all retries", ['max_retries' => $maxRetries]);
        return false;
    }
}

// Wrapper functions for backward compatibility
function sendViaSMTP($to, $subject, $body, $fromEmail, $password, $fromName = '') {
    return LuxuryAndamansMailer::sendEmailWithRetry($to, $subject, $body, $fromEmail, $password, $fromName);
}

function sendSMTPMail($to, $subject, $body, $fromEmail, $fromName = '', $isHTML = true) {
    return LuxuryAndamansMailer::sendEmail($to, $subject, $body, $fromEmail, '', $fromName, $isHTML);
}
?> 