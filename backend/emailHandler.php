<?php
require_once 'config.php';
require_once 'phpmailer.php';

class EmailHandler {
    
    public function __construct() {
        setCorsHeaders();
        consoleLog("EmailHandler initialized");
    }
    
    /**
     * Send email to admin about new enquiry
     */
    private function sendAdminNotification($formData, $formType = 'general') {
        consoleLog("Preparing admin notification email", $formData);
        
        $subject = "New " . ucfirst($formType) . " Enquiry from Luxury Andamans Website";
        
        // Create detailed email body
        $body = $this->createAdminEmailBody($formData, $formType);
        
        // Send from info@luxuryandamans.com to admin
        $success = sendViaSMTP(
            ADMIN_EMAIL,
            $subject,
            $body,
            INFO_EMAIL,
            INFO_PASSWORD,
            'Luxury Andamans - Info'
        );
        
        consoleLog("Admin email sent", ['success' => $success, 'to' => ADMIN_EMAIL]);
        return $success;
    }
    
    /**
     * Send confirmation email to user
     */
    private function sendUserConfirmation($formData, $formType = 'general') {
        consoleLog("Preparing user confirmation email", ['email' => $formData['email'], 'name' => $formData['name']]);
        
        $subject = "Thank You for Your Enquiry - Luxury Andamans";
        
        // Create user confirmation email body
        $body = $this->createUserEmailBody($formData, $formType);
        
        // Send from bookings@luxuryandamans.com to user
        $success = sendViaSMTP(
            $formData['email'],
            $subject,
            $body,
            BOOKING_EMAIL,
            BOOKING_PASSWORD,
            'Luxury Andamans - Bookings'
        );
        
        consoleLog("User confirmation email sent", ['success' => $success, 'to' => $formData['email']]);
        return $success;
    }
    
    /**
     * Create detailed admin email body
     */
    private function createAdminEmailBody($data, $formType) {
        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>New Enquiry - Luxury Andamans</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; }
                .field-label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
                .field-value { color: #333; }
                .highlight { background: #e8f2ff; border-left: 4px solid #667eea; padding: 10px; margin: 15px 0; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🏝️ New Enquiry - Luxury Andamans</h1>
                    <p>You have received a new ' . $formType . ' enquiry from your website</p>
                </div>
                
                <div class="content">
                    <div class="highlight">
                        <strong>⏰ Received:</strong> ' . date('d M Y, h:i A') . '
                    </div>';
        
        // Basic contact information
        if (isset($data['name'])) {
            $html .= '<div class="field"><div class="field-label">👤 Name:</div><div class="field-value">' . htmlspecialchars($data['name']) . '</div></div>';
        }
        
        if (isset($data['email'])) {
            $html .= '<div class="field"><div class="field-label">📧 Email:</div><div class="field-value">' . htmlspecialchars($data['email']) . '</div></div>';
        }
        
        if (isset($data['phone']) && !empty($data['phone'])) {
            $html .= '<div class="field"><div class="field-label">📱 Phone:</div><div class="field-value">' . htmlspecialchars($data['phone']) . '</div></div>';
        }
        
        // Travel specific information
        if (isset($data['destination']) && !empty($data['destination'])) {
            $html .= '<div class="field"><div class="field-label">🏖️ Destination:</div><div class="field-value">' . htmlspecialchars($data['destination']) . '</div></div>';
        }
        
        if (isset($data['guests']) && !empty($data['guests'])) {
            $html .= '<div class="field"><div class="field-label">👥 Number of Guests:</div><div class="field-value">' . htmlspecialchars($data['guests']) . '</div></div>';
        }
        
        if (isset($data['travel_date']) && !empty($data['travel_date'])) {
            $html .= '<div class="field"><div class="field-label">📅 Travel Date:</div><div class="field-value">' . htmlspecialchars($data['travel_date']) . '</div></div>';
        }
        
        if (isset($data['duration']) && !empty($data['duration'])) {
            $html .= '<div class="field"><div class="field-label">⏳ Duration:</div><div class="field-value">' . htmlspecialchars($data['duration']) . ' days</div></div>';
        }
        
        if (isset($data['preferred_contact']) && !empty($data['preferred_contact'])) {
            $html .= '<div class="field"><div class="field-label">📞 Preferred Contact:</div><div class="field-value">' . ucfirst(htmlspecialchars($data['preferred_contact'])) . '</div></div>';
        }
        
        if (isset($data['subject']) && !empty($data['subject'])) {
            $html .= '<div class="field"><div class="field-label">📋 Subject:</div><div class="field-value">' . htmlspecialchars($data['subject']) . '</div></div>';
        }
        
        if (isset($data['message']) && !empty($data['message'])) {
            $html .= '<div class="field"><div class="field-label">💬 Message:</div><div class="field-value">' . nl2br(htmlspecialchars($data['message'])) . '</div></div>';
        }
        
        $html .= '
                    <div class="highlight">
                        <strong>🚀 Next Steps:</strong><br>
                        • Review the enquiry details above<br>
                        • Contact the customer within 24 hours<br>
                        • Prepare a customized travel proposal<br>
                        • Follow up to ensure customer satisfaction
                    </div>
                </div>
                
                <div class="footer">
                    <p>This email was automatically generated from your Luxury Andamans website.<br>
                    Please respond to the customer promptly to ensure the best service experience.</p>
                </div>
            </div>
        </body>
        </html>';
        
        return $html;
    }
    
    /**
     * Create user confirmation email body
     */
    private function createUserEmailBody($data, $formType) {
        $customerName = isset($data['name']) ? htmlspecialchars($data['name']) : 'Valued Customer';
        
        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Thank You - Luxury Andamans</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .highlight { background: #e8f2ff; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0; border-radius: 5px; }
                .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 15px 0; }
                .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
                .contact-info { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🏝️ Thank You for Your Enquiry!</h1>
                    <p>We\'re excited to help you plan your perfect Andaman getaway</p>
                </div>
                
                <div class="content">
                    <h2>Dear ' . $customerName . ',</h2>
                    
                    <p>Thank you for reaching out to <strong>Luxury Andamans</strong>! We have successfully received your enquiry and are thrilled about the opportunity to create an unforgettable travel experience for you.</p>
                    
                    <div class="highlight">
                        <h3>🎯 What Happens Next?</h3>
                        <ul>
                            <li><strong>Within 2 hours:</strong> Our travel experts will review your requirements</li>
                            <li><strong>Within 24 hours:</strong> You\'ll receive a personalized travel proposal</li>
                            <li><strong>Ongoing:</strong> We\'ll work with you to perfect every detail of your trip</li>
                        </ul>
                    </div>
                    
                    <div class="contact-info">
                        <h3>📞 Need Immediate Assistance?</h3>
                        <p><strong>Phone:</strong> +91 98765 43210<br>
                        <strong>Email:</strong> bookings@luxuryandamans.com<br>
                        <strong>WhatsApp:</strong> Available 24/7 for urgent queries</p>
                    </div>
                    
                    <div class="highlight">
                        <h3>🌟 Why Choose Luxury Andamans?</h3>
                        <ul>
                            <li>✨ Personalized itineraries crafted just for you</li>
                            <li>🏖️ Exclusive access to pristine beaches and hidden gems</li>
                            <li>🏨 Handpicked luxury accommodations</li>
                            <li>🤝 24/7 local support during your trip</li>
                            <li>💎 Unmatched expertise in Andaman tourism</li>
                        </ul>
                    </div>
                    
                    <p>We understand that planning the perfect vacation is important to you, and we\'re committed to making this process as smooth and exciting as possible.</p>
                    
                    <p>In the meantime, feel free to explore our website for inspiration, or follow us on social media for the latest updates and travel tips!</p>
                </div>
                
                <div class="footer">
                    <p><strong>Luxury Andamans</strong><br>
                    Creating Unforgettable Island Experiences<br>
                    <em>"Your Gateway to Paradise"</em></p>
                    
                    <p style="margin-top: 20px; font-size: 12px;">
                    This is an automated confirmation email. Please do not reply to this email address.<br>
                    For any queries, please contact us at bookings@luxuryandamans.com
                    </p>
                </div>
            </div>
        </body>
        </html>';
        
        return $html;
    }
    
    /**
     * Process form submission
     */
    public function processForm($formData, $formType = 'general') {
        consoleLog("Processing form submission", ['type' => $formType, 'data' => $formData]);
        
        try {
            // Validate required fields
            if (empty($formData['name']) || empty($formData['email'])) {
                throw new Exception("Name and email are required fields");
            }
            
            if (!isValidEmail($formData['email'])) {
                throw new Exception("Invalid email format");
            }
            
            // Sanitize data
            $sanitizedData = [];
            foreach ($formData as $key => $value) {
                $sanitizedData[$key] = sanitizeInput($value);
            }
            
            // Log to file as backup
            logToFile('form_submissions.txt', [
                'type' => $formType,
                'timestamp' => date('Y-m-d H:i:s'),
                'data' => $sanitizedData
            ]);
            
            // Send emails
            $adminEmailSent = $this->sendAdminNotification($sanitizedData, $formType);
            $userEmailSent = $this->sendUserConfirmation($sanitizedData, $formType);
            
            $response = [
                'success' => true,
                'message' => 'Form submitted successfully!',
                'admin_email_sent' => $adminEmailSent,
                'user_email_sent' => $userEmailSent,
                'timestamp' => date('Y-m-d H:i:s')
            ];
            
            consoleLog("Form processing completed", $response);
            return $response;
            
        } catch (Exception $e) {
            $error = [
                'success' => false,
                'message' => $e->getMessage(),
                'timestamp' => date('Y-m-d H:i:s')
            ];
            
            consoleLog("Form processing error", $error);
            
            // Still log the attempt even if there was an error
            logToFile('form_errors.txt', [
                'error' => $e->getMessage(),
                'data' => $formData,
                'timestamp' => date('Y-m-d H:i:s')
            ]);
            
            return $error;
        }
    }
}
?> 