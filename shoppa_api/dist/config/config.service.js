"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigService = void 0;
const common_1 = require("@nestjs/common");
let AppConfigService = class AppConfigService {
    constructor() {
        var _a, _b, _c;
        this.port = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '4000', 10);
        this.supabaseUrl = (_b = process.env.SUPABASE_URL) !== null && _b !== void 0 ? _b : '';
        this.supabaseAnonKey = (_c = process.env.SUPABASE_ANON_KEY) !== null && _c !== void 0 ? _c : '';
    }
};
exports.AppConfigService = AppConfigService;
exports.AppConfigService = AppConfigService = __decorate([
    (0, common_1.Injectable)()
], AppConfigService);
//# sourceMappingURL=config.service.js.map