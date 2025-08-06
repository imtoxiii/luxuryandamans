import toast from 'react-hot-toast';

// PHP Backend URL - Update this to match your server configuration
const PHP_BACKEND_URL = 'http://localhost/luxury-andamans/backend/processForm.php';

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  destination?: string;
  guests?: number;
  travel_date?: string;
  duration?: number;
  preferred_contact?: string;
  packageName?: string;
  totalPrice?: number;
}

export const sendEmail = async (data: EmailData) => {
  console.log('🚀 Sending email via PHP backend...', data);
  
  try {
    const response = await fetch(PHP_BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        subject: data.subject || 'New Enquiry',
        message: data.message,
        destination: data.destination || '',
        guests: data.guests || '',
        travel_date: data.travel_date || '',
        duration: data.duration || '',
        preferred_contact: data.preferred_contact || 'email',
        packageName: data.packageName || '',
        totalPrice: data.totalPrice || ''
      })
    });

    console.log('📧 PHP Backend Response Status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ PHP Backend Error Response:', errorText);
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ PHP Backend Success Response:', result);

    if (result.success) {
      toast.success('🎉 Your enquiry has been submitted! We\'ll contact you within 24 hours.');
      
      // Log additional info for debugging
      console.log('📊 Email Status:', {
        adminEmailSent: result.admin_email_sent,
        userEmailSent: result.user_email_sent,
        timestamp: result.timestamp
      });
      
      return true;
    } else {
      throw new Error(result.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('💥 Email sending error:', error);
    
    // More specific error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      toast.error('🔌 Connection error. Please check your internet connection and try again.');
    } else if (error.message.includes('Server error: 500')) {
      toast.error('🛠️ Server error. Please try again later or contact support.');
    } else {
      toast.error('📧 Failed to send message. Please try again or contact us directly.');
    }
    
    return false;
  }
};