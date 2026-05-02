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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterListController = void 0;
const common_1 = require("@nestjs/common");
const master_list_service_1 = require("./master-list.service");
const auth_guard_1 = require("../../common/guards/auth.guard");
let MasterListController = class MasterListController {
    constructor(svc) {
        this.svc = svc;
    }
    async get(req, groupBy = 'category') {
        return this.svc.getCombinedList(req.user.id, groupBy);
    }
    async updateItemStatus(req, body) {
        return this.svc.updateItemStatus(req.user.id, body);
    }
};
exports.MasterListController = MasterListController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('groupBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MasterListController.prototype, "get", null);
__decorate([
    (0, common_1.Patch)('item'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MasterListController.prototype, "updateItemStatus", null);
exports.MasterListController = MasterListController = __decorate([
    (0, common_1.Controller)('master-list'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [master_list_service_1.MasterListService])
], MasterListController);
//# sourceMappingURL=master-list.controller.js.map