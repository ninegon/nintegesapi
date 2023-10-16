import { WorkplaceCalendarService } from './workplaceCalendar.service';
export declare class WorkplaceCalendarController {
    private readonly workplaceCalendarService;
    constructor(workplaceCalendarService: WorkplaceCalendarService);
    allWorkplaceCalendars(): Promise<import("../../entities/workplaceCalendar.entity").WorkplaceCalendarEntity[]>;
    insertWorkplaceCalendar(workplaceId: number, hours: number, date: Date): Promise<import("typeorm").InsertResult>;
    deleteWorkplaceCalendar(id: number): Promise<import("typeorm").DeleteResult>;
}
