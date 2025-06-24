import { DirectLine, Activity } from '@azure/bot-directline';
import { v4 as uuidv4 } from 'uuid';

class BotService {
  private directLine: DirectLine;
  private conversationId: string | null = null;
  private userId: string;

  constructor(token: string) {
    this.directLine = new DirectLine({ token });
    this.userId = uuidv4();
  }

  async startConversation(): Promise<void> {
    try {
      const conversation = await this.directLine.conversations.startConversation();
      this.conversationId = conversation.conversationId;
    } catch (error) {
      console.error('Error starting conversation:', error);
      throw error;
    }
  }

  async sendMessage(text: string): Promise<void> {
    if (!this.conversationId) {
      await this.startConversation();
    }

    try {
      await this.directLine.conversations.postActivity({
        from: { id: this.userId },
        type: 'message',
        text,
        timestamp: new Date().toISOString(),
        channelId: 'directline',
        conversation: { id: this.conversationId! }
      });
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  subscribeToMessages(callback: (activity: Activity) => void): () => void {
    const subscription = this.directLine.activity$
      .filter(activity => activity.type === 'message' && activity.from.id !== this.userId)
      .subscribe({
        next: callback,
        error: error => console.error('Error in message subscription:', error)
      });

    return () => subscription.unsubscribe();
  }
}

// Initialize the bot service with your Direct Line token
const botService = new BotService(import.meta.env.VITE_AZURE_BOT_TOKEN);

export default botService;