import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './modules/user/user.module';

import { TenancyProvider } from './core/tenancyProvider';
import { WorkplaceModule } from './modules/workplace/workplace.module';
import { RecordModule } from './modules/record/record.module';
import { WorkplaceCalendarModule } from './modules/workplaceCalendar/workplaceCalendar.module';

@Module({
  imports: [
    UserModule,
    WorkplaceModule,
    WorkplaceCalendarModule,
    RecordModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TenancyProvider
  ],
})
export class AppModule { }
