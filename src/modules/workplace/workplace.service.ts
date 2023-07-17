import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/BaseService';
import { UserWorkplacesEntity } from 'src/entities/userworkplaces.entity';
import { WorkplaceEntity } from 'src/entities/workplace.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class WorkplaceService extends BaseService {
    workplaceRepo: SelectQueryBuilder<WorkplaceEntity>
    userWorkplace: SelectQueryBuilder<UserWorkplacesEntity>
    constructor(@Inject('DATASOURCE') dataSource: DataSource) {
        super(dataSource)
        this.workplaceRepo = this.makeQB(WorkplaceEntity, 'r')
        this.userWorkplace = this.makeQB(UserWorkplacesEntity, 'r')
    }

    allWorkplaces = async (): Promise<WorkplaceEntity[]> => await this.workplaceRepo.getMany()
    insertWorkplace = async (code: string, name: string, address: string, latitude: string, longitude: string): Promise<InsertResult> => await this.workplaceRepo.insert().into(WorkplaceEntity).values({ code, name, address, latitude, longitude }).execute()
    updateUser = async (id: number,code: string, name: string, address: string, latitude: string, longitude: string): Promise<UpdateResult> => await this.workplaceRepo.update(WorkplaceEntity).set({  code, name, address, latitude, longitude }).where({ id }).execute()

    setWorkplaceToUser = async (workplaceId: number, userId: number): Promise<InsertResult> => await this.userWorkplace.insert().into(UserWorkplacesEntity).values({ workplaceId, userId }).execute()
    workplaceByUserId = async (_userId: number): Promise<{ id: number, workplace: WorkplaceEntity }[]> => (await this.userWorkplace.innerJoinAndSelect('r.workplace', 'workplace').where("r.userId = :_userId", { _userId }).getMany()).map(({id, userId, workplaceId, workplace}) => ({ id, workplace }))
    deleteWorkplace = async (id: number): Promise<DeleteResult> => await this.workplaceRepo.delete().where({ id }).execute()
    DeleteUserWorkplace = async (id: number): Promise<DeleteResult> => await this.userWorkplace.delete().where({ id }).execute()
    allUserWorkplaces = async (): Promise<UserWorkplacesEntity[]> => await this.userWorkplace.getMany()

}
