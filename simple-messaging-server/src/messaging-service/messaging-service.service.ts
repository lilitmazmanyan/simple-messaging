import {Injectable} from '@nestjs/common';
import {Message} from "../types/message.model";

@Injectable()
export class MessagesService {
    private messages: Message[] = [];

    getAllMessages(): Message[] {
        return this.messages;
    }

    addMessage(message: Message): Message {
        message.id = this.messages.length + 1;
        this.messages.push(message);
        return message;
    }
}
