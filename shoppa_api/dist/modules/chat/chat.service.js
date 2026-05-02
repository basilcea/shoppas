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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let ChatService = class ChatService {
    constructor(sb) {
        this.sb = sb;
    }
    async getMessages(userId, thread) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('messages')
            .select('*')
            .eq('thread_id', thread)
            .order('created_at', { ascending: true });
        if (error)
            throw error;
        return data;
    }
    async sendMessage(userId, body) {
        const client = this.sb.getClient();
        const { data, error } = await client
            .from('messages')
            .insert({ thread_id: body.thread, author_id: userId, content: body.message, quick_reply: !!body.quick_reply })
            .select()
            .single();
        if (error)
            throw error;
        return data;
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], ChatService);
//# sourceMappingURL=chat.service.js.map