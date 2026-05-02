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
exports.DeliveryController = void 0;
const common_1 = require("@nestjs/common");
const delivery_service_1 = require("./delivery.service");
const auth_guard_1 = require("../../common/guards/auth.guard");
let DeliveryController = class DeliveryController {
    constructor(svc) {
        this.svc = svc;
    }
    preview(req, sessionId) {
        return this.svc.packingPreview(req.user.id, sessionId);
    }
    setStatus(req, orderId, body) {
        return this.svc.setStatus(req.user.id, orderId, body.status);
    }
};
exports.DeliveryController = DeliveryController;
__decorate([
    (0, common_1.Get)('packing/preview'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('session_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "preview", null);
__decorate([
    (0, common_1.Patch)(':orderId/status'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('orderId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "setStatus", null);
exports.DeliveryController = DeliveryController = __decorate([
    (0, common_1.Controller)('delivery'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], DeliveryController);
//# sourceMappingURL=delivery.controller.js.map