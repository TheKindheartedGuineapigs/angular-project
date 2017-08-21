import { Advertisement } from './advertisement';
import { Chat } from './chat';

export class User {
    username: string;
    displayName: string;
    pictureUrl: string;
    email: string;
    location: string;
    rating: number;
    advertisements: Advertisement[];
    chats: Chat[];
}
