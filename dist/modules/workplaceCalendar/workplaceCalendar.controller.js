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
exports.WorkplaceCalendarController = void 0;
const common_1 = require("@nestjs/common");
const workplaceCalendar_service_1 = require("./workplaceCalendar.service");
const swagger_1 = require("@nestjs/swagger");
let WorkplaceCalendarController = exports.WorkplaceCalendarController = class WorkplaceCalendarController {
    constructor(workplaceCalendarService) {
        this.workplaceCalendarService = workplaceCalendarService;
    }
    async allWorkplaceCalendars() {
        return await this.workplaceCalendarService.allWorkplaceCalendars();
    }
    async insertWorkplaceCalendar(workplaceId, hours, date) {
        return await this.workplaceCalendarService.insertWorkplaceCalendar(workplaceId, hours, date);
    }
    async deleteWorkplaceCalendar(id) {
        return await this.workplaceCalendarService.deleteWorkplaceCalendar(id);
    }
};
__decorate([
    (0, common_1.Post)('getAllWorkplaceCalendar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkplaceCalendarController.prototype, "allWorkplaceCalendars", null);
__decorate([
    (0, common_1.Post)('insertWorkplaceCalendar'),
    __param(0, (0, common_1.Body)("workplaceId")),
    __param(1, (0, common_1.Body)("hours")),
    __param(2, (0, common_1.Body)("date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Date]),
    __metadata("design:returntype", Promise)
], WorkplaceCalendarController.prototype, "insertWorkplaceCalendar", null);
__decorate([
    (0, common_1.Post)('deleteWorkplaceCalendar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkplaceCalendarController.prototype, "deleteWorkplaceCalendar", null);
exports.WorkplaceCalendarController = WorkplaceCalendarController = __decorate([
    (0, common_1.Controller)('workplaceCalendar'),
    (0, swagger_1.ApiTags)('workplaceCalendar'),
    __metadata("design:paramtypes", [workplaceCalendar_service_1.WorkplaceCalendarService])
], WorkplaceCalendarController);
//# sourceMappingURL=workplaceCalendar.controller.js.map