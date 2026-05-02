import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { HealthModule } from './health/health.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { OrdersModule } from './orders/orders.module'
import { SessionsModule } from './sessions/sessions.module'
import { RealtimeModule } from './realtime/realtime.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { MasterListModule } from './master-list/master-list.module'
import { AllocationModule } from './allocation/allocation.module'
import { ClientViewsModule } from './client-views/client-views.module'
import { ChatModule } from './chat/chat.module'
import { DeliveryModule } from './delivery/delivery.module'
import { AnalyticsModule } from './analytics/analytics.module'
import { AvailabilityModule } from './availability/availability.module'
import { PriceListModule } from './pricelist/pricelist.module'
import { FeedbackModule } from './feedback/feedback.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    AuthModule,
    UsersModule,
    OrdersModule,
    SessionsModule,
    RealtimeModule,
    DashboardModule,
    MasterListModule,
    AllocationModule,
    ClientViewsModule,
    ChatModule,
    DeliveryModule,
    AnalyticsModule,
    AvailabilityModule,
    PriceListModule,
    FeedbackModule,
  ],
})
export class AppModule {}
