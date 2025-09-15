<?php
/**
 * Centralized Email Service for Luxury Andamans
 * Provides a single, reliable function for sending emails.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/PHPMailer.php';

/**
 * Log errors and debug information for email sending.
 *
 * @param string $message The message to log.
 */
function logMailError($message) {
    $logFile = __DIR__ . '/mail-errors.log';
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] $message\n";
    @file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}

/**
 * Sends an email using a robust, centralized mailing function.
 *
 * This function is designed to handle all email sending for the application,
 * using proper SMTP authentication based on the 'from' address.
 *
 * @param string|array $to The recipient's email address, or an array of [email => name] for multiple recipients.
 * @param string $subject The subject of the email.
 * @param string $htmlBody The HTML body of the email.
 * @param string $altBody The plain text alternative body (optional).
 * @param string|null $fromEmail The sender's email address (optional, defaults to SMTP_FROM_EMAIL).
 * @param string|null $fromName The sender's name (optional, defaults to SMTP_FROM_NAME).
 * @return array An array containing 'success' (boolean) and 'message' (string).
 */
function sendEmail($to, $subject, $htmlBody, $altBody = '', $fromEmail = null, $fromName = null) {
    try {
        $mailer = new SimplePHPMailer();

        $fromEmail = $fromEmail ?: SMTP_FROM_EMAIL;
        $fromName = $fromName ?: SMTP_FROM_NAME;

        // Determine SMTP credentials based on the FROM address
        $smtpUsername = SMTP_USERNAME;
        $smtpPassword = SMTP_PASSWORD;

        if ($fromEmail === 'info@luxuryandamans.com') {
            $smtpUsername = INFO_SMTP_USERNAME;
            $smtpPassword = INFO_SMTP_PASSWORD;
        } elseif ($fromEmail === 'bookings@luxuryandamans.com') {
            $smtpUsername = BOOKINGS_SMTP_USERNAME;
            $smtpPassword = BOOKINGS_SMTP_PASSWORD;
        }

        // SMTP configuration
        $mailer->CharSet = 'UTF-8';
        $mailer->isSMTP();
        $mailer->Host = SMTP_HOST;
        $mailer->SMTPAuth = true;
        $mailer->Username = $smtpUsername;
        $mailer->Password = $smtpPassword;
        $mailer->SMTPSecure = strtolower(SMTP_ENCRYPTION);
        $mailer->Port = SMTP_PORT;

        // Sender and recipient(s)
        $mailer->setFrom($fromEmail, $fromName);
        $mailer->Sender = $fromEmail; // Set the Return-Path

        if (is_array($to)) {
            foreach ($to as $email => $name) {
                if (is_numeric($email)) {
                    $mailer->addAddress($name); // Array of emails without names
                } else {
                    $mailer->addAddress($email, $name); // Associative array of email => name
                }
            }
        } else {
            $mailer->addAddress($to);
        }

        // Email content
        $mailer->isHTML(true);
        $mailer->Subject = $subject;
        $mailer->Body = $htmlBody;
        if (!empty($altBody)) {
            $mailer->AltBody = $altBody;
        }

        // Send the email
        if ($mailer->send()) {
            $toList = is_array($to) ? implode(', ', array_keys($to)) : $to;
            logMailError("✅ Email sent successfully FROM: {$fromEmail} (auth: {$smtpUsername}) TO: {$toList}");
            return ['success' => true, 'message' => 'Email sent successfully'];
        } else {
            $toList = is_array($to) ? implode(', ', array_keys($to)) : $to;
            logMailError("❌ Failed to send email FROM: {$fromEmail} (auth: {$smtpUsername}) TO: {$toList}. Check mail-errors.log for details from SimplePHPMailer.");
            return ['success' => false, 'message' => 'Failed to send email via SMTP.'];
        }

    } catch (Exception $e) {
        $toList = is_array($to) ? implode(', ', array_keys($to)) : $to;
        logMailError("❌ Email sending exception FROM: {$fromEmail} TO: {$toList} - " . $e->getMessage());
        return ['success' => false, 'message' => 'Email sending failed with an exception: ' . $e->getMessage()];
    }
}
?>
