import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/core/BaseService';
import { RecordEntity } from 'src/entities/record.entity';
import { DataSource, InsertResult, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class RecordService extends BaseService {
    recordRepo: SelectQueryBuilder<RecordEntity>

    constructor(@Inject('DATASOURCE') dataSource: DataSource) {
        super(dataSource)
        this.recordRepo = this.makeQB(RecordEntity, 'r')
    }

    allRecords = async (): Promise<RecordEntity[]> => await this.recordRepo.getMany()
    insertRecord = async (type: number, userId: number, workplaceId: number, isSameLocation: boolean, note: string): Promise<InsertResult> => await this.recordRepo.insert().into(RecordEntity).values({ type, userId, workplaceId, isSameLocation, note }).execute()
}