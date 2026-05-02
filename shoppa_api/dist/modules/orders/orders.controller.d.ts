import { OrdersService } from './orders.service';
export declare class OrdersController {
    private svc;
    constructor(svc: OrdersService);
    list(req: any, status?: string): Promise<any[]>;
    get(req: any, id: string): Promise<any>;
    create(req: any, body: any): Promise<any>;
}
