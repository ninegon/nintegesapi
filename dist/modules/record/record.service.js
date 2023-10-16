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
exports.RecordService = void 0;
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../../core/BaseService");
const record_entity_1 = require("../../entities/record.entity");
const typeorm_1 = require("typeorm");
const dateUtils_1 = require("../../utils/dates/dateUtils");
const workplaceCalendar_entity_1 = require("../../entities/workplaceCalendar.entity");
let RecordService = exports.RecordService = class RecordService extends BaseService_1.BaseService {
    constructor(dataSource) {
        super(dataSource);
        this.allRecords = async () => {
            const { rawData, askData } = (await this.recordRepo.orderBy("id", "DESC").getMany()).reduce((acc, key) => {
                acc.rawData.push(key);
                if (key.type === 4) {
                    acc.askData.push({ workplaceId: key.workplaceId, date: new Date(key.date).toLocaleDateString('zh-Hans-CN') });
                }
                return acc;
            }, { rawData: [], askData: [] });
            const calendarDates = await this.workplaceCalendarRepo.where(askData).getMany();
            return rawData.reduce((acc, key) => {
                if (key.type === 4) {
                    const calendarDate = calendarDates.find(x => x.workplaceId === key.workplaceId && new Date(x.date).toLocaleDateString('en-GB') === new Date(key.date).toLocaleDateString('en-GB'));
                    if (calendarDate) {
                        key.hours = {
                            worked: key.workedHours,
                            needed: calendarDate.hours,
                            difference: calendarDate.hours - key.workedHours
                        };
                    }
                    return [...acc, key];
                }
                return acc;
            }, []);
        };
        this.insertRecord = async (type, userId, workplaceId, isSameLocation, note, workedHours) => await this.recordRepo.insert().into(record_entity_1.RecordEntity).values({ type, userId, date: dateUtils_1.DateUtils.nowUtc(), workplaceId, isSameLocation, note, workedHours }).execute();
        this.deleteRecord = async (id) => await this.recordRepo.delete().where({ id }).execute();
        this.recordRepo = this.makeQB(record_entity_1.RecordEntity, 'r');
        this.workplaceCalendarRepo = this.makeQB(workplaceCalendar_entity_1.WorkplaceCalendarEntity, 'r');
    }
};
exports.RecordService = RecordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATASOURCE')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], RecordService);
//# sourceMappingURL=record.service.js.map