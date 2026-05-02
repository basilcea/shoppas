import { SessionsService } from './sessions.service';
export declare class SessionsController {
    private svc;
    constructor(svc: SessionsService);
    active(req: any): Promise<any[]>;
    create(req: any, body: any): Promise<any>;
    updateStatus(req: any, id: string, body: {
        status: string;
    }): Promise<any>;
}
