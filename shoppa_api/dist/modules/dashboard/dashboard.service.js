"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let DashboardService = class DashboardService {
    constructor(sb) {
        this.sb = sb;
    }
    async getTodaySummary(userId) {
        const client = this.sb.getClient();
        const today = new Date().toISOString().slice(0, 10);
        const [{ data: orders }, { data: sessions }, { data: earnings }] = await Promise.all([
            client.from('orders').select('*').eq('shopper_id', userId).gte('created_at', today),
            client.from('shop_sessions').select('*').eq('shopper_id', userId).eq('date', today),
            client.rpc('earnings_today', { p_shopper: userId }),
        ]);
        return {
            todayOrders: orders !== null && orders !== void 0 ? orders : [],
            activeSessions: (sessions !== null && sessions !== void 0 ? sessions : []).filter((s) => s.status === 'active'),
            earningsSummary: earnings !== null && earnings !== void 0 ? earnings : { total: 0, net: 0, fees: 0 },
        };
    }
    async getQuickActions(userId) {
        return [
            { key: 'open_session', label: 'Open Session', href: '/sessions/new' },
            { key: 'create_order', label: 'Create Order', href: '/orders/new' },
            { key: 'availability', label: 'Set Availability', href: '/availability' },
            { key: 'price_list', label: 'Price List', href: '/pricelist' },
        ];
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map