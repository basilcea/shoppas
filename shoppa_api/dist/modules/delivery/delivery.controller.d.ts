import { DeliveryService } from './delivery.service';
export declare class DeliveryController {
    private svc;
    constructor(svc: DeliveryService);
    preview(req: any, sessionId: string): Promise<Record<string, any[]>>;
    setStatus(req: any, orderId: string, body: {
        status: 'packed' | 'out_for_delivery' | 'delivered';
    }): Promise<any>;
}
