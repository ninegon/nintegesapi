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
exports.WorkplaceCalendarService = void 0;
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../../core/BaseService");
const workplaceCalendar_entity_1 = require("../../entities/workplaceCalendar.entity");
const typeorm_1 = require("typeorm");
let WorkplaceCalendarService = exports.WorkplaceCalendarService = class WorkplaceCalendarService extends BaseService_1.BaseService {
    constructor(dataSource) {
        super(dataSource);
        this.allWorkplaceCalendars = async () => await this.workplaceCalendarRepo.leftJoinAndSelect('r.workplace', 'workplace').getMany();
        this.insertWorkplaceCalendar = async (workplaceId, hours, date) => await this.workplaceCalendarRepo.insert().into(workplaceCalendar_entity_1.WorkplaceCalendarEntity).values({ workplaceId, hours, date }).execute();
        this.deleteWorkplaceCalendar = async (id) => await this.workplaceCalendarRepo.delete().where({ id }).execute();
        this.workplaceCalendarRepo = this.makeQB(workplaceCalendar_entity_1.WorkplaceCalendarEntity, 'r');
        this.userWorkplaceCalendar = this.makeQB(workplaceCalendar_entity_1.WorkplaceCalendarEntity, 'r');
    }
};
exports.WorkplaceCalendarService = WorkplaceCalendarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATASOURCE')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], WorkplaceCalendarService);
//# sourceMappingURL=workplaceCalendar.service.js.map