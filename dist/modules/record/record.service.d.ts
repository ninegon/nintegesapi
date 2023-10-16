import { BaseService } from 'src/core/BaseService';
import { RecordEntity } from 'src/entities/record.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder } from 'typeorm';
export declare class RecordService extends BaseService {
    recordRepo: SelectQueryBuilder<RecordEntity>;
    constructor(dataSource: DataSource);
    allRecords: () => Promise<RecordEntity[]>;
    insertRecord: (type: number, userId: number, workplaceId: number, isSameLocation: boolean, note: string) => Promise<InsertResult>;
    deleteRecord: (id: number) => Promise<DeleteResult>;
}
