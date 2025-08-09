<?php
// Force output buffering and error reporting
ob_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

// Set CORS headers first
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require_once 'config.php';
require_once 'emailHandler.php';

// Force logging to work
consoleLog("=== FORM PROCESSOR STARTED ===", [
    'method' => $_SERVER['REQUEST_METHOD'], 
    'content_type' => $_SERVER['CONTENT_TYPE'] ?? 'not set',
    'timestamp' => date('Y-m-d H:i:s')
]);

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $data = null;
    
    // Check if data is JSON (from frontend) or form data (from test forms)
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    
    if (strpos($contentType, 'application/json') !== false) {
        // Handle JSON data from frontend
        $input = file_get_contents('php://input');
        consoleLog("Raw JSON input received", ['input' => $input]);
        
        $data = json_decode($input, true);
        
        consoleLog("Decoded JSON data", $data);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            $error = json_last_error_msg();
            consoleLog("JSON decode error", ['error' => $error]);
            
            // Log error to file regardless
            logToFile('form_errors.txt', [
                'error' => 'JSON decode failed: ' . $error,
                'input' => $input,
                'timestamp' => date('Y-m-d H:i:s')
            ]);
            
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Invalid JSON data: ' . $error]);
            exit;
        }
    } else {
        // Handle regular form POST data (from test forms)
        $data = $_POST;
        consoleLog("Received form POST data", $data);
    }
    
    // Ensure we have data
    if (empty($data)) {
        consoleLog("No data received", ['POST' => $_POST, 'content_type' => $contentType]);
        
        // Log this error
        logToFile('form_errors.txt', [
            'error' => 'No data received',
            'method' => $_SERVER['REQUEST_METHOD'],
            'content_type' => $contentType,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'No data received']);
        exit;
    }
    
    // Log received data immediately
    logToFile('form_submissions.txt', [
        'status' => 'received',
        'data' => $data,
        'content_type' => $contentType,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    
    // Determine form type based on data structure
    $formType = 'general';
    
    if (isset($data['destination']) && isset($data['guests'])) {
        $formType = 'enquiry';
    } elseif (isset($data['subject']) && !isset($data['destination'])) {
        $formType = 'contact';
    } elseif (isset($data['packageName']) || isset($data['totalPrice'])) {
        $formType = 'booking';
    }
    
    consoleLog("Determined form type", ['type' => $formType, 'data_keys' => array_keys($data)]);
    
    // Initialize email handler and process the form
    try {
        $emailHandler = new EmailHandler();
        $result = $emailHandler->processForm($data, $formType);
        
        consoleLog("Email handler result", $result);
        
        // Log the final result
        logToFile('form_submissions.txt', [
            'status' => 'processed',
            'form_type' => $formType,
            'result' => $result,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
    } catch (Exception $e) {
        $error = [
            'success' => false,
            'message' => 'Processing error: ' . $e->getMessage(),
            'timestamp' => date('Y-m-d H:i:s')
        ];
        
        consoleLog("Exception in form processing", ['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
        
        // Log the error
        logToFile('form_errors.txt', [
            'error' => 'Exception: ' . $e->getMessage(),
            'trace' => $e->getTraceAsString(),
            'data' => $data,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
        $result = $error;
    }
    
    // Return JSON response
    header('Content-Type: application/json');
    if ($result['success']) {
        http_response_code(200);
    } else {
        http_response_code(400);
    }
    
    echo json_encode($result);
    
} else {
    // Handle non-POST requests
    consoleLog("Invalid request method", ['method' => $_SERVER['REQUEST_METHOD']]);
    
    logToFile('form_errors.txt', [
        'error' => 'Invalid request method',
        'method' => $_SERVER['REQUEST_METHOD'],
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}

ob_end_flush();
?> 