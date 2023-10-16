import { Module } from '@nestjs/common';
import { WorkplaceCalendarService } from './workplaceCalendar.service';
import { WorkplaceCalendarController } from './workplaceCalendar.controller';

@Module({
  controllers: [WorkplaceCalendarController],
  providers: [WorkplaceCalendarService],
  exports: [WorkplaceCalendarService]
})
export class WorkplaceCalendarModule {}
