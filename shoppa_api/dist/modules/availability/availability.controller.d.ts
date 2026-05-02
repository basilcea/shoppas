import { AvailabilityService } from './availability.service';
export declare class AvailabilityController {
    private svc;
    constructor(svc: AvailabilityService);
    get(req: any): Promise<any>;
    set(req: any, body: {
        next_start: string;
        deadline: string;
        max_clients: number;
    }): Promise<any>;
}
