"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
const date_fns_1 = require("date-fns");
const moment_1 = require("moment");
const string_1 = require("../misc/string");
class DateUtils {
    static addDays(date, days = 1) {
        const dateReturn = new Date(date);
        const desiredDay = dateReturn.getUTCDate() + days;
        dateReturn.setUTCDate(desiredDay);
        return dateReturn;
    }
    static addMinutes(date, minutes = 1) {
        const dateReturn = new Date(date);
        const desiredMinutes = dateReturn.getUTCMinutes() + minutes;
        dateReturn.setUTCMinutes(desiredMinutes);
        return dateReturn;
    }
    static addMonths(date, months = 1) {
        const dateReturn = new Date(date);
        const desiredMonth = dateReturn.getUTCMonth() + months;
        dateReturn.setUTCMonth(desiredMonth);
        return dateReturn;
    }
    static daysAfter(days = 1) {
        return DateUtils.resetTo(DateUtils.addDays(DateUtils.nowUtc(), days), 'days');
    }
    static daysAgo(days = 1) {
        return DateUtils.resetTo(DateUtils.addDays(DateUtils.nowUtc(), -days), 'days');
    }
    static format(date, format, locale) {
        if (!date)
            return '';
        let matches;
        if (matches = /^yyyy\-MM\-dd (\d{2}:\d{2}:\d{2})$/i.exec(format)) {
            return DateUtils.utcToTimestamp(date).split(' ')[0] + ' ' + matches[1];
        }
        else if (/^yyyy\-MM\-dd\s?HH:mm:ss$/i.test(format)) {
            return DateUtils.utcToTimestamp(date);
        }
        else if (/^yyyy\-MM\-dd$/i.test(format)) {
            return DateUtils.utcToTimestamp(date).split(' ')[0];
        }
        if (locale) {
            return (0, date_fns_1.format)(date, format, locale);
        }
        return (0, date_fns_1.format)(date, format);
    }
    static getDateRange(fromP, toP, options) {
        if (!DateUtils.isValid(fromP) || !DateUtils.isValid(toP))
            throw new Error('$date.getDateRange: Invalid Date');
        let from = new Date(fromP), to = new Date(toP);
        const today = DateUtils.nowUtc();
        const maximumDate = DateUtils.getMaximumDate();
        if ((options === null || options === void 0 ? void 0 : options.limitFrom) && DateUtils.isBefore(from, today)) {
            from = today;
        }
        if ((options === null || options === void 0 ? void 0 : options.limitTo) && DateUtils.isAfter(to, maximumDate)) {
            to = maximumDate;
        }
        const inclusivity = (options === null || options === void 0 ? void 0 : options.inclusivity) || '[)';
        if (inclusivity[0] === '(') {
            from = DateUtils.addDays(from, 1);
        }
        if (inclusivity[1] === ')') {
            to = DateUtils.addDays(to, -1);
        }
        const dateArray = [];
        while (from <= to) {
            dateArray.push(new Date(from));
            from = DateUtils.addDays(from, 1);
        }
        return dateArray;
    }
    static getLocalTime(value) {
        return value.getFullYear() + '-' + (0, string_1.addCeros)(value.getMonth() + 1) + '-' + (0, string_1.addCeros)(value.getDate()) + ' ' + (0, string_1.addCeros)(value.getHours()) + ':' + (0, string_1.addCeros)(value.getMinutes()) + ':' + (0, string_1.addCeros)(value.getSeconds());
    }
    static getMaximumDate() {
        return DateUtils.addMonths(DateUtils.nowUtc(), Number(process.env.MONTHS_FORWARD) || 24);
    }
    static getWeekDay(date) {
        return DateUtils.format(date, 'iiiiii');
    }
    static keyable(date, hours = false) {
        if (hours) {
            return date.toISOString();
        }
        return DateUtils.format(date, 'yyyy-MM-dd');
    }
    static isBetween(date, dateLeft, dateRight, duration = 'hours', inclusivity = '()') {
        if (!['days', 'hours'].includes(duration)) {
            throw new Error('$date.isBetween: Unsuported duration, must be one of [days, hours]');
        }
        if (!['()', '[)', '(]', '[]'].includes(inclusivity)) {
            throw new Error('$date.isBetween: Unsuported inclusivity, must be one of [(), [), (], []]');
        }
        date = DateUtils.resetTo(date, duration);
        dateLeft = DateUtils.resetTo(dateLeft, duration);
        dateRight = DateUtils.resetTo(dateRight, duration);
        const [leftInclusivity, rightInclusivity] = inclusivity;
        const inLeft = leftInclusivity === '[' ? DateUtils.isSameOrAfter(date, dateLeft, duration) : DateUtils.isAfter(date, dateLeft);
        const inRight = rightInclusivity === ']' ? DateUtils.isSameOrBefore(date, dateRight, duration) : DateUtils.isBefore(date, dateRight);
        return inLeft && inRight;
    }
    static isSameOrAfter(dateLeft, dateRight, duration) {
        if (!duration) {
            return DateUtils.isEqual(dateLeft, dateRight) || (0, date_fns_1.isAfter)(dateLeft, dateRight);
        }
        if (!['years', 'days', 'hours'].includes(duration)) {
            throw new Error('$date.isSameOrAfter: Unsuported duration, must be one of [years, days, hours]');
        }
        if (duration === 'days') {
            return DateUtils.differenceInDays(dateLeft, dateRight) >= 0;
        }
        if (duration === 'hours') {
            return DateUtils.differenceInHours(dateLeft, dateRight) >= 0;
        }
        return DateUtils.differenceInYears(dateLeft, dateRight) >= 0;
    }
    static isSameOrBefore(dateLeft, dateRight, duration) {
        if (!duration) {
            return DateUtils.isEqual(dateLeft, dateRight) || (0, date_fns_1.isBefore)(dateLeft, dateRight);
        }
        if (!['years', 'days', 'hours'].includes(duration)) {
            throw new Error('$date.isSameOrBefore: Unsuported duration, must be one of [years, days, hours]');
        }
        if (duration === 'days') {
            return DateUtils.differenceInDays(dateLeft, dateRight) <= 0;
        }
        if (duration === 'hours') {
            return DateUtils.differenceInHours(dateLeft, dateRight) <= 0;
        }
        return DateUtils.differenceInYears(dateLeft, dateRight) <= 0;
    }
    static nowUtc() {
        const fecha = new Date();
        return new Date(DateUtils.getLocalTime(fecha).replace(' ', 'T') + 'Z');
    }
    static todayHourUtc(hour = 12) {
        return new Date(DateUtils.keyable(DateUtils.nowUtc()) + 'T' + hour.toString() + ':00:00Z');
    }
    static resetTo(date, duration) {
        if (!['days', 'hours', 'minutes', 'seconds'].includes(duration)) {
            throw new Error('resetTo: Unsuported duration, must be one of [days, hours, minutes, seconds]');
        }
        date = (0, date_fns_1.set)(date, { milliseconds: 0 });
        if (duration === 'seconds')
            return date;
        date = (0, date_fns_1.set)(date, { seconds: 0 });
        if (duration === 'minutes')
            return date;
        date = (0, date_fns_1.set)(date, { minutes: 0 });
        if (duration === 'hours')
            return date;
        date.setUTCHours(0);
        return date;
    }
    static resetToUTC(date, format = 'yyyy-MM-dd') {
        if (!date)
            return null;
        const fecha = DateUtils.format(date, format);
        return new Date(/yyyy\-MM\-dd$/.test(format) ? fecha : fecha.replace(' ', 'T') + 'Z');
    }
    static timestampToUtc(string) {
        return new Date(string.replace(' ', 'T') + 'Z');
    }
    static today() {
        return DateUtils.resetTo(DateUtils.nowUtc(), 'days');
    }
    static tomorrow() {
        return DateUtils.resetTo(DateUtils.addDays(new Date(), 1), 'days');
    }
    static utcToTimestamp(value) {
        return value.getUTCFullYear() + '-' + (0, string_1.addCeros)(value.getUTCMonth() + 1) + '-' + (0, string_1.addCeros)(value.getUTCDate()) +
            ' ' + (0, string_1.addCeros)(value.getUTCHours()) + ':' + (0, string_1.addCeros)(value.getMinutes()) + ':' + (0, string_1.addCeros)(value.getSeconds());
    }
    static validateFromAndTo(from, to, rearrange = false) {
        if (!(0, date_fns_1.isAfter)(from, to)) {
            return { from, to };
        }
        if (!rearrange) {
            throw new Error('validateFromAndTo: "from" date cannot be after "to" date. Consider using rearrange option.');
        }
        return {
            from: to,
            to: from,
        };
    }
    static yesterday() {
        return DateUtils.resetTo(DateUtils.addDays(new Date(), -1), 'days');
    }
}
exports.DateUtils = DateUtils;
DateUtils.addHours = date_fns_1.addHours;
DateUtils.addDaysLocal = date_fns_1.addDays;
DateUtils.addYears = date_fns_1.addYears;
DateUtils.differenceInHours = date_fns_1.differenceInHours;
DateUtils.differenceInDays = date_fns_1.differenceInDays;
DateUtils.differenceInSeconds = date_fns_1.differenceInSeconds;
DateUtils.differenceInYears = date_fns_1.differenceInYears;
DateUtils.endOfMonth = date_fns_1.endOfMonth;
DateUtils.formatLocal = date_fns_1.format;
DateUtils.isAfter = date_fns_1.isAfter;
DateUtils.isBefore = date_fns_1.isBefore;
DateUtils.isEqual = date_fns_1.isEqual;
DateUtils.isSameDay = date_fns_1.isSameDay;
DateUtils.isValid = date_fns_1.isValid;
DateUtils.parse = date_fns_1.parse;
DateUtils.startOfMonth = date_fns_1.startOfMonth;
DateUtils.dateValidator = (date, spaceSubtypeHour = 12) => {
    if (/^\d{4}-\d{2}-\d{2}/.test(date) && (0, moment_1.default)(date, 'YYYY-MM-DD').isValid())
        return (0, moment_1.default)(date, 'YYYY-MM-DD HH:00:00');
    return (0, moment_1.default)(date, 'YYYY-MM-DD').hours(spaceSubtypeHour);
};
//# sourceMappingURL=dateUtils.js.map