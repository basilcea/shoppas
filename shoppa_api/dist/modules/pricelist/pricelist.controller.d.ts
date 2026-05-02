import { PriceListService } from './pricelist.service';
export declare class PriceListController {
    private svc;
    constructor(svc: PriceListService);
    get(req: any): Promise<any[]>;
    upsert(req: any, body: {
        product: string;
        category: string;
        min_quantity: number;
        quantity_unit: string;
        amount: number;
    }): Promise<any[]>;
    bulk(req: any, body: Array<{
        product: string;
        category: string;
        min_quantity: number;
        quantity_unit: string;
        amount: number;
    }>): Promise<any[]>;
}
