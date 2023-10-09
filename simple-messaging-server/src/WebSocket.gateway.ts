import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Server} from 'socket.io';
import {Message} from './types/message.model';
import {MessagesService} from "./messaging-service/messaging-service.service";

@WebSocketGateway(8080, {cors: '*'})
export class WebsocketGateway {
    @WebSocketServer() server: Server;

    constructor(private readonly messagesService: MessagesService) {
    }

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: Message): void {
        const storedMessage: Message = this.messagesService.addMessage(message);
        this.server.emit('message', storedMessage);
    }
}
