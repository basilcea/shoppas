import { FeedbackService } from './feedback.service';
export declare class FeedbackController {
    private svc;
    constructor(svc: FeedbackService);
    list(req: any, orderId?: string): Promise<any[]>;
    submit(req: any, body: {
        order_id: string;
        target: 'shopper' | 'client' | 'platform';
        rating: number;
        comment?: string;
    }): Promise<any>;
}
