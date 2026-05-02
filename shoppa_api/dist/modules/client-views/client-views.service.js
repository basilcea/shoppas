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
exports.ClientViewsService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let ClientViewsService = class ClientViewsService {
    constructor(sb) {
        this.sb = sb;
    }
    async getOrderPublic(orderId) {
        var _a;
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('orders')
            .select('*, items:list_items(*), shopper:users!orders_shopper_id_fkey(id,display_name), client:users!orders_client_id_fkey(id,display_name)')
            .eq('id', orderId)
            .single();
        if (error)
            throw error;
        const total = (data.items || []).reduce((sum, it) => { var _a, _b, _c; return sum + ((_b = (_a = it.actual_price) !== null && _a !== void 0 ? _a : it.expected_price) !== null && _b !== void 0 ? _b : 0) * ((_c = it.quantity) !== null && _c !== void 0 ? _c : 1); }, 0);
        const bought = (data.items || []).filter((i) => i.status === 'bought').length;
        return { ...data, progress: ((_a = data.items) === null || _a === void 0 ? void 0 : _a.length) ? bought / data.items.length : 0, total };
    }
    async clientApprove(orderId, body) {
        var _a;
        const client = this.sb.getClient();
        if (body.item_id) {
            const { data, error } = await client
                .from('list_items')
                .update({ client_approved: body.approve, client_suggestion: (_a = body.suggestion) !== null && _a !== void 0 ? _a : null })
                .eq('id', body.item_id)
                .select()
                .single();
            if (error)
                throw error;
            return data;
        }
        const { data, error } = await client.from('orders').update({ client_approved: body.approve }).eq('id', orderId).select().single();
        if (error)
            throw error;
        return data;
    }
};
exports.ClientViewsService = ClientViewsService;
exports.ClientViewsService = ClientViewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], ClientViewsService);
//# sourceMappingURL=client-views.service.js.map