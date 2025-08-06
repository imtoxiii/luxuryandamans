<?php
require_once 'config.php';

echo "<h1>🏝️ Luxury Andamans Email System Setup</h1>";
echo "<style>body { font-family: Arial, sans-serif; margin: 20px; } .success { color: green; } .error { color: red; } .info { color: blue; }</style>";

echo "<h2>System Information</h2>";
echo "<div class='info'>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Server Time: " . date('Y-m-d H:i:s') . "<br>";
echo "Timezone: " . date_default_timezone_get() . "<br>";
echo "</div>";

echo "<h2>Configuration Check</h2>";

// Check configuration
$config_ok = true;

echo "<div class='info'>";
echo "SMTP Host: " . SMTP_HOST . "<br>";
echo "SMTP Port: " . SMTP_PORT . "<br>";
echo "Info Email: " . INFO_EMAIL . "<br>";
echo "Booking Email: " . BOOKING_EMAIL . "<br>";
echo "Admin Email: " . ADMIN_EMAIL . "<br>";
echo "</div>";

// Check if booking email password is set
if (empty(BOOKING_PASSWORD)) {
    echo "<div class='error'>⚠️ WARNING: BOOKING_PASSWORD is not set in config.php</div>";
    $config_ok = false;
}

// Create logs directory
echo "<h2>Directory Setup</h2>";
$logDir = __DIR__ . '/logs';
if (!is_dir($logDir)) {
    if (mkdir($logDir, 0755, true)) {
        echo "<div class='success'>✅ Created logs directory: $logDir</div>";
    } else {
        echo "<div class='error'>❌ Failed to create logs directory: $logDir</div>";
        $config_ok = false;
    }
} else {
    echo "<div class='success'>✅ Logs directory exists: $logDir</div>";
}

// Check if logs directory is writable
if (is_writable($logDir)) {
    echo "<div class='success'>✅ Logs directory is writable</div>";
} else {
    echo "<div class='error'>❌ Logs directory is not writable</div>";
    $config_ok = false;
}

// Test logging function
echo "<h2>Logging Test</h2>";
try {
    logToFile('setup_test.log', [
        'message' => 'Setup test completed',
        'timestamp' => date('Y-m-d H:i:s'),
        'php_version' => phpversion()
    ]);
    echo "<div class='success'>✅ Logging function works correctly</div>";
} catch (Exception $e) {
    echo "<div class='error'>❌ Logging function failed: " . $e->getMessage() . "</div>";
    $config_ok = false;
}

// Check mail function
echo "<h2>Mail Function Test</h2>";
if (function_exists('mail')) {
    echo "<div class='success'>✅ PHP mail() function is available</div>";
} else {
    echo "<div class='error'>❌ PHP mail() function is not available</div>";
    $config_ok = false;
}

// Check cURL for potential SMTP debugging
if (function_exists('curl_init')) {
    echo "<div class='success'>✅ cURL is available for HTTP requests</div>";
} else {
    echo "<div class='info'>ℹ️ cURL is not available (not required but recommended)</div>";
}

// Check if PHPMailer is installed
echo "<h2>PHPMailer Status</h2>";
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
    if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        echo "<div class='success'>✅ PHPMailer is installed and available</div>";
        
        // Test PHPMailer version
        $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
        echo "<div class='info'>📦 PHPMailer Version: " . $phpmailer::VERSION . "</div>";
    } else {
        echo "<div class='error'>❌ PHPMailer classes not found after autoload</div>";
    }
} else {
    echo "<div class='error'>❌ Composer autoload file not found: " . __DIR__ . '/vendor/autoload.php' . "</div>";
    echo "<div class='info'>📝 Run 'composer install' in the backend directory to install PHPMailer.</div>";
    echo "<div class='info'>🔧 Current directory: " . __DIR__ . "</div>";
    echo "<div style='background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 10px 0;'>";
    echo "<strong>🛠️ Need help installing PHPMailer?</strong><br>";
    echo "<a href='install-phpmailer.php' style='color: #007cba; text-decoration: none; font-weight: bold;'>→ Use PHPMailer Installation Helper</a>";
    echo "</div>";
    
    // Check if composer.json exists
    if (file_exists(__DIR__ . '/composer.json')) {
        echo "<div class='success'>✅ composer.json exists</div>";
    } else {
        echo "<div class='error'>❌ composer.json not found</div>";
    }
}

// Final status
echo "<h2>Setup Status</h2>";
if ($config_ok) {
    echo "<div class='success'><h3>✅ Setup Complete!</h3>";
    echo "Your email system is ready to use. You can now test form submissions.</div>";
    
    echo "<h3>Next Steps:</h3>";
    echo "<ol>";
    echo "<li>Set the BOOKING_PASSWORD in config.php</li>";
    echo "<li>Run 'composer install' in the backend directory to install PHPMailer</li>";
    echo "<li>Test the email functionality using the test form below</li>";
    echo "<li>Update the PHP_BACKEND_URL in your frontend code to match your server</li>";
    echo "</ol>";
} else {
    echo "<div class='error'><h3>❌ Setup Issues Found</h3>";
    echo "Please fix the issues above before using the email system.</div>";
}

// Test form
echo "<h2>Test Email Form</h2>";
echo "<div style='background: #f5f5f5; padding: 20px; border-radius: 5px;'>";
echo "<form method='POST' action='processForm.php' style='max-width: 400px;'>";
echo "<p><label>Name: <input type='text' name='name' value='Test User' required style='width: 100%; padding: 5px;'></label></p>";
echo "<p><label>Email: <input type='email' name='email' value='test@example.com' required style='width: 100%; padding: 5px;'></label></p>";
echo "<p><label>Phone: <input type='tel' name='phone' value='+91 9876543210' style='width: 100%; padding: 5px;'></label></p>";
echo "<p><label>Message: <textarea name='message' required style='width: 100%; padding: 5px; height: 100px;'>This is a test message from the setup script.</textarea></label></p>";
echo "<p><button type='submit' style='background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;'>Send Test Email</button></p>";
echo "</form>";
echo "</div>";

echo "<hr>";
echo "<p><em>Setup completed at: " . date('Y-m-d H:i:s') . "</em></p>";
?> 