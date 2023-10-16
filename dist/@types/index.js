"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncrementType = exports.CacheTTLSeconds = void 0;
var CacheTTLSeconds;
(function (CacheTTLSeconds) {
    CacheTTLSeconds[CacheTTLSeconds["ONE_MINUTE"] = 60] = "ONE_MINUTE";
    CacheTTLSeconds[CacheTTLSeconds["ONE_HOUR"] = 3600] = "ONE_HOUR";
    CacheTTLSeconds[CacheTTLSeconds["ONE_DAY"] = 86400] = "ONE_DAY";
    CacheTTLSeconds[CacheTTLSeconds["ONE_WEEK"] = 604800] = "ONE_WEEK";
})(CacheTTLSeconds || (exports.CacheTTLSeconds = CacheTTLSeconds = {}));
var IncrementType;
(function (IncrementType) {
    IncrementType["PCT"] = "PCT";
    IncrementType["QTY"] = "QTY";
})(IncrementType || (exports.IncrementType = IncrementType = {}));
//# sourceMappingURL=index.js.map