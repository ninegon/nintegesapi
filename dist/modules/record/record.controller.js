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
exports.RecordController = void 0;
const common_1 = require("@nestjs/common");
const record_service_1 = require("./record.service");
const swagger_1 = require("@nestjs/swagger");
let RecordController = exports.RecordController = class RecordController {
    constructor(recordService) {
        this.recordService = recordService;
    }
    async allRecords() {
        return await this.recordService.allRecords();
    }
    async insertRecord(type, userId, workplaceId, isSameLocation, note) {
        return await this.recordService.insertRecord(type, userId, workplaceId, isSameLocation, note);
    }
    async deleteRecord(id) {
        return await this.recordService.deleteRecord(id);
    }
};
__decorate([
    (0, common_1.Post)('AllRecords'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "allRecords", null);
__decorate([
    (0, common_1.Post)('InsertRecord'),
    __param(0, (0, common_1.Body)('type')),
    __param(1, (0, common_1.Body)('userId')),
    __param(2, (0, common_1.Body)('workplaceId')),
    __param(3, (0, common_1.Body)('isSameLocation')),
    __param(4, (0, common_1.Body)('note')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Boolean, String]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "insertRecord", null);
__decorate([
    (0, common_1.Post)('DeleteRecord/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RecordController.prototype, "deleteRecord", null);
exports.RecordController = RecordController = __decorate([
    (0, common_1.Controller)('record'),
    (0, swagger_1.ApiTags)('record'),
    __metadata("design:paramtypes", [record_service_1.RecordService])
], RecordController);
//# sourceMappingURL=record.controller.js.map