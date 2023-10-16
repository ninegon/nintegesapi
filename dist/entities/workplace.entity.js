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
exports.WorkplaceEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const userworkplaces_entity_1 = require("./userworkplaces.entity");
const workplaceCalendar_entity_1 = require("./workplaceCalendar.entity");
let WorkplaceEntity = exports.WorkplaceEntity = class WorkplaceEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], WorkplaceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkplaceEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'latitude', length: 255 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkplaceEntity.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'longitude', length: 255 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkplaceEntity.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', length: 45 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkplaceEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'address', length: 45 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkplaceEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userworkplaces_entity_1.UserWorkplacesEntity, (settings) => settings.workplace),
    __metadata("design:type", userworkplaces_entity_1.UserWorkplacesEntity)
], WorkplaceEntity.prototype, "workplaceUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workplaceCalendar_entity_1.WorkplaceCalendarEntity, (settings) => settings.workplace),
    __metadata("design:type", workplaceCalendar_entity_1.WorkplaceCalendarEntity)
], WorkplaceEntity.prototype, "workplaceCalendars", void 0);
exports.WorkplaceEntity = WorkplaceEntity = __decorate([
    (0, typeorm_1.Entity)('workplace')
], WorkplaceEntity);
//# sourceMappingURL=workplace.entity.js.map