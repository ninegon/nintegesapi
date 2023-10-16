import { HttpException, HttpStatus } from '@nestjs/common';
export declare class BaseController {
    protected checkEmptyValue: (str: any) => boolean;
    private errorStatusDefault;
    private errorMessageDefault;
    protected error: (error: string | HttpException | TypeError, status?: HttpStatus) => never;
    protected returnData: (data: any, request?: any, status?: number) => any;
}
