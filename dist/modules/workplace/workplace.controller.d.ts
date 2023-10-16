import { WorkplaceService } from './workplace.service';
export declare class WorkplaceController {
    private readonly workplaceService;
    constructor(workplaceService: WorkplaceService);
    allWorkplaces(): Promise<import("../../entities/workplace.entity").WorkplaceEntity[]>;
    workplaceByUserId(userId: number): Promise<{
        id: number;
        workplace: import("../../entities/workplace.entity").WorkplaceEntity;
    }[]>;
    insertWorkplace(code: string, name: string, address: string, latitude: string, longitude: string): Promise<import("typeorm").InsertResult>;
    updateWorkplace(id: number, code: string, name: string, address: string, latitude: string, longitude: string): Promise<import("typeorm").UpdateResult>;
    setWorkplaceToUser(workplaceId: number, userId: number): Promise<import("typeorm").InsertResult>;
    allUserWorkplaces(): Promise<import("../../entities/userworkplaces.entity").UserWorkplacesEntity[]>;
    deleteWorkplace(id: number): Promise<import("typeorm").DeleteResult>;
    DeleteUserWorkplace(id: number): Promise<import("typeorm").DeleteResult>;
}
