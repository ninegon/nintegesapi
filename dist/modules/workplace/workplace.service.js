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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkplaceService = void 0;
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../../core/BaseService");
const userworkplaces_entity_1 = require("../../entities/userworkplaces.entity");
const workplace_entity_1 = require("../../entities/workplace.entity");
const typeorm_1 = require("typeorm");
let WorkplaceService = exports.WorkplaceService = class WorkplaceService extends BaseService_1.BaseService {
    constructor(dataSource) {
        super(dataSource);
        this.allWorkplaces = async () => await this.workplaceRepo.getMany();
        this.insertWorkplace = async (code, name, address, latitude, longitude) => await this.workplaceRepo.insert().into(workplace_entity_1.WorkplaceEntity).values({ code, name, address, latitude, longitude }).execute();
        this.updateWorkplace = async (id, code, name, address, latitude, longitude) => await this.workplaceRepo.update(workplace_entity_1.WorkplaceEntity).set({ code, name, address, latitude, longitude }).where({ id }).execute();
        this.setWorkplaceToUser = async (workplaceId, userId) => await this.userWorkplace.insert().into(userworkplaces_entity_1.UserWorkplacesEntity).values({ workplaceId, userId }).execute();
        this.workplaceByUserId = async (_userId) => (await this.userWorkplace.innerJoinAndSelect('r.workplace', 'workplace').where("r.userId = :_userId", { _userId }).getMany()).map(({ id, userId, workplaceId, workplace }) => ({ id, workplace }));
        this.deleteWorkplace = async (id) => await this.workplaceRepo.delete().where({ id }).execute();
        this.DeleteUserWorkplace = async (id) => await this.userWorkplace.delete().where({ id }).execute();
        this.allUserWorkplaces = async () => await this.userWorkplace.getMany();
        this.workplaceRepo = this.makeQB(workplace_entity_1.WorkplaceEntity, 'r');
        this.userWorkplace = this.makeQB(userworkplaces_entity_1.UserWorkplacesEntity, 'r');
    }
};
exports.WorkplaceService = WorkplaceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATASOURCE')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], WorkplaceService);
//# sourceMappingURL=workplace.service.js.map