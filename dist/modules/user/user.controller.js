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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async allUsers() {
        return await this.userService.allUsers();
    }
    async userById(id) {
        return await this.userService.userById(id);
    }
    async userLogin(nif, password) {
        return await this.userService.userLogin(nif, password);
    }
    async insertUser(nif, fullName, name, token, access, password) {
        return await this.userService.insertUser(nif, fullName, name, token, access, password);
    }
    async updateUser(id, nif, fullName, name, token, access, password) {
        return await this.userService.updateUser(id, nif, fullName, name, token, access, password);
    }
    async deleteUser(id) {
        return await this.userService.deleteUser(id);
    }
};
__decorate([
    (0, common_1.Post)('AllUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "allUsers", null);
__decorate([
    (0, common_1.Post)('UserById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userById", null);
__decorate([
    (0, common_1.Post)('UserLogin'),
    __param(0, (0, common_1.Body)('nif')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userLogin", null);
__decorate([
    (0, common_1.Post)('InsertUser'),
    __param(0, (0, common_1.Body)("nif")),
    __param(1, (0, common_1.Body)("fullName")),
    __param(2, (0, common_1.Body)("name")),
    __param(3, (0, common_1.Body)("token")),
    __param(4, (0, common_1.Body)("access")),
    __param(5, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "insertUser", null);
__decorate([
    (0, common_1.Post)('UpdateUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)("nif")),
    __param(2, (0, common_1.Body)("fullName")),
    __param(3, (0, common_1.Body)("name")),
    __param(4, (0, common_1.Body)("token")),
    __param(5, (0, common_1.Body)("access")),
    __param(6, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, Number, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Post)('DeleteUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map