<?php
/**
 * Standalone PHPMailer-like class for SMTP email sending
 * No external dependencies required
 */
class SimplePHPMailer {
    private $smtp_host;
    private $smtp_port;
    private $smtp_username;
    private $smtp_password;
    private $smtp_secure;
    private $from_email;
    private $from_name;
    private $to_addresses = [];
    private $subject;
    private $body;
    private $alt_body;
    private $reply_to = [];
    private $headers = [];
    private $charset = 'UTF-8';
    private $transcript = [];
    
    public function __construct() {
        $this->headers = [
            'MIME-Version' => '1.0',
            'X-Mailer' => 'SimplePHPMailer',
        ];
    }
    
    public function isSMTP() {
        // Set to use SMTP
        return $this;
    }
    
    public function setFrom($email, $name = '') {
        $this->from_email = $email;
        $this->from_name = $name;
        return $this;
    }
    
    public function addAddress($email, $name = '') {
        $this->to_addresses[] = ['email' => $email, 'name' => $name];
        return $this;
    }
    
    public function addReplyTo($email, $name = '') {
        $this->reply_to = ['email' => $email, 'name' => $name];
        return $this;
    }
    
    public function isHTML($isHtml = true) {
        if ($isHtml) {
            $this->headers['Content-Type'] = 'text/html; charset=' . $this->charset;
        } else {
            $this->headers['Content-Type'] = 'text/plain; charset=' . $this->charset;
        }
        return $this;
    }
    
    public function addCustomHeader($name, $value) {
        $this->headers[$name] = $value;
        return $this;
    }
    
    public function send() {
        try {
            // Connect to SMTP server
            $socket = $this->connectSMTP();
            if (!$socket) {
                throw new Exception('Failed to connect to SMTP server');
            }
            
            // SMTP conversation
            $this->smtpCommand($socket, '', '220');
            $ehloHost = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost';
            $this->smtpCommand($socket, "EHLO " . $ehloHost, '250');
            
            // Handle STARTTLS for explicit TLS
            if ($this->smtp_secure === 'tls') {
                try {
                    $this->smtpCommand($socket, "STARTTLS", '220');
                    
                    // Enable TLS encryption
                    $cryptoMethod = STREAM_CRYPTO_METHOD_TLS_CLIENT;
                    if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
                        $cryptoMethod = STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
                    }
                    
                    $tlsResult = stream_socket_enable_crypto($socket, true, $cryptoMethod);
                    if (!$tlsResult) {
                        throw new Exception('Failed to enable TLS encryption');
                    }
                    
                    $this->transcript[] = 'TLS encryption enabled successfully';
                    
                    // Send EHLO again after TLS
                    $this->smtpCommand($socket, "EHLO " . $ehloHost, '250');
                } catch (Exception $e) {
                    throw new Exception('STARTTLS failed: ' . $e->getMessage());
                }
            }
            
            // Authentication - improved error handling
            $authed = false;
            
            // Try AUTH LOGIN first (most widely supported)
            try {
                $this->transcript[] = 'Attempting AUTH LOGIN';
                $this->smtpCommand($socket, "AUTH LOGIN", '334');
                $this->smtpCommand($socket, base64_encode($this->smtp_username), '334');
                $this->smtpCommand($socket, base64_encode($this->smtp_password), '235');
                $authed = true;
                $this->transcript[] = 'AUTH LOGIN successful';
            } catch (Exception $e) {
                // Fallback to AUTH PLAIN
                try {
                    $this->transcript[] = 'AUTH LOGIN failed, trying AUTH PLAIN';
                    $authString = base64_encode("\0{$this->smtp_username}\0{$this->smtp_password}");
                    $this->smtpCommand($socket, "AUTH PLAIN " . $authString, '235');
                    $authed = true;
                    $this->transcript[] = 'AUTH PLAIN successful';
                } catch (Exception $e2) {
                    throw new Exception('Authentication failed with both LOGIN and PLAIN methods. Check username and password.');
                }
            }
            
            // Send email
            $this->smtpCommand($socket, "MAIL FROM:<{$this->from_email}>", '250');
            
            foreach ($this->to_addresses as $to) {
                $this->smtpCommand($socket, "RCPT TO:<{$to['email']}>", '250');
            }
            
            $this->smtpCommand($socket, "DATA", '354');
            
            // Build message
            $message = $this->buildMessage();
            // Dot-stuffing per RFC 5321: escape lines starting with a dot
            $message = preg_replace('/\r\n\./', "\r\n..", $message);
            if (strlen($message) > 0 && $message[0] === '.') {
                $message = '.' . $message;
            }
            fwrite($socket, $message . "\r\n.\r\n");
            $this->getResponse($socket, '250');
            
            $this->smtpCommand($socket, "QUIT", '221');
            fclose($socket);
            // Log transcript on success as well for debugging traceability
            $this->logError('SMTP Success: message accepted by server');
            return true;
            
        } catch (Exception $e) {
            $this->logError('SMTP Error: ' . $e->getMessage());
            return false;
        }
    }
    
    private function connectSMTP() {
        // Improved SSL context - try secure settings first, fallback if needed
        $allowSelfSigned = defined('ALLOW_SELF_SIGNED') ? ALLOW_SELF_SIGNED : false;
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => !$allowSelfSigned,
                'verify_peer_name' => !$allowSelfSigned,
                'allow_self_signed' => $allowSelfSigned,
                'crypto_method' => STREAM_CRYPTO_METHOD_TLS_CLIENT,
                'ciphers' => 'HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA'
            ]
        ]);
        
        if ($this->smtp_secure === 'ssl') {
            $host = 'ssl://' . $this->smtp_host;
        } else {
            $host = $this->smtp_host;
        }
        
        $this->transcript[] = "Connecting to: {$host}:{$this->smtp_port}";
        
        $socket = stream_socket_client(
            $host . ':' . $this->smtp_port,
            $errno,
            $errstr,
            30,
            STREAM_CLIENT_CONNECT,
            $context
        );
        
        if (!$socket) {
            // Try with relaxed SSL settings if strict connection fails
            if (!$allowSelfSigned) {
                $this->transcript[] = "Secure connection failed, trying with relaxed SSL settings";
                $relaxedContext = stream_context_create([
                    'ssl' => [
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    ]
                ]);
                
                $socket = stream_socket_client(
                    $host . ':' . $this->smtp_port,
                    $errno,
                    $errstr,
                    30,
                    STREAM_CLIENT_CONNECT,
                    $relaxedContext
                );
            }
            
            if (!$socket) {
                throw new Exception("Failed to connect to {$host}:{$this->smtp_port} - $errstr ($errno)");
            }
        }
        
        // Set socket timeout
        stream_set_timeout($socket, 30);
        
        return $socket;
    }
    
    private function smtpCommand($socket, $command, $expectedCode) {
        if ($command !== '') {
            $this->transcript[] = 'C: ' . $command;
            fwrite($socket, $command . "\r\n");
        }
        return $this->getResponse($socket, $expectedCode);
    }
    
    private function getResponse($socket, $expectedCode) {
        $response = '';
        while (($line = fgets($socket, 515)) !== false) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') {
                break;
            }
        }
        $this->transcript[] = 'S: ' . trim($response);
        
        $code = substr($response, 0, 3);
        if ($code !== $expectedCode) {
            throw new Exception("SMTP Error: Expected $expectedCode, got $code. Response: $response");
        }
        
        return $response;
    }
    
    private function buildMessage() {
        $headers = [];
        
        // From header
        $from = $this->from_name ? "{$this->from_name} <{$this->from_email}>" : $this->from_email;
        $headers[] = "From: $from";
        $headers[] = "Sender: {$this->from_email}";
        
        // To header
        $to_list = [];
        foreach ($this->to_addresses as $to) {
            $to_list[] = $to['name'] ? "{$to['name']} <{$to['email']}>" : $to['email'];
        }
        $headers[] = "To: " . implode(', ', $to_list);
        
        // Reply-To
        if (!empty($this->reply_to)) {
            $reply = $this->reply_to['name'] ? "{$this->reply_to['name']} <{$this->reply_to['email']}>" : $this->reply_to['email'];
            $headers[] = "Reply-To: $reply";
        }
        
        // Subject
        $headers[] = "Subject: {$this->subject}";
        
        // Date
        $headers[] = "Date: " . date('r');
        
        // Message ID
        $hostForId = !empty($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'luxuryandamans.com';
        $headers[] = "Message-ID: <" . uniqid('', true) . "@$hostForId>";
        
        // Ensure content transfer encoding header exists (we prefer quoted-printable to avoid long lines)
        if (!isset($this->headers['Content-Transfer-Encoding'])) {
            $this->headers['Content-Transfer-Encoding'] = 'quoted-printable';
        }

        // Custom headers
        foreach ($this->headers as $name => $value) {
            $headers[] = "$name: $value";
        }
        
        // Ensure CRLF line endings
        $body = preg_replace("/(\r\n|\r|\n)/", "\r\n", (string)$this->body);

        // Apply transfer encoding to body to comply with SMTP line length limits
        $cte = strtolower($this->headers['Content-Transfer-Encoding'] ?? '');
        if ($cte === 'quoted-printable') {
            if (function_exists('quoted_printable_encode')) {
                $body = quoted_printable_encode($body);
            } else {
                // Fallback: soft wrap long lines at 76 chars with RFC-compliant soft breaks
                $wrapped = [];
                foreach (explode("\r\n", $body) as $line) {
                    while (strlen($line) > 76) {
                        $wrapped[] = substr($line, 0, 75) . '='; // soft break
                        $line = substr($line, 75);
                    }
                    $wrapped[] = $line;
                }
                $body = implode("\r\n", $wrapped);
            }
        } elseif ($cte === 'base64') {
            $body = rtrim(chunk_split(base64_encode($body), 76, "\r\n"));
        } else {
            // For 7bit/8bit or unknown encodings, enforce hard wrap at 998 to avoid transport rejection
            $wrapped = [];
            foreach (explode("\r\n", $body) as $line) {
                while (strlen($line) > 998) {
                    $wrapped[] = substr($line, 0, 998);
                    $line = substr($line, 998);
                }
                $wrapped[] = $line;
            }
            $body = implode("\r\n", $wrapped);
        }

        $message = implode("\r\n", $headers) . "\r\n\r\n" . $body;
        
        return $message;
    }
    
    private function logError($message) {
        $logFile = __DIR__ . '/mail-errors.log';
        $timestamp = date('Y-m-d H:i:s');
        $logEntry = "[$timestamp] $message\n";
        
        // Add configuration details for debugging
        $logEntry .= "SMTP Config: {$this->smtp_host}:{$this->smtp_port} (security: {$this->smtp_secure})\n";
        $logEntry .= "Username: {$this->smtp_username}\n";
        
        if (!empty($this->transcript)) {
            $logEntry .= "SMTP Transcript:\n";
            $logEntry .= implode("\n", $this->transcript) . "\n";
        }
        $logEntry .= "---\n";
        
        @file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    }
    
    // Public setters for SMTP configuration
    public function __set($name, $value) {
        switch ($name) {
            case 'Host':
                $this->smtp_host = $value;
                break;
            case 'Port':
                $this->smtp_port = $value;
                break;
            case 'Username':
                $this->smtp_username = $value;
                break;
            case 'Password':
                $this->smtp_password = $value;
                break;
            case 'SMTPSecure':
                $this->smtp_secure = $value;
                break;
            case 'SMTPAuth':
                // Always true for our implementation
                break;
            case 'Subject':
                $this->subject = $value;
                break;
            case 'Body':
                $this->body = $value;
                break;
            case 'AltBody':
                $this->alt_body = $value;
                break;
            case 'CharSet':
                $this->charset = $value;
                break;
            case 'Sender':
                // Already handled in setFrom
                break;
            case 'Priority':
                $this->headers['X-Priority'] = $value;
                break;
        }
    }
}
