"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToIp = exports.ipToNumber = exports.cleanString = exports.isValidString = exports.isValidEmail = exports.isValidDate = exports.regDate = exports.splitUrlParams = exports.camelize = exports.addCeros = void 0;
const addCeros = (num, length = 2) => {
    num = num.toString();
    while (num.length < length) {
        num = 0 + num;
    }
    return num;
};
exports.addCeros = addCeros;
const camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
        if (+match === 0)
            return '';
        return +index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};
exports.camelize = camelize;
const splitUrlParams = (urlParams) => {
    const params = urlParams.split('&');
    const arrvars = [];
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        const vals = element.split('=');
        arrvars[vals[0]] = vals[1];
    }
    return arrvars;
};
exports.splitUrlParams = splitUrlParams;
const regDate = (date) => {
    return /\d{4}-\d{2}\-\d{2}/.test(date);
};
exports.regDate = regDate;
const isValidDate = (dates, format = 'date') => {
    for (const i in dates) {
        switch (format) {
            case 'date':
                if (!/^\d{4}-\d{2}\-\d{2}$/.test(dates[i]))
                    return false;
                break;
            case 'timestamp':
                if (!/^\d{4}-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}$/.test(dates[i]))
                    return false;
                break;
            default:
                return false;
        }
    }
    return true;
};
exports.isValidDate = isValidDate;
const isValidEmail = (value) => {
    return /^[a-z0-9_\.\-]+@[^\-](?:[\w\-]+[^\-]\.[^\-])?[\w\-]+[^\-]\.[a-z]{2,4}$/i.test(value);
};
exports.isValidEmail = isValidEmail;
const isValidString = (value, emptyAllowed = false) => {
    return emptyAllowed ? typeof value === 'string' : typeof value === 'string' && /\w+/.test(value);
};
exports.isValidString = isValidString;
const cleanString = (value) => value
    .replace(/<script[^>]*>|<\/script>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
exports.cleanString = cleanString;
const ipToNumber = (ip) => {
    return ip.split('.').reduce(function (ipInt, octet) { return (ipInt << 8) + parseInt(octet, 10); }, 0) >>> 0;
};
exports.ipToNumber = ipToNumber;
const numberToIp = (number) => {
    return ((number >>> 24) + '.' + (number >> 16 & 255) + '.' + (number >> 8 & 255) + '.' + (number & 255));
};
exports.numberToIp = numberToIp;
//# sourceMappingURL=string.js.map