<?php
/**
 * Simple Environment Variables Loader for PHP
 * Loads variables from .env file and makes them available via getenv()
 */

class EnvLoader {
    private static $loaded = false;
    
    /**
     * Load environment variables from .env file
     * @param string $envPath Path to .env file
     * @return bool Success status
     */
    public static function load($envPath = null) {
        if (self::$loaded) {
            return true;
        }
        
        if ($envPath === null) {
            $envPath = __DIR__ . '/.env';
        }
        
        if (!file_exists($envPath)) {
            error_log("Warning: .env file not found at: $envPath");
            return false;
        }
        
        $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        
        foreach ($lines as $line) {
            // Skip comments
            if (strpos(trim($line), '#') === 0) {
                continue;
            }
            
            // Parse KEY=VALUE pairs
            if (strpos($line, '=') !== false) {
                list($name, $value) = explode('=', $line, 2);
                $name = trim($name);
                $value = trim($value);
                
                // Remove quotes if present
                if (preg_match('/^(["\'])(.*)\\1$/', $value, $matches)) {
                    $value = $matches[2];
                }
                
                // Set environment variable
                if (!array_key_exists($name, $_ENV)) {
                    $_ENV[$name] = $value;
                    putenv("$name=$value");
                }
            }
        }
        
        self::$loaded = true;
        return true;
    }
    
    /**
     * Get environment variable with optional default
     * @param string $key Variable name
     * @param mixed $default Default value if not found
     * @return string|mixed
     */
    public static function get($key, $default = null) {
        self::load(); // Ensure loaded
        
        $value = getenv($key);
        if ($value === false) {
            return $default;
        }
        
        // Convert string booleans to actual booleans
        if (strtolower($value) === 'true') {
            return true;
        }
        if (strtolower($value) === 'false') {
            return false;
        }
        
        return $value;
    }
    
    /**
     * Check if environment variable exists
     * @param string $key Variable name
     * @return bool
     */
    public static function has($key) {
        self::load();
        return getenv($key) !== false;
    }
}
?>
