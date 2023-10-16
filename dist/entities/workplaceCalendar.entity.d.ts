import { WorkplaceEntity } from './workplace.entity';
export declare class WorkplaceCalendarEntity {
    id: number;
    workplaceId: number;
    hours: number;
    date: Date;
    workplace: WorkplaceEntity;
}
