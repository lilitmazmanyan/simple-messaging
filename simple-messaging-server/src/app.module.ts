    import {Module} from '@nestjs/common';
    import {AppController} from './app.controller';
    import {AppService} from './app.service';
    import {WebsocketGateway} from "./WebSocket.gateway";
    import {MessagesService} from './messaging-service/messaging-service.service';

    @Module({
        imports: [],
        controllers: [AppController],
        providers: [AppService, WebsocketGateway, MessagesService],
    })
    export class AppModule {
    }
