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
exports.RecordEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let RecordEntity = exports.RecordEntity = class RecordEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RecordEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'type' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RecordEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: 'date', default: () => "CURRENT_TIMESTAMP", nullable: false }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], RecordEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'userId' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RecordEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'workedHours' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RecordEntity.prototype, "workedHours", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'workplaceId' }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RecordEntity.prototype, "workplaceId", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { name: 'isSameLocation' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], RecordEntity.prototype, "isSameLocation", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'note' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RecordEntity.prototype, "note", void 0);
exports.RecordEntity = RecordEntity = __decorate([
    (0, typeorm_1.Entity)('record')
], RecordEntity);
//# sourceMappingURL=record.entity.js.map