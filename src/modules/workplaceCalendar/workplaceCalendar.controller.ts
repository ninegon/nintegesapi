import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkplaceCalendarService } from './workplaceCalendar.service';
import { ApiTags } from "@nestjs/swagger";

@Controller('workplaceCalendar')
@ApiTags('workplaceCalendar')
export class WorkplaceCalendarController {
  constructor(private readonly workplaceCalendarService: WorkplaceCalendarService) { }

  @Post('getAllWorkplaceCalendar')
  async allWorkplaceCalendars() {
    return await this.workplaceCalendarService.allWorkplaceCalendars()
  }

  @Post('insertWorkplaceCalendar')
  async insertWorkplaceCalendar(@Body("workplaceId") workplaceId: number, @Body("hours") hours: number, @Body("date") date: Date) {
    return await this.workplaceCalendarService.insertWorkplaceCalendar(workplaceId, hours, date)
  }

 

  @Post('deleteWorkplaceCalendar/:id')
  async deleteWorkplaceCalendar(@Param('id') id: number) {
    return await this.workplaceCalendarService.deleteWorkplaceCalendar(id)
  }
}
