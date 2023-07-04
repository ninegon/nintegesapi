import { Body, Controller, Param, Post } from '@nestjs/common';
import { RecordService } from './record.service';
import { ApiTags } from "@nestjs/swagger";

@Controller('record')
@ApiTags('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) { }

  @Post('AllRecords')
  async allRecords() {
    return await this.recordService.allRecords()
  }

  @Post('InsertRecord')
  async insertRecord(@Body('type') type: number, @Body('userId') userId: number, @Body('workplaceId') workplaceId: number, @Body('isSameLocation') isSameLocation: boolean, @Body('note') note: string) {
    return await this.recordService.insertRecord(type, userId, workplaceId, isSameLocation, note)
  }

  @Post('DeleteRecord/:id')
  async deleteRecord(@Param('id') id: number) {
    return await this.recordService.deleteRecord(id)
  }
}
