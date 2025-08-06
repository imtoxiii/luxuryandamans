<?php
echo "<h1>🔧 PHPMailer Installation Helper</h1>";
echo "<style>body { font-family: Arial, sans-serif; margin: 20px; } .success { color: green; } .error { color: red; } .info { color: blue; } .command { background: #f0f0f0; padding: 10px; border-radius: 5px; font-family: monospace; margin: 10px 0; }</style>";

echo "<h2>📋 System Check</h2>";

// Check current directory
echo "<div class='info'>📁 Current directory: " . __DIR__ . "</div>";

// Check if composer.json exists
if (file_exists(__DIR__ . '/composer.json')) {
    echo "<div class='success'>✅ composer.json exists</div>";
    
    // Show composer.json content
    $composerContent = file_get_contents(__DIR__ . '/composer.json');
    echo "<h3>📄 composer.json content:</h3>";
    echo "<div class='command'>" . htmlspecialchars($composerContent) . "</div>";
} else {
    echo "<div class='error'>❌ composer.json not found</div>";
    echo "<div class='info'>Creating composer.json...</div>";
    
    $composerJson = [
        "name" => "luxury-andamans/email-backend",
        "description" => "PHP Email Backend for Luxury Andamans Website",
        "type" => "project",
        "require" => [
            "phpmailer/phpmailer" => "^6.8"
        ]
    ];
    
    if (file_put_contents(__DIR__ . '/composer.json', json_encode($composerJson, JSON_PRETTY_PRINT))) {
        echo "<div class='success'>✅ composer.json created</div>";
    } else {
        echo "<div class='error'>❌ Failed to create composer.json</div>";
    }
}

// Check if composer is installed
echo "<h2>🎼 Composer Check</h2>";

// Try to run composer --version
$composerVersion = shell_exec('composer --version 2>&1');
if ($composerVersion) {
    echo "<div class='success'>✅ Composer is installed</div>";
    echo "<div class='info'>📦 " . htmlspecialchars(trim($composerVersion)) . "</div>";
} else {
    echo "<div class='error'>❌ Composer not found in PATH</div>";
    echo "<div class='info'>💡 Download composer from: https://getcomposer.org/download/</div>";
}

// Check vendor directory
echo "<h2>📦 Vendor Directory Check</h2>";
if (is_dir(__DIR__ . '/vendor')) {
    echo "<div class='success'>✅ vendor/ directory exists</div>";
    
    // Check autoload file
    if (file_exists(__DIR__ . '/vendor/autoload.php')) {
        echo "<div class='success'>✅ autoload.php exists</div>";
        
        // Try to load PHPMailer
        require_once __DIR__ . '/vendor/autoload.php';
        if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
            echo "<div class='success'>✅ PHPMailer classes are available</div>";
            
            $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
            echo "<div class='info'>📦 PHPMailer Version: " . $phpmailer::VERSION . "</div>";
        } else {
            echo "<div class='error'>❌ PHPMailer classes not found</div>";
        }
    } else {
        echo "<div class='error'>❌ autoload.php not found</div>";
    }
} else {
    echo "<div class='error'>❌ vendor/ directory not found</div>";
}

// Installation instructions
echo "<h2>🛠️ Installation Instructions</h2>";

echo "<div class='info'>";
echo "<h3>Method 1: Command Line (Recommended)</h3>";
echo "<div class='command'>cd " . __DIR__ . "<br>";
echo "composer install</div>";

echo "<h3>Method 2: Windows Command Prompt</h3>";
echo "<div class='command'>";
echo "1. Open Command Prompt as Administrator<br>";
echo "2. Navigate to: " . __DIR__ . "<br>";
echo "3. Run: composer install<br>";
echo "</div>";

echo "<h3>Method 3: Manual Installation</h3>";
echo "<div class='command'>";
echo "1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip<br>";
echo "2. Extract to vendor/phpmailer/phpmailer/<br>";
echo "3. Create autoload.php manually<br>";
echo "</div>";
echo "</div>";

// Test installation button
echo "<h2>🧪 Test Installation</h2>";
echo "<form method='POST'>";
echo "<button type='submit' name='test_phpmailer' style='background: #007cba; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;'>🔍 Test PHPMailer Installation</button>";
echo "</form>";

if (isset($_POST['test_phpmailer'])) {
    echo "<h3>📊 Test Results:</h3>";
    
    try {
        if (file_exists(__DIR__ . '/vendor/autoload.php')) {
            require_once __DIR__ . '/vendor/autoload.php';
            
            if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
                $mail = new PHPMailer\PHPMailer\PHPMailer(true);
                echo "<div class='success'>✅ PHPMailer object created successfully</div>";
                echo "<div class='info'>📦 Version: " . $mail::VERSION . "</div>";
                echo "<div class='success'>🎉 PHPMailer is working correctly!</div>";
            } else {
                echo "<div class='error'>❌ PHPMailer class not found</div>";
            }
        } else {
            echo "<div class='error'>❌ Autoload file not found</div>";
        }
    } catch (Exception $e) {
        echo "<div class='error'>❌ Error: " . $e->getMessage() . "</div>";
    }
}

// Quick fix button
echo "<h2>⚡ Quick Fix</h2>";
echo "<form method='POST'>";
echo "<button type='submit' name='quick_fix' style='background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;'>🚀 Try Quick Fix</button>";
echo "<p><small>This will attempt to run composer install automatically</small></p>";
echo "</form>";

if (isset($_POST['quick_fix'])) {
    echo "<h3>🔧 Running Quick Fix:</h3>";
    
    // Change to backend directory
    chdir(__DIR__);
    
    // Try to run composer install
    $output = shell_exec('composer install 2>&1');
    
    if ($output) {
        echo "<div class='command'>" . htmlspecialchars($output) . "</div>";
        
        // Check if it worked
        if (file_exists(__DIR__ . '/vendor/autoload.php')) {
            echo "<div class='success'>✅ Quick fix successful! PHPMailer should now be installed.</div>";
            echo "<div class='info'>🔄 <a href='setup.php'>Go back to setup page</a> to verify installation.</div>";
        } else {
            echo "<div class='error'>❌ Quick fix didn't work. Please try manual installation.</div>";
        }
    } else {
        echo "<div class='error'>❌ Could not run composer command. Please install manually.</div>";
    }
}

echo "<hr>";
echo "<p><a href='setup.php'>← Back to Setup Page</a></p>";
?> 