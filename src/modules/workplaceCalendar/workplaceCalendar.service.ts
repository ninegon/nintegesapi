import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/BaseService';
import { WorkplaceCalendarEntity } from 'src/entities/workplaceCalendar.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class WorkplaceCalendarService extends BaseService {
    workplaceCalendarRepo: SelectQueryBuilder<WorkplaceCalendarEntity>
    userWorkplaceCalendar: SelectQueryBuilder<WorkplaceCalendarEntity>
    constructor(@Inject('DATASOURCE') dataSource: DataSource) {
        super(dataSource)
        this.workplaceCalendarRepo = this.makeQB(WorkplaceCalendarEntity, 'r')
        this.userWorkplaceCalendar = this.makeQB(WorkplaceCalendarEntity, 'r')
    }

    allWorkplaceCalendars = async (): Promise<WorkplaceCalendarEntity[]> => await this.workplaceCalendarRepo.leftJoinAndSelect('r.workplace', 'workplace').getMany()
    insertWorkplaceCalendar = async (workplaceId: number, hours: number, date: Date): Promise<InsertResult> => await this.workplaceCalendarRepo.insert().into(WorkplaceCalendarEntity).values({ workplaceId, hours, date }).execute()
    deleteWorkplaceCalendar = async (id: number): Promise<DeleteResult> => await this.workplaceCalendarRepo.delete().where({ id }).execute()

}
