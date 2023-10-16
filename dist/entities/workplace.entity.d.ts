import { UserWorkplacesEntity } from './userworkplaces.entity';
import { WorkplaceCalendarEntity } from './workplaceCalendar.entity';
export declare class WorkplaceEntity {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    code: string;
    address: string;
    workplaceUsers: UserWorkplacesEntity;
    workplaceCalendars: WorkplaceCalendarEntity;
}
