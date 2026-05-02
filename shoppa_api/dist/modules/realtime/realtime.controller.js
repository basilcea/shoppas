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
exports.RealtimeController = void 0;
const common_1 = require("@nestjs/common");
const realtime_service_1 = require("./realtime.service");
const auth_guard_1 = require("../../common/guards/auth.guard");
let RealtimeController = class RealtimeController {
    constructor(svc) {
        this.svc = svc;
    }
    subscribe(req, body) {
        return this.svc.subscribeChannel(req.user.id, body.channel);
    }
};
exports.RealtimeController = RealtimeController;
__decorate([
    (0, common_1.Post)('subscribe'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RealtimeController.prototype, "subscribe", null);
exports.RealtimeController = RealtimeController = __decorate([
    (0, common_1.Controller)('realtime'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [realtime_service_1.RealtimeService])
], RealtimeController);
//# sourceMappingURL=realtime.controller.js.map