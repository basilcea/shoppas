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
exports.PriceListService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let PriceListService = class PriceListService {
    constructor(sb) {
        this.sb = sb;
    }
    async get(shopperId) {
        const client = this.sb.getClient();
        const { data, error } = await client.from('price_list').select('*').eq('shopper_id', shopperId);
        if (error)
            throw error;
        return data;
    }
    async upsert(shopperId, body) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('price_list')
            .upsert({ shopper_id: shopperId, ...body }, { onConflict: 'shopper_id,product,category' })
            .select();
        if (error)
            throw error;
        return data;
    }
    async bulkUpsert(shopperId, rows) {
        const client = this.sb.getClient();
        const payload = rows.map((r) => ({ shopper_id: shopperId, ...r }));
        const { data, error } = await client.from('price_list').upsert(payload, { onConflict: 'shopper_id,product,category' }).select();
        if (error)
            throw error;
        return data;
    }
};
exports.PriceListService = PriceListService;
exports.PriceListService = PriceListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], PriceListService);
//# sourceMappingURL=pricelist.service.js.map