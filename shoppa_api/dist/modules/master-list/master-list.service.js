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
exports.MasterListService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../auth/supabase.service");
let MasterListService = class MasterListService {
    constructor(sb) {
        this.sb = sb;
    }
    async getCombinedList(shopperId, groupBy) {
        const client = this.sb.getClient();
        const { data, error } = await client.rpc('get_master_list', { p_shopper: shopperId, p_groupby: groupBy });
        if (error)
            throw error;
        return data;
    }
    async updateItemStatus(shopperId, body) {
        const client = this.sb.getClient();
        switch (body.action) {
            case 'bought':
                return client.from('list_items').update({ status: 'bought' }).eq('id', body.item_id).select().single();
            case 'unavailable':
                return client.from('list_items').update({ status: 'unavailable' }).eq('id', body.item_id).select().single();
            case 'substitute':
                return client
                    .from('list_items')
                    .update({ status: 'substituted', substitute_item_id: body.substitute_item_id })
                    .eq('id', body.item_id)
                    .select()
                    .single();
        }
    }
};
exports.MasterListService = MasterListService;
exports.MasterListService = MasterListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], MasterListService);
//# sourceMappingURL=master-list.service.js.map