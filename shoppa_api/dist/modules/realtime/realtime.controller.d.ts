import { RealtimeService } from './realtime.service';
export declare class RealtimeController {
    private svc;
    constructor(svc: RealtimeService);
    subscribe(req: any, body: {
        channel: string;
    }): Promise<{
        ok: boolean;
    }>;
}
