<?php
// Strict types are avoided for broader hosting compatibility.

// Basic hardening
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');
// Do NOT set CORS here; serve from same origin. If needed, configure via server.

// Helper to read env with fallback
if (!function_exists('env')) {
    function env(string $key, $default = null) {
        $value = getenv($key);
        if ($value !== false) {
            return $value;
        }
        if (isset($_ENV[$key])) {
            return $_ENV[$key];
        }
        if (isset($_SERVER[$key])) {
            return $_SERVER[$key];
        }
        return $default;
    }
}

// SMTP configuration
define('SMTP_HOST', env('SMTP_HOST', 'mail.luxuryandamans.com'));
define('SMTP_PORT', (int) env('SMTP_PORT', 465));
define('SMTP_ENCRYPTION', env('SMTP_ENCRYPTION', 'ssl')); // ssl or tls

// Default SMTP credentials (bookings account)
define('SMTP_USERNAME', env('SMTP_USERNAME', 'bookings@luxuryandamans.com'));
define('SMTP_PASSWORD', env('SMTP_PASSWORD', 'Sumeet@26'));

// SMTP credentials for different email accounts
define('BOOKINGS_SMTP_USERNAME', env('BOOKINGS_SMTP_USERNAME', 'bookings@luxuryandamans.com'));
define('BOOKINGS_SMTP_PASSWORD', env('BOOKINGS_SMTP_PASSWORD', 'Sumeet@26'));
define('INFO_SMTP_USERNAME', env('INFO_SMTP_USERNAME', 'info@luxuryandamans.com'));
define('INFO_SMTP_PASSWORD', env('INFO_SMTP_PASSWORD', 'Sumeet@26'));

// From identity
define('SMTP_FROM_EMAIL', env('SMTP_FROM_EMAIL', 'bookings@luxuryandamans.com'));
define('SMTP_FROM_NAME', env('SMTP_FROM_NAME', 'Luxury Andamans'));

// Admin recipients (comma-separated or single email)
define('ADMIN_RECIPIENTS', env('ADMIN_RECIPIENTS', 'xumeet1987@gmail.com'));

// Email routing configuration
define('ADMIN_FROM_EMAIL', env('ADMIN_FROM_EMAIL', 'info@luxuryandamans.com'));
define('USER_FROM_EMAIL', env('USER_FROM_EMAIL', 'bookings@luxuryandamans.com'));

// Public logo URL (used in HTML emails). Prefer a PNG for broad client support.
define('LOGO_URL', env('LOGO_URL', 'https://luxuryandamans.com/favicon-196.png'));

// Toggle to bypass strict SSL peer verification if host has misconfigured certs
// WARNING: Keep false if your server has proper certificates
define('ALLOW_SELF_SIGNED', (bool) env('ALLOW_SELF_SIGNED', false));

// Optional: Where to write mail errors (make sure directory is writable or disable logging)
define('MAIL_LOG_FILE', __DIR__ . '/mail-errors.log');

// Optional DKIM (improves inbox placement if configured)
// Provide absolute file path to your private key and selector/domain if available
define('DKIM_ENABLED', (bool) env('DKIM_ENABLED', false));
define('DKIM_DOMAIN', env('DKIM_DOMAIN', 'luxuryandamans.com'));
define('DKIM_SELECTOR', env('DKIM_SELECTOR', 'default')); // e.g., 'default' creates default._domainkey.luxuryandamans.com
define('DKIM_PRIVATE_KEY_PATH', env('DKIM_PRIVATE_KEY_PATH', '')); // e.g., __DIR__ . '/dkim/private.key'


