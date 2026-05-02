import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private svc;
    constructor(svc: AnalyticsService);
    summary(req: any, range?: 'day' | 'week'): Promise<any>;
}
