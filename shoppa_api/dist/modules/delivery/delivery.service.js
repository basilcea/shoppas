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
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let DeliveryService = class DeliveryService {
    constructor(sb) {
        this.sb = sb;
    }
    async packingPreview(shopperId, sessionId) {
        var _a, _b;
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('list_items')
            .select('id, name, quantity, order_id, status, orders:orders(client_id, id)')
            .eq('status', 'bought')
            .eq('orders.session_id', sessionId);
        if (error)
            throw error;
        const byClient = {};
        for (const it of (_a = data) !== null && _a !== void 0 ? _a : []) {
            const cid = (_b = it === null || it === void 0 ? void 0 : it.orders) === null || _b === void 0 ? void 0 : _b.client_id;
            if (!cid)
                continue;
            byClient[cid] = byClient[cid] || [];
            byClient[cid].push({ id: it.id, name: it.name, quantity: it.quantity, order_id: it.order_id });
        }
        return byClient;
    }
    async setStatus(shopperId, orderId, status) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('orders')
            .update({ delivery_status: status })
            .eq('id', orderId)
            .eq('shopper_id', shopperId)
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
};
exports.DeliveryService = DeliveryService;
exports.DeliveryService = DeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], DeliveryService);
//# sourceMappingURL=delivery.service.js.map