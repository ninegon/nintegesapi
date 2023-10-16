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
exports.WorkplaceCalendarEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const workplace_entity_1 = require("./workplace.entity");
let WorkplaceCalendarEntity = exports.WorkplaceCalendarEntity = class WorkplaceCalendarEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], WorkplaceCalendarEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'workplaceId', nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], WorkplaceCalendarEntity.prototype, "workplaceId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'hours', nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], WorkplaceCalendarEntity.prototype, "hours", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'date' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], WorkplaceCalendarEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workplace_entity_1.WorkplaceEntity, (workplace) => workplace.workplaceUsers),
    (0, typeorm_1.JoinColumn)({ name: 'workplaceId' }),
    __metadata("design:type", workplace_entity_1.WorkplaceEntity)
], WorkplaceCalendarEntity.prototype, "workplace", void 0);
exports.WorkplaceCalendarEntity = WorkplaceCalendarEntity = __decorate([
    (0, typeorm_1.Entity)('workplaceCalendar')
], WorkplaceCalendarEntity);
//# sourceMappingURL=workplaceCalendar.entity.js.map