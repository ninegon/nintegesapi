import { RecordService } from './record.service';
export declare class RecordController {
    private readonly recordService;
    constructor(recordService: RecordService);
    allRecords(): Promise<import("../../entities/record.entity").RecordEntity[]>;
    insertRecord(type: number, userId: number, workplaceId: number, isSameLocation: boolean, note: string): Promise<import("typeorm").InsertResult>;
    deleteRecord(id: number): Promise<import("typeorm").DeleteResult>;
}
