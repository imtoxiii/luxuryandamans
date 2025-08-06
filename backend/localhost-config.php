<?php
// Localhost Testing Configuration for Luxury Andamans Email System

// Override main config for localhost testing
define('SMTP_HOST', 'mail.luxuryandamans.com');
define('SMTP_PORT', 465);
define('SMTP_SECURE', 'ssl');

// Email accounts (same as production)
define('INFO_EMAIL', 'info@luxuryandamans.com');
define('INFO_PASSWORD', 'Sumeet@26');
define('BOOKING_EMAIL', 'bookings@luxuryandamans.com');
define('BOOKING_PASSWORD', 'Sumeet@26'); // You need to set this!

// For localhost testing, you can use your personal email to receive test notifications
define('ADMIN_EMAIL', 'xumeet1987@gmail.com'); // This will receive all test emails

// Localhost debugging settings
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

// Set timezone
date_default_timezone_set('Asia/Kolkata');

// CORS headers for localhost development
function setCorsHeaders() {
    header("Access-Control-Allow-Origin: http://localhost:5173"); // Vite dev server
    header("Access-Control-Allow-Origin: http://localhost:3000"); // Alternative dev server
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Access-Control-Allow-Credentials: true");
    
    // Handle preflight requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit(0);
    }
}

// Enhanced logging for localhost
function logToFile($filename, $data) {
    $logDir = __DIR__ . '/logs';
    
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }
    
    $filePath = $logDir . '/' . $filename;
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "\n=== LOCALHOST TEST - {$timestamp} ===\n" . json_encode($data, JSON_PRETTY_PRINT) . "\n" . str_repeat('=', 60) . "\n";
    
    file_put_contents($filePath, $logEntry, FILE_APPEND | LOCK_EX);
    error_log("LOCALHOST: Data logged to {$filename}");
}

// Validate email format
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Sanitize input data
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Enhanced console logging for localhost testing
function consoleLog($message, $data = null) {
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = "[LOCALHOST-TEST $timestamp] $message";
    
    if ($data !== null) {
        $logMessage .= ": " . json_encode($data);
    }
    
    error_log($logMessage);
    
    // Also output to browser console if possible
    echo "<script>console.log(" . json_encode("PHP: $logMessage") . ");</script>";
    
    // Log to file for debugging
    logToFile('localhost-console.log', [
        'timestamp' => $timestamp,
        'message' => $message,
        'data' => $data,
        'request_uri' => $_SERVER['REQUEST_URI'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
    ]);
}

// Test email function for localhost
function sendTestEmail($to, $subject, $body) {
    consoleLog("LOCALHOST TEST: Simulating email send", [
        'to' => $to,
        'subject' => $subject,
        'body_length' => strlen($body)
    ]);
    
    // For localhost testing, just log the email instead of sending
    logToFile('localhost-test-emails.log', [
        'to' => $to,
        'subject' => $subject,
        'body' => $body,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    
    return true; // Always return success for testing
}

echo "<!-- Localhost configuration loaded for Luxury Andamans Email System -->";
?> 