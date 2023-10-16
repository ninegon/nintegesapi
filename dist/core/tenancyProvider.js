"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const tenant_config_1 = require("./tenant.config");
const connectionFactory = {
    provide: 'DATASOURCE',
    scope: common_1.Scope.REQUEST,
    useFactory: async (context) => {
        var _a, _b;
        const sandbox = (_b = (_a = context === null || context === void 0 ? void 0 : context.res) === null || _a === void 0 ? void 0 : _a.locals) === null || _b === void 0 ? void 0 : _b.sandbox;
        const connectionName = (sandbox ? "sandbox" : "main");
        const connectionManager = (0, typeorm_1.getConnectionManager)();
        if (connectionManager.has(connectionName)) {
            const connection = connectionManager.get(connectionName);
            return Promise.resolve(connection.isConnected ? connection : connection.connect());
        }
        return (0, typeorm_1.createConnection)((0, tenant_config_1.default)(process, connectionName, sandbox ? process.env.DB_DATABASE_SANDBOX : process.env.DB_DATABASE));
    },
    inject: [core_1.REQUEST, config_1.ConfigService]
};
let TenancyProvider = exports.TenancyProvider = class TenancyProvider {
};
exports.TenancyProvider = TenancyProvider = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [connectionFactory],
        exports: ['DATASOURCE'],
    })
], TenancyProvider);
//# sourceMappingURL=tenancyProvider.js.map