<?php
// Load environment variables securely
require_once __DIR__ . '/env-loader.php';
EnvLoader::load();

// Email Configuration - Now loaded from environment variables
define('SMTP_HOST', EnvLoader::get('SMTP_HOST', 'mail.luxuryandamans.com'));
define('SMTP_PORT', (int)EnvLoader::get('SMTP_PORT', 465));
define('SMTP_SECURE', EnvLoader::get('SMTP_SECURE', 'ssl')); // 'ssl' for port 465, 'tls' for port 587

// Email accounts - Securely loaded from .env file
define('INFO_EMAIL', EnvLoader::get('INFO_EMAIL', 'info@luxuryandamans.com'));
define('INFO_PASSWORD', EnvLoader::get('INFO_PASSWORD', ''));
define('BOOKING_EMAIL', EnvLoader::get('BOOKING_EMAIL', 'bookings@luxuryandamans.com'));
define('BOOKING_PASSWORD', EnvLoader::get('BOOKING_PASSWORD', ''));

// Admin email to receive notifications
define('ADMIN_EMAIL', EnvLoader::get('ADMIN_EMAIL', 'admin@luxuryandamans.com'));

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set timezone
date_default_timezone_set('Asia/Kolkata');

// CORS headers for frontend requests
function setCorsHeaders() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    
    // Handle preflight requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        exit(0);
    }
}

// Logging function
function logToFile($filename, $data) {
    $logDir = __DIR__ . '/logs';
    
    // Create logs directory if it doesn't exist
    if (!is_dir($logDir)) {
        mkdir($logDir, 0755, true);
    }
    
    $filePath = $logDir . '/' . $filename;
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "\n--- {$timestamp} ---\n" . json_encode($data, JSON_PRETTY_PRINT) . "\n" . str_repeat('=', 50) . "\n";
    
    file_put_contents($filePath, $logEntry, FILE_APPEND | LOCK_EX);
    error_log("Data logged to {$filename}");
}

// Validate email format
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Sanitize input data
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Console log function for debugging
function consoleLog($message, $data = null) {
    $timestamp = date('Y-m-d H:i:s');
    $logMessage = "[$timestamp] $message";
    
    if ($data !== null) {
        $logMessage .= ": " . json_encode($data);
    }
    
    error_log($logMessage);
    
    // Also log to console.log file for easy debugging
    logToFile('console.log', [
        'timestamp' => $timestamp,
        'message' => $message,
        'data' => $data
    ]);
}
?> 