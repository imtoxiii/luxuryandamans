import toast from 'react-hot-toast';

// PHP Backend URL - Updated to use new form handler
const PHP_BACKEND_URL = '/backend/formHandler.php';

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
  // Allow arbitrary extra fields for richer submissions (calculator, etc.)
  [key: string]: any;
}

export const sendEmail = async (data: EmailData) => {
  console.log('📧 Form Data:', data);
  
  // Validate required fields before sending
  if (!data.name || (!data.email && !data.phone)) {
    toast.error('❌ Please provide your name and at least one contact (email or phone).');
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    toast.error('❌ Please enter a valid email address');
    return false;
  }
  
  try {
    const response = await fetch(PHP_BACKEND_URL, {
      method: 'POST',
      headers: {
        // Some cPanel PHP configs require no explicit Content-Type for JSON; we will send both JSON and a fallback form body
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        name: data.name.trim(),
        email: data.email?.trim()?.toLowerCase?.() || '',
        phone: data.phone?.trim() || '',
        subject: data.subject?.trim() || 'New Enquiry',
        message: data.message?.trim?.() ?? data.message,
      })
    });

    // Debug response status (remove in production)
    // console.log('📧 PHP Backend Response Status:', response.status);
    
    if (!response.ok) {
      // Retry once using form-encoded body for hosts that block JSON
      const formBody = new URLSearchParams();
      Object.entries({
        ...data,
        name: data.name.trim(),
        email: data.email?.trim()?.toLowerCase?.() || '',
        phone: data.phone?.trim() || '',
        subject: data.subject?.trim() || 'New Enquiry',
        message: data.message?.trim?.() ?? data.message,
      }).forEach(([k, v]) => {
        if (v === undefined || v === null) return;
        if (typeof v === 'object') {
          formBody.append(k, JSON.stringify(v));
        } else {
          formBody.append(k, String(v));
        }
      });
      const retry = await fetch(PHP_BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        body: formBody.toString()
      });
      if (retry.ok) {
        const result = await retry.json();
        if (result.success) {
          toast.success('🎉 Your enquiry has been submitted! We\'ll contact you within 24 hours.');
          return true;
        }
      }
      const errorText = await response.text();
      console.error('❌ PHP Backend Error Response:', errorText);
      
      // Handle specific error cases
      if (response.status === 404) {
        toast.error('🔌 Backend service not found. Please contact support.');
      } else if (response.status === 500) {
        toast.error('🛠️ Server error. Please try again later.');
      } else {
        toast.error(`📧 Error ${response.status}: Unable to send message`);
      }
      return false;
    }

    const result = await response.json();
    // Debug success response (remove in production)
    // console.log('✅ PHP Backend Success Response:', result);

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
  } catch (error: unknown) {
    console.error('💥 Email sending error:', error);
    
    // More specific error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      toast.error('🔌 Connection error. Please check your internet connection and try again.');
    } else if (error instanceof Error && error.message.includes('Server error: 500')) {
      toast.error('🛠️ Server error. Please try again later or contact support.');
    } else if (error instanceof Error && error.message.includes('Failed to fetch')) {
      toast.error('🌐 Unable to connect to server. Please check your connection.');
    } else {
      toast.error('📧 Failed to send message. Please try again or contact us directly.');
    }
    
    return false;
  }
};