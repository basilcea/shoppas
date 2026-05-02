import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private svc;
    constructor(svc: DashboardService);
    today(req: any): Promise<{
        todayOrders: any[];
        activeSessions: any[];
        earningsSummary: any;
    }>;
    quickActions(req: any): Promise<{
        key: string;
        label: string;
        href: string;
    }[]>;
}
