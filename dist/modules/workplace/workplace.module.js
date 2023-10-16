"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkplaceModule = void 0;
const common_1 = require("@nestjs/common");
const workplace_service_1 = require("./workplace.service");
const workplace_controller_1 = require("./workplace.controller");
let WorkplaceModule = exports.WorkplaceModule = class WorkplaceModule {
};
exports.WorkplaceModule = WorkplaceModule = __decorate([
    (0, common_1.Module)({
        controllers: [workplace_controller_1.WorkplaceController],
        providers: [workplace_service_1.WorkplaceService],
        exports: [workplace_service_1.WorkplaceService]
    })
], WorkplaceModule);
//# sourceMappingURL=workplace.module.js.map