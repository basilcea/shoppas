import { ClientViewsService } from './client-views.service';
export declare class ClientViewsController {
    private svc;
    constructor(svc: ClientViewsService);
    getOrder(id: string): Promise<any>;
    approve(id: string, body: {
        item_id?: string;
        approve: boolean;
        suggestion?: string;
    }): Promise<any>;
}
