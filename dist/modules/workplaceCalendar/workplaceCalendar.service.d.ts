import { BaseService } from 'src/core/BaseService';
import { WorkplaceCalendarEntity } from 'src/entities/workplaceCalendar.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder } from 'typeorm';
export declare class WorkplaceCalendarService extends BaseService {
    workplaceCalendarRepo: SelectQueryBuilder<WorkplaceCalendarEntity>;
    userWorkplaceCalendar: SelectQueryBuilder<WorkplaceCalendarEntity>;
    constructor(dataSource: DataSource);
    allWorkplaceCalendars: () => Promise<WorkplaceCalendarEntity[]>;
    insertWorkplaceCalendar: (workplaceId: number, hours: number, date: Date) => Promise<InsertResult>;
    deleteWorkplaceCalendar: (id: number) => Promise<DeleteResult>;
}
