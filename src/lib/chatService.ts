import { v4 as uuidv4 } from 'uuid';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

type MessageCallback = (message: Message) => void;

class ChatService {
  private sessionId: string;
  private callbacks: Set<MessageCallback>;
  private messageQueue: Message[];
  private isProcessing: boolean;
  private context: {
    lastTopic?: string;
    conversationHistory: Message[];
  };

  constructor() {
    this.sessionId = uuidv4();
    this.callbacks = new Set();
    this.messageQueue = [];
    this.isProcessing = false;
    this.context = {
      conversationHistory: []
    };
  }

  private async processQueue() {
    if (this.isProcessing || this.messageQueue.length === 0) return;

    this.isProcessing = true;
    const message = this.messageQueue[0];

    try {
      const botResponse = this.generateResponse(message.text);
      
      const response: Message = {
        id: uuidv4(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      this.context.conversationHistory.push(message, response);
      this.callbacks.forEach(callback => callback(response));
    } catch (error) {
      console.error('Error processing message:', error);
      const errorResponse: Message = {
        id: uuidv4(),
        text: "I apologize, but I'm having trouble processing your request. Could you please rephrase or try again?",
        sender: 'bot',
        timestamp: new Date()
      };
      this.callbacks.forEach(callback => callback(errorResponse));
    } finally {
      this.messageQueue.shift();
      this.isProcessing = false;
      this.processQueue();
    }
  }

  private generateResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();
    
    // Check for greetings
    if (message.match(/\b(hi|hello|hey|greetings)\b/)) {
      return "Hello! I'm your AI travel assistant for the Andaman Islands. How can I help you plan your perfect vacation?";
    }

    // Check for package-related queries
    if (message.includes('package') || message.includes('pricing') || message.includes('cost')) {
      return `We offer several luxury packages starting from ₹${packages[0].price.toLocaleString()}:\n\n` +
        packages.slice(0, 3).map(pkg => 
          `- ${pkg.title}: ${pkg.description} (₹${pkg.price.toLocaleString()})`
        ).join('\n') +
        '\n\nWould you like more details about any specific package?';
    }

    // Check for destination queries
    if (message.includes('destination') || message.includes('place') || message.includes('island')) {
      return `Here are our top destinations in the Andaman Islands:\n\n` +
        destinations.slice(0, 3).map(dest => 
          `- ${dest.name}: ${dest.description}`
        ).join('\n') +
        '\n\nWould you like to know more about any specific destination?';
    }

    // Check for activity queries
    if (message.includes('activity') || message.includes('things to do') || message.includes('experience')) {
      return `We offer various activities and experiences:\n\n` +
        `- Scuba diving and snorkeling\n` +
        `- Luxury beach resorts\n` +
        `- Island hopping tours\n` +
        `- Sunset cruises\n` +
        `- Wellness retreats\n\n` +
        `Which activity interests you the most?`;
    }

    // Check for booking queries
    if (message.includes('book') || message.includes('reserve') || message.includes('enquiry')) {
      return `You can book your Andaman experience in several ways:\n\n` +
        `1. Use our online booking system\n` +
        `2. Call us at +91-987-654-3210\n` +
        `3. Email us at bookings@andamanluxury.com\n\n` +
        `How would you like to proceed with your booking?`;
    }

    // Check for timing queries
    if (message.includes('when') || message.includes('best time') || message.includes('weather')) {
      return `The best time to visit the Andaman Islands is between October and May:\n\n` +
        `- Peak Season (November to February): Perfect weather, ideal for all activities\n` +
        `- Shoulder Season (October & March-May): Good weather, fewer crowds\n` +
        `- Monsoon (June to September): Some activities may be limited\n\n` +
        `When are you planning to visit?`;
    }

    // Check for gratitude
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about the Andaman Islands?";
    }

    // Default response
    return "I understand you're interested in the Andaman Islands. Could you please specify what information you're looking for? I can help with packages, destinations, activities, or booking details.";
  }

  public subscribe(callback: MessageCallback): () => void {
    this.callbacks.add(callback);
    return () => this.callbacks.delete(callback);
  }

  public async sendMessage(text: string): Promise<void> {
    const message: Message = {
      id: uuidv4(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    this.messageQueue.push(message);
    this.processQueue();
  }
}

// Create a singleton instance
const chatService = new ChatService();

export default chatService;