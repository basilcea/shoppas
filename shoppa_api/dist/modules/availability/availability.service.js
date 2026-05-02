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
exports.AvailabilityService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let AvailabilityService = class AvailabilityService {
    constructor(sb) {
        this.sb = sb;
    }
    async get(shopperId) {
        const client = this.sb.getClient();
        const { data, error } = await client.from('availability').select('*').eq('shopper_id', shopperId).single();
        if (error && error.code !== 'PGRST116')
            throw error;
        return data !== null && data !== void 0 ? data : { next_start: null, deadline: null, max_clients: 0 };
    }
    async set(shopperId, body) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('availability')
            .upsert({ shopper_id: shopperId, ...body })
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
};
exports.AvailabilityService = AvailabilityService;
exports.AvailabilityService = AvailabilityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], AvailabilityService);
//# sourceMappingURL=availability.service.js.map