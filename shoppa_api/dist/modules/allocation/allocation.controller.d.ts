import { AllocationService } from './allocation.service';
export declare class AllocationController {
    private svc;
    constructor(svc: AllocationService);
    preview(req: any, body: {
        item_id: string;
        requested_total: number;
        available_total: number;
        client_breakdown: Array<{
            client_id: string;
            requested: number;
        }>;
    }): {
        auto: {
            client_id: string;
            allocated: number;
        }[];
        remaining: number;
    };
    confirm(req: any, body: {
        item_id: string;
        allocations: Array<{
            client_id: string;
            quantity: number;
        }>;
    }): Promise<{
        ok: boolean;
        allocations: any[];
    }>;
}
