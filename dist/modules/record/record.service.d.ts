import { BaseService } from 'src/core/BaseService';
import { RecordEntity } from 'src/entities/record.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder } from 'typeorm';
import { WorkplaceCalendarEntity } from 'src/entities/workplaceCalendar.entity';
export declare class RecordService extends BaseService {
    recordRepo: SelectQueryBuilder<RecordEntity>;
    workplaceCalendarRepo: SelectQueryBuilder<WorkplaceCalendarEntity>;
    constructor(dataSource: DataSource);
    allRecords: () => Promise<RecordEntity[] & {
        hours?: {
            workedHours: number;
            neededHours: number;
        };
    }>;
    insertRecord: (type: number, userId: number, workplaceId: number, isSameLocation: boolean, note: string, workedHours: number) => Promise<InsertResult>;
    deleteRecord: (id: number) => Promise<DeleteResult>;
}
