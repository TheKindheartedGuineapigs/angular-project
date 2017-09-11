<<<<<<< HEAD
import { Message } from './message';

export class Chat {
    participantOne: string;
    participantTwo: string;
    messages: Message[];
=======

import { Message } from './message';

export class Chat {
    _id;
    participants: string[];
    messages: Message[];
    lastMessage: Message[];
>>>>>>> develop
}
