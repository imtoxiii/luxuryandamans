<?php
require_once 'emailHandler.php';

// Initialize email handler
$emailHandler = new EmailHandler();

consoleLog("Form processor started", ['method' => $_SERVER['REQUEST_METHOD'], 'content_type' => $_SERVER['CONTENT_TYPE'] ?? 'not set']);

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $data = null;
    
    // Check if data is JSON (from frontend) or form data (from test forms)
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    
    if (strpos($contentType, 'application/json') !== false) {
        // Handle JSON data from frontend
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        consoleLog("Received JSON data from frontend", $data);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            consoleLog("JSON decode error", ['error' => json_last_error_msg()]);
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
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
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'No data received']);
        exit;
    }
    
    // Determine form type based on data structure
    $formType = 'general';
    
    if (isset($data['destination']) && isset($data['guests'])) {
        $formType = 'enquiry';
    } elseif (isset($data['subject']) && !isset($data['destination'])) {
        $formType = 'contact';
    } elseif (isset($data['packageName']) || isset($data['totalPrice'])) {
        $formType = 'booking';
    }
    
    consoleLog("Determined form type", ['type' => $formType]);
    
    // Process the form
    $result = $emailHandler->processForm($data, $formType);
    
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
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?> 