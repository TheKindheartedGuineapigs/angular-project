
import { Message } from './message';

export class Chat {
    _id;
    participants: string[];
    messages: Message[];
    lastMessage: Message[];
}
