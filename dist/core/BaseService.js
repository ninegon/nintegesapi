"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BaseService = exports.BaseService = class BaseService {
    constructor(connection) {
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
        if (connection)
            this.connection = connection;
    }
    makeQB(entity, alias = 'alias', transacting = false) {
        if (transacting) {
            if (!this.queryRunner) {
                this.queryRunner = this.connection.createQueryRunner();
            }
            return this.connection.createQueryBuilder(entity, alias, this.queryRunner);
        }
        return this.connection.createQueryBuilder(entity, alias);
    }
    async startTrx() {
        if (this.queryRunner) {
            throw new Error('Already running transactions!');
        }
        this.queryRunner = this.connection.createQueryRunner();
        await this.queryRunner.connect();
        await this.queryRunner.startTransaction();
    }
    async commitTrx() {
        if (!this.queryRunner) {
            throw new Error('No running transactions!');
        }
        if (!this.queryRunner.isTransactionActive) {
            this.queryRunner = undefined;
            throw new Error('No running transactions!');
        }
        this.queryRunner.commitTransaction();
    }
    async rollbackTrx() {
        if (!this.queryRunner) {
            throw new Error('No running transactions!');
        }
        if (!this.queryRunner.isTransactionActive) {
            this.queryRunner = undefined;
            throw new Error('No running transactions!');
        }
        this.queryRunner.rollbackTransaction();
    }
    isRunningTrx() {
        return this.queryRunner ? this.queryRunner.isTransactionActive : false;
    }
    async releaseTrx() {
        if (!this.queryRunner) {
            throw new Error('No running transactions!');
        }
        if (!this.queryRunner.isTransactionActive) {
            this.queryRunner = undefined;
            throw new Error('No running transactions!');
        }
        this.queryRunner.release();
        this.queryRunner = undefined;
    }
};
exports.BaseService = BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BaseService);
//# sourceMappingURL=BaseService.js.map