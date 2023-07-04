import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/BaseService';
import { WorkplaceEntity } from 'src/entities/workplace.entity';
import { DataSource, InsertResult, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class WorkplaceService extends BaseService {
    workplaceRepo: SelectQueryBuilder<WorkplaceEntity>

    constructor(@Inject('DATASOURCE') dataSource: DataSource) {
        super(dataSource)
        this.workplaceRepo = this.makeQB(WorkplaceEntity, 'r')
    }

    allWorkplaces = async (): Promise<WorkplaceEntity[]> => await this.workplaceRepo.getMany()
    workplaceById = async (workplaceId: number): Promise<WorkplaceEntity> => await this.workplaceRepo.where({ workplaceId }).getOneOrFail()
    insertWorkplace = async (code: string, name: string, address: string, latitude: string, longitude: string): Promise<InsertResult> => await this.workplaceRepo.insert().into(WorkplaceEntity).values({ code, name, address, latitude, longitude }).execute()
}
