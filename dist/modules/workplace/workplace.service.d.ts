import { BaseService } from 'src/core/BaseService';
import { UserWorkplacesEntity } from 'src/entities/userworkplaces.entity';
import { WorkplaceEntity } from 'src/entities/workplace.entity';
import { DataSource, DeleteResult, InsertResult, SelectQueryBuilder, UpdateResult } from 'typeorm';
export declare class WorkplaceService extends BaseService {
    workplaceRepo: SelectQueryBuilder<WorkplaceEntity>;
    userWorkplace: SelectQueryBuilder<UserWorkplacesEntity>;
    constructor(dataSource: DataSource);
    allWorkplaces: () => Promise<WorkplaceEntity[]>;
    insertWorkplace: (code: string, name: string, address: string, latitude: string, longitude: string) => Promise<InsertResult>;
    updateWorkplace: (id: number, code: string, name: string, address: string, latitude: string, longitude: string) => Promise<UpdateResult>;
    setWorkplaceToUser: (workplaceId: number, userId: number) => Promise<InsertResult>;
    workplaceByUserId: (_userId: number) => Promise<{
        id: number;
        workplace: WorkplaceEntity;
    }[]>;
    deleteWorkplace: (id: number) => Promise<DeleteResult>;
    DeleteUserWorkplace: (id: number) => Promise<DeleteResult>;
    allUserWorkplaces: () => Promise<UserWorkplacesEntity[]>;
}
