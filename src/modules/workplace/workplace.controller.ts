import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkplaceService } from './workplace.service';
import { ApiTags } from "@nestjs/swagger";

@Controller('workplace')
@ApiTags('workplace')
export class WorkplaceController {
  constructor(private readonly workplaceService: WorkplaceService) { }

  @Post('AllWorkplaces')
  async allWorkplaces() {
    return await this.workplaceService.allWorkplaces()
  }

  @Post('WorkplaceByUserId/:userId')
  async workplaceById(@Param('userId') userId: number) {
    return await this.workplaceService.workplaceById(userId)
  }

  @Post('InsertWorkplace')
  async insertWorkplace(@Body("code") code: string, @Body("name") name: string, @Body("address") address: string, @Body("latitude") latitude: string, @Body("longitude") longitude: string) {
    return await this.workplaceService.insertWorkplace(code, name, address, latitude, longitude)
  }
}
