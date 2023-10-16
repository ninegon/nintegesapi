import { HttpException, HttpStatus } from '@nestjs/common';
import { DataSource, EntityTarget } from 'typeorm';
export declare class BaseService {
    private connection;
    private queryRunner?;
    constructor(connection?: DataSource);
    private errorStatusDefault;
    private errorMessageDefault;
    makeQB<T = any>(entity: EntityTarget<any>, alias?: string, transacting?: boolean): import("typeorm").SelectQueryBuilder<T>;
    startTrx(): Promise<void>;
    commitTrx(): Promise<void>;
    rollbackTrx(): Promise<void>;
    isRunningTrx(): boolean;
    releaseTrx(): Promise<void>;
    protected error: (error: string | HttpException | TypeError, status?: HttpStatus) => never;
}
