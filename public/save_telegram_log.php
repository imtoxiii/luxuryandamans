<?php
// Set headers to allow cross-origin requests if needed, or just standard access
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
    exit;
}

// Define specific log file path
// Storing outside public_html is safer, but user asked for "in the server" and simplicity.
// We will create a 'logs' directory if it doesn't exist.
$logDir = __DIR__ . '/private_logs';
if (!file_exists($logDir)) {
    mkdir($logDir, 0755, true);
    
    // Create a .htaccess to deny access to this folder via browser
    $htaccess = $logDir . '/.htaccess';
    file_put_contents($htaccess, "Order Allow,Deny\nDeny from all");
}

$logFile = $logDir . '/telegram_backup_logs.txt';

// Format the log entry
$timestamp = date('Y-m-d H:i:s');
$status = isset($data['status']) ? $data['status'] : 'unknown';
$message = isset($data['message']) ? $data['message'] : '';
$metadata = isset($data['metadata']) ? json_encode($data['metadata']) : '';

// Create a divider
$divider = str_repeat('-', 50);

$logEntry = "Time: $timestamp\nStatus: $status\nLog:\n$message\nMetadata: $metadata\n$divider\n";

// Append to file
if (file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX)) {
    echo json_encode(['status' => 'success', 'message' => 'Log saved']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to write to log file']);
}
?>
