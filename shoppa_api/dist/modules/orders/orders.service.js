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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let OrdersService = class OrdersService {
    constructor(sb) {
        this.sb = sb;
    }
    async list(shopperId, status) {
        const client = this.sb.getClient();
        let q = client.from('orders').select('*').eq('shopper_id', shopperId);
        if (status)
            q = q.eq('status', status);
        const { data, error } = await q.order('created_at', { ascending: false });
        if (error)
            throw error;
        return data;
    }
    async get(shopperId, id) {
        const client = this.sb.getClient();
        const { data, error } = await client.from('orders').select('*, items:list_items(*)').eq('id', id).single();
        if (error)
            throw error;
        return data;
    }
    async create(shopperId, body) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('orders')
            .insert({ shopper_id: shopperId, client_id: body.client_id, status: 'pending', notes: body.notes || null })
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map