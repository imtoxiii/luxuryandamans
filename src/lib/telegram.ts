
import toast from 'react-hot-toast';

// Helper to escape HTML characters to prevent Telegram API errors
const escapeHtml = (unsafe: any): string => {
    if (typeof unsafe !== 'string') return String(unsafe || '');
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

export const sendTelegramMessage = async (message: string): Promise<boolean> => {
    // Get env vars at runtime to ensure fresh values
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    console.log('📤 Sending Telegram message...');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || TELEGRAM_BOT_TOKEN === 'undefined' || TELEGRAM_CHAT_ID === 'undefined') {
        console.error('❌ Telegram credentials missing. Please check your .env file.');
        console.error('VITE_TELEGRAM_BOT_TOKEN:', TELEGRAM_BOT_TOKEN ? 'Set' : 'Missing');
        console.error('VITE_TELEGRAM_CHAT_ID:', TELEGRAM_CHAT_ID ? 'Set' : 'Missing');
        toast.error('Configuration Error: Unable to send message. Please contact us directly.');
        return false;
    }

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML',
            }),
        });

        const data = await response.json();

        if (data.ok) {
            console.log('✅ Telegram message sent successfully');
            return true;
        } else {
            console.error('❌ Telegram API Error:', data);
            // Don't show technical details to user, just a general error
            toast.error('Unable to send enquiry. Please try again later.');
            return false;
        }
    } catch (error) {
        console.error('❌ Network Error sending Telegram message:', error);
        toast.error('Network error. Please check your connection and try again.');
        return false;
    }
};

export const formatBookingMessage = (data: any): string => {
    const {
        name,
        email,
        phone,
        destination,
        guests,
        travelDate,
        duration,
        message,
        preferredContact,
        packageName,
        totalPrice,
        supplements,
        selectedActivities
    } = data;

    return `
<b>🆕 New Booking Enquiry</b>

<b>👤 Customer Details</b>
<b>Name:</b> ${escapeHtml(name)}
<b>Email:</b> ${escapeHtml(email)}
<b>Phone:</b> ${escapeHtml(phone)}
<b>Preferred Contact:</b> ${escapeHtml(preferredContact)}

<b>✈️ Trip Details</b>
<b>Destination:</b> ${escapeHtml(destination)}
<b>Guests:</b> ${escapeHtml(guests)}
<b>Travel Date:</b> ${escapeHtml(travelDate)}
<b>Duration:</b> ${escapeHtml(duration)} days

${packageName ? `
<b>📦 Package Details</b>
<b>Package:</b> ${escapeHtml(packageName)}
<b>Total Price:</b> ₹${totalPrice?.toLocaleString()}
${supplements?.length ? `<b>Add-ons:</b> ${supplements.map(escapeHtml).join(', ')}` : ''}
${selectedActivities?.length ? `<b>Activities:</b> ${selectedActivities.map(escapeHtml).join(', ')}` : ''}
` : ''}

<b>💬 Message</b>
${escapeHtml(message)}
  `;
};

export const formatContactMessage = (data: any): string => {
    const { name, email, subject, message } = data;

    return `
<b>📬 New Contact Message</b>

<b>👤 Sender Details</b>
<b>Name:</b> ${escapeHtml(name)}
<b>Email:</b> ${escapeHtml(email)}

<b>📝 Message Details</b>
<b>Subject:</b> ${escapeHtml(subject)}
<b>Message:</b>
${escapeHtml(message)}
  `;
};

export const formatCalculatorMessage = (data: any): string => {
    const {
        name,
        email,
        phone,
        selectedDestinationNames,
        travelers,
        duration,
        accommodationTier,
        mealPlan,
        tourType,
        selectedActivities,
        includeFlights,
        includeInsurance,
        totalCost,
        breakdown
    } = data;

    const breakdownText = breakdown && breakdown.length > 0
        ? breakdown.map((item: any) => `• ${escapeHtml(item.category)}: ₹${Math.round(item.amount).toLocaleString()}`).join('\n')
        : 'No breakdown available';

    return `
<b>🧮 New Custom Trip Estimate</b>

<b>👤 Customer Details</b>
<b>Name:</b> ${escapeHtml(name)}
<b>Email:</b> ${escapeHtml(email)}
<b>Phone:</b> ${escapeHtml(phone || 'Not provided')}

<b>✈️ Trip Configuration</b>
<b>Destinations:</b> ${selectedDestinationNames?.map(escapeHtml).join(', ') || 'None'}
<b>Travelers:</b> ${escapeHtml(travelers)}
<b>Duration:</b> ${escapeHtml(duration)} days
<b>Accommodation:</b> ${escapeHtml(accommodationTier)}
<b>Meal Plan:</b> ${escapeHtml(mealPlan)}
<b>Tour Type:</b> ${escapeHtml(tourType)}

<b>🎯 Activities & Extras</b>
<b>Activities:</b> ${selectedActivities?.length ? selectedActivities.length : 'None'}
<b>Flights:</b> ${includeFlights ? '✅ Yes' : '❌ No'}
<b>Insurance:</b> ${includeInsurance ? '✅ Yes' : '❌ No'}

<b>💰 Cost Estimation</b>
<b>Total Estimate:</b> ₹${Math.round(totalCost).toLocaleString()}

<b>📊 Cost Breakdown</b>
${breakdownText}
  `;
};
