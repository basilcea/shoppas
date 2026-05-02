"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const health_module_1 = require("./health/health.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const orders_module_1 = require("./orders/orders.module");
const sessions_module_1 = require("./sessions/sessions.module");
const realtime_module_1 = require("./realtime/realtime.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const master_list_module_1 = require("./master-list/master-list.module");
const allocation_module_1 = require("./allocation/allocation.module");
const client_views_module_1 = require("./client-views/client-views.module");
const chat_module_1 = require("./chat/chat.module");
const delivery_module_1 = require("./delivery/delivery.module");
const analytics_module_1 = require("./analytics/analytics.module");
const availability_module_1 = require("./availability/availability.module");
const pricelist_module_1 = require("./pricelist/pricelist.module");
const feedback_module_1 = require("./feedback/feedback.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            health_module_1.HealthModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            sessions_module_1.SessionsModule,
            realtime_module_1.RealtimeModule,
            dashboard_module_1.DashboardModule,
            master_list_module_1.MasterListModule,
            allocation_module_1.AllocationModule,
            client_views_module_1.ClientViewsModule,
            chat_module_1.ChatModule,
            delivery_module_1.DeliveryModule,
            analytics_module_1.AnalyticsModule,
            availability_module_1.AvailabilityModule,
            pricelist_module_1.PriceListModule,
            feedback_module_1.FeedbackModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map