<?php
/**
 * Log all form submissions for debugging and record keeping
 */

function logSubmission($data, $status = 'success') {
    $logFile = __DIR__ . '/form-submissions.log';
    $timestamp = date('Y-m-d H:i:s');
    
    $logData = [
        'timestamp' => $timestamp,
        'status' => $status,
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
        'data' => $data
    ];
    
    $logEntry = json_encode($logData, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n";
    @file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
}

// Add this to processForm.php after extracting fields
if (!function_exists('logSubmission')) {
    require_once __DIR__ . '/log-submissions.php';
}

// Log the submission
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
