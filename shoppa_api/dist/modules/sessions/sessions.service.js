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
exports.SessionsService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let SessionsService = class SessionsService {
    constructor(sb) {
        this.sb = sb;
    }
    async active(shopperId) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('shop_sessions')
            .select('*, orders:orders(*)')
            .eq('shopper_id', shopperId)
            .eq('status', 'active')
            .order('started_at', { ascending: false });
        if (error)
            throw error;
        return data;
    }
    async create(shopperId, body) {
        var _a;
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('shop_sessions')
            .insert({ shopper_id: shopperId, status: 'active', date: (_a = body.date) !== null && _a !== void 0 ? _a : new Date().toISOString().slice(0, 10) })
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
    async updateStatus(shopperId, id, status) {
        const client = this.sb.getClient();
        const { data, error } = await client.from('shop_sessions').update({ status }).eq('id', id).eq('shopper_id', shopperId).select().single();
        if (error)
            throw error;
        return data;
    }
};
exports.SessionsService = SessionsService;
exports.SessionsService = SessionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], SessionsService);
//# sourceMappingURL=sessions.service.js.map