import { ChatService } from './chat.service';
export declare class ChatController {
    private svc;
    constructor(svc: ChatService);
    messages(req: any, thread: string): Promise<any[]>;
    send(req: any, body: {
        thread: string;
        message: string;
        quick_reply?: boolean;
    }): Promise<any>;
}
