"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
class BaseController {
    constructor() {
        this.checkEmptyValue = (str) => !str || !`${str}`.trim().length;
        this.errorStatusDefault = common_1.HttpStatus.CONFLICT;
        this.errorMessageDefault = 'Unexpected internal error';
        this.error = (error, status) => {
            let mensaje = undefined;
            if (/^String$/.test(error.constructor.name)) {
                mensaje = error;
            }
            else if (/^(TypeError|QueryFailedError)$/.test(error.constructor.name)) {
                mensaje = error.customMessage;
            }
            else if (/^HttpException$/.test(error.constructor.name)) {
                mensaje = error['response'];
                status = error['status'];
            }
            throw new common_1.HttpException(mensaje ? mensaje : this.errorMessageDefault, status || this.errorStatusDefault);
        };
        this.returnData = (data, request, status = 200) => {
            if (!data)
                this.error('No data to return');
            if (Array.isArray(data) && !data[0])
                this.error('No data to return');
            express_1.response.status(status);
            return data;
        };
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map