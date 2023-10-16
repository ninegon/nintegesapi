"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const entities = [(0, path_1.join)(__dirname, '../entities/*')];
exports.default = (process, connectionName, databaseName) => ({
    type: 'mysql',
    name: connectionName,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: databaseName,
    entities,
    timezone: 'Z'
});
//# sourceMappingURL=tenant.config.js.map