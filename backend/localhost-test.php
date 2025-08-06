<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🏝️ Localhost Email Testing - Luxury Andamans</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255,255,255,0.95);
            color: #333;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .success { color: #28a745; font-weight: bold; }
        .error { color: #dc3545; font-weight: bold; }
        .info { color: #17a2b8; }
        .warning { color: #ffc107; background: #fff3cd; padding: 10px; border-radius: 5px; margin: 10px 0; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
        .form-group input, .form-group textarea, .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .btn {
            background: #667eea;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 5px;
        }
        .btn:hover { background: #5a67d8; }
        .btn-test { background: #28a745; }
        .btn-test:hover { background: #218838; }
        .section {
            background: #f8f9fa;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        .log-output {
            background: #000;
            color: #00ff00;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            max-height: 300px;
            overflow-y: auto;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏝️ Luxury Andamans - Localhost Email Testing</h1>
        
        <div class="warning">
            <strong>⚠️ LOCALHOST TESTING MODE</strong><br>
            This page is for testing the email system on your local development environment.
            Emails will be logged to files instead of being sent to prevent spam during development.
        </div>

        <?php
        require_once 'localhost-config.php';
        
        echo "<div class='section'>";
        echo "<h2>📊 System Status</h2>";
        echo "<div class='info'>";
        echo "🕐 Server Time: " . date('Y-m-d H:i:s') . "<br>";
        echo "🌍 Timezone: " . date_default_timezone_get() . "<br>";
        echo "🐘 PHP Version: " . phpversion() . "<br>";
        echo "📧 SMTP Host: " . SMTP_HOST . "<br>";
        echo "🔌 SMTP Port: " . SMTP_PORT . "<br>";
        echo "</div>";
        echo "</div>";

        // Handle form submission
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['test_form'])) {
            echo "<div class='section'>";
            echo "<h2>📧 Test Email Results</h2>";
            
            $testData = [
                'name' => sanitizeInput($_POST['name']),
                'email' => sanitizeInput($_POST['email']),
                'phone' => sanitizeInput($_POST['phone']),
                'message' => sanitizeInput($_POST['message']),
                'form_type' => sanitizeInput($_POST['form_type'])
            ];
            
            consoleLog("Processing localhost test form", $testData);
            
            // Simulate email processing
            echo "<div class='success'>✅ Test form submitted successfully!</div>";
            echo "<div class='info'>📝 Form data has been logged to: logs/localhost-test-emails.log</div>";
            echo "<div class='info'>🔍 Check the browser console and server logs for detailed information</div>";
            
            // Display submitted data
            echo "<h3>📋 Submitted Data:</h3>";
            echo "<div class='log-output'>";
            echo "Form Type: " . $testData['form_type'] . "\n";
            echo "Name: " . $testData['name'] . "\n";
            echo "Email: " . $testData['email'] . "\n";
            echo "Phone: " . $testData['phone'] . "\n";
            echo "Message: " . $testData['message'] . "\n";
            echo "Timestamp: " . date('Y-m-d H:i:s') . "\n";
            echo "</div>";
            
            echo "</div>";
        }
        ?>

        <div class="section">
            <h2>🧪 Test Email Form</h2>
            <p>Use this form to test the email system locally. Data will be logged to files instead of sending actual emails.</p>
            
            <form method="POST" action="">
                <input type="hidden" name="test_form" value="1">
                
                <div class="form-group">
                    <label for="form_type">Form Type:</label>
                    <select name="form_type" id="form_type" required>
                        <option value="contact">Contact Form</option>
                        <option value="enquiry">Enquiry Form</option>
                        <option value="booking">Booking Form</option>
                        <option value="calculator">Calculator Form</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="name">Full Name:</label>
                    <input type="text" name="name" id="name" value="Test User" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input type="email" name="email" id="email" value="test@localhost.com" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" name="phone" id="phone" value="+91 9876543210">
                </div>
                
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" rows="4" required>This is a test message from the localhost testing environment. Please ignore this message if received in production.</textarea>
                </div>
                
                <button type="submit" class="btn btn-test">🧪 Send Test Email</button>
            </form>
        </div>

        <div class="section">
            <h2>🔧 Frontend Integration Test</h2>
            <p>Test the frontend-to-backend connection using JavaScript:</p>
            
            <button onclick="testFrontendConnection()" class="btn">🔗 Test Frontend Connection</button>
            <button onclick="clearLogs()" class="btn">🗑️ Clear Console</button>
            
            <div id="frontend-test-results" class="log-output" style="display: none;">
                <div id="test-output"></div>
            </div>
        </div>

        <div class="section">
            <h2>📁 Log Files</h2>
            <p>Check these files for debugging information:</p>
            <ul>
                <li><strong>logs/localhost-test-emails.log</strong> - Simulated email sends</li>
                <li><strong>logs/localhost-console.log</strong> - Debug messages</li>
                <li><strong>logs/form_submissions.txt</strong> - Form submissions</li>
                <li><strong>logs/form_errors.txt</strong> - Error logs</li>
            </ul>
        </div>

        <div class="section">
            <h2>📝 Next Steps</h2>
            <ol>
                <li>✅ Test this form to ensure logging works</li>
                <li>🔧 Set up your frontend to point to <code>http://localhost/backend/processForm.php</code></li>
                <li>🌐 Start your React development server (usually <code>npm run dev</code>)</li>
                <li>📧 Test form submissions from your React app</li>
                <li>🚀 When ready, upload to production server and update URLs</li>
            </ol>
        </div>
    </div>

    <script>
        async function testFrontendConnection() {
            const resultsDiv = document.getElementById('frontend-test-results');
            const outputDiv = document.getElementById('test-output');
            
            resultsDiv.style.display = 'block';
            outputDiv.innerHTML = '🔄 Testing frontend connection...\n';
            
            try {
                const testData = {
                    name: 'Frontend Test User',
                    email: 'frontend-test@localhost.com',
                    phone: '+91 9876543210',
                    message: 'This is a test from the frontend JavaScript connection.',
                    form_type: 'frontend-test'
                };
                
                outputDiv.innerHTML += '📤 Sending test data to processForm.php...\n';
                
                const response = await fetch('processForm.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(testData)
                });
                
                outputDiv.innerHTML += `📡 Response status: ${response.status}\n`;
                
                if (response.ok) {
                    const result = await response.json();
                    outputDiv.innerHTML += '✅ SUCCESS: Connection working!\n';
                    outputDiv.innerHTML += `📧 Response: ${JSON.stringify(result, null, 2)}\n`;
                } else {
                    const errorText = await response.text();
                    outputDiv.innerHTML += '❌ ERROR: Connection failed!\n';
                    outputDiv.innerHTML += `📄 Error response: ${errorText}\n`;
                }
            } catch (error) {
                outputDiv.innerHTML += '💥 EXCEPTION: ' + error.message + '\n';
                outputDiv.innerHTML += '🔍 Make sure processForm.php is accessible\n';
            }
        }
        
        function clearLogs() {
            const outputDiv = document.getElementById('test-output');
            outputDiv.innerHTML = '';
            document.getElementById('frontend-test-results').style.display = 'none';
        }
        
        // Auto-scroll log output
        function scrollToBottom(element) {
            element.scrollTop = element.scrollHeight;
        }
        
        // Monitor for new content in log outputs
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.target.classList.contains('log-output')) {
                    scrollToBottom(mutation.target);
                }
            });
        });
        
        document.querySelectorAll('.log-output').forEach(el => {
            observer.observe(el, { childList: true, subtree: true });
        });
    </script>
</body>
</html> 