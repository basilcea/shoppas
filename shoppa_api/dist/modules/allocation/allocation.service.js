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
exports.AllocationService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let AllocationService = class AllocationService {
    constructor(sb) {
        this.sb = sb;
    }
    preview(body) {
        const ratio = Math.min(1, body.available_total / Math.max(1, body.requested_total));
        const auto = body.client_breakdown.map((c) => ({ client_id: c.client_id, allocated: Math.floor(c.requested * ratio) }));
        return { auto, remaining: body.available_total - auto.reduce((a, b) => a + b.allocated, 0) };
    }
    async confirm(shopperId, body) {
        const client = this.sb.getClient();
        const rows = body.allocations.map((a) => ({ item_id: body.item_id, client_id: a.client_id, quantity: a.quantity }));
        const { data, error } = await client.from('allocations').insert(rows).select();
        if (error)
            throw error;
        return { ok: true, allocations: data };
    }
};
exports.AllocationService = AllocationService;
exports.AllocationService = AllocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], AllocationService);
//# sourceMappingURL=allocation.service.js.map