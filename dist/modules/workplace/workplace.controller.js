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
exports.WorkplaceController = void 0;
const common_1 = require("@nestjs/common");
const workplace_service_1 = require("./workplace.service");
const swagger_1 = require("@nestjs/swagger");
let WorkplaceController = exports.WorkplaceController = class WorkplaceController {
    constructor(workplaceService) {
        this.workplaceService = workplaceService;
    }
    async allWorkplaces() {
        return await this.workplaceService.allWorkplaces();
    }
    async workplaceByUserId(userId) {
        return await this.workplaceService.workplaceByUserId(userId);
    }
    async insertWorkplace(code, name, address, latitude, longitude) {
        return await this.workplaceService.insertWorkplace(code, name, address, latitude, longitude);
    }
    async updateWorkplace(id, code, name, address, latitude, longitude) {
        return await this.workplaceService.updateWorkplace(id, code, name, address, latitude, longitude);
    }
    async setWorkplaceToUser(workplaceId, userId) {
        return await this.workplaceService.setWorkplaceToUser(workplaceId, userId);
    }
    async allUserWorkplaces() {
        return await this.workplaceService.allUserWorkplaces();
    }
    async deleteWorkplace(id) {
        return await this.workplaceService.deleteWorkplace(id);
    }
    async DeleteUserWorkplace(id) {
        return await this.workplaceService.DeleteUserWorkplace(id);
    }
};
__decorate([
    (0, common_1.Post)('AllWorkplaces'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "allWorkplaces", null);
__decorate([
    (0, common_1.Post)('WorkplaceByUserId/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "workplaceByUserId", null);
__decorate([
    (0, common_1.Post)('InsertWorkplace'),
    __param(0, (0, common_1.Body)("code")),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("address")),
    __param(3, (0, common_1.Body)("latitude")),
    __param(4, (0, common_1.Body)("longitude")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "insertWorkplace", null);
__decorate([
    (0, common_1.Post)('UpdateWorkplace/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)("code")),
    __param(2, (0, common_1.Body)("name")),
    __param(3, (0, common_1.Body)("address")),
    __param(4, (0, common_1.Body)("latitude")),
    __param(5, (0, common_1.Body)("longitude")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "updateWorkplace", null);
__decorate([
    (0, common_1.Post)('setWorkplaceToUser'),
    __param(0, (0, common_1.Body)("workplaceId")),
    __param(1, (0, common_1.Body)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "setWorkplaceToUser", null);
__decorate([
    (0, common_1.Post)('AllUserWorkplaces'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "allUserWorkplaces", null);
__decorate([
    (0, common_1.Post)('DeleteWorkplace/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "deleteWorkplace", null);
__decorate([
    (0, common_1.Post)('DeleteUserWorkplace/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkplaceController.prototype, "DeleteUserWorkplace", null);
exports.WorkplaceController = WorkplaceController = __decorate([
    (0, common_1.Controller)('workplace'),
    (0, swagger_1.ApiTags)('workplace'),
    __metadata("design:paramtypes", [workplace_service_1.WorkplaceService])
], WorkplaceController);
//# sourceMappingURL=workplace.controller.js.map