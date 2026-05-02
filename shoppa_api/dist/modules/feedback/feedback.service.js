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
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let FeedbackService = class FeedbackService {
    constructor(sb) {
        this.sb = sb;
    }
    async list(userId, orderId) {
        const client = this.sb.getClient();
        let q = client.from('feedback').select('*').eq('author_id', userId);
        if (orderId)
            q = q.eq('order_id', orderId);
        const { data, error } = await q.order('created_at', { ascending: false });
        if (error)
            throw error;
        return data;
    }
    async submit(userId, body) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('feedback')
            .insert({ author_id: userId, ...body })
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
};
exports.FeedbackService = FeedbackService;
exports.FeedbackService = FeedbackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], FeedbackService);
//# sourceMappingURL=feedback.service.js.map