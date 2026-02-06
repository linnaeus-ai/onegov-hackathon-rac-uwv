"use strict";
/**
 * Utilities for timeline operations including date alignment and knip merging.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignToDay = alignToDay;
exports.alignToMonth = alignToMonth;
exports.alignToYear = alignToYear;
exports.nextDay = nextDay;
exports.nextMonth = nextMonth;
exports.nextYear = nextYear;
exports.alignDate = alignDate;
exports.nextPeriod = nextPeriod;
exports.getKnipsFromTimeline = getKnipsFromTimeline;
exports.mergeKnips = mergeKnips;
exports.getEvaluationPeriods = getEvaluationPeriods;
exports.calculateProportionalValue = calculateProportionalValue;
exports.removeRedundantKnips = removeRedundantKnips;
const decimal_js_1 = __importDefault(require("decimal.js"));
/**
 * Align a date to the start of the day (00:00:00).
 */
function alignToDay(dt) {
    return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
}
/**
 * Align a date to the start of the month (first day at 00:00:00).
 */
function alignToMonth(dt) {
    return new Date(dt.getFullYear(), dt.getMonth(), 1);
}
/**
 * Align a date to the start of the year (January 1st at 00:00:00).
 */
function alignToYear(dt) {
    return new Date(dt.getFullYear(), 0, 1);
}
/**
 * Get the next day at 00:00:00.
 */
function nextDay(dt) {
    const next = new Date(dt);
    next.setDate(next.getDate() + 1);
    return alignToDay(next);
}
/**
 * Get the first day of the next month at 00:00:00.
 */
function nextMonth(dt) {
    const next = new Date(dt);
    next.setMonth(next.getMonth() + 1);
    return alignToMonth(next);
}
/**
 * Get January 1st of the next year at 00:00:00.
 */
function nextYear(dt) {
    const next = new Date(dt);
    next.setFullYear(next.getFullYear() + 1);
    return alignToYear(next);
}
/**
 * Align a date to the start of its period based on granularity.
 */
function alignDate(dt, granularity) {
    switch (granularity) {
        case 'dag':
            return alignToDay(dt);
        case 'maand':
            return alignToMonth(dt);
        case 'jaar':
            return alignToYear(dt);
        default:
            throw new Error(`Unknown granularity: ${granularity}`);
    }
}
/**
 * Get the start of the next period based on granularity.
 */
function nextPeriod(dt, granularity) {
    switch (granularity) {
        case 'dag':
            return nextDay(dt);
        case 'maand':
            return nextMonth(dt);
        case 'jaar':
            return nextYear(dt);
        default:
            throw new Error(`Unknown granularity: ${granularity}`);
    }
}
/**
 * Extract all knips (change points) from a timeline.
 */
function getKnipsFromTimeline(timeline) {
    const knips = [];
    for (const period of timeline.periods) {
        knips.push(period.startDate);
        knips.push(period.endDate);
    }
    return knips;
}
/**
 * Merge knips from multiple timelines, removing duplicates and sorting.
 */
function mergeKnips(...timelines) {
    const knipsSet = new Set();
    for (const timeline of timelines) {
        for (const period of timeline.periods) {
            knipsSet.add(period.startDate.getTime());
            knipsSet.add(period.endDate.getTime());
        }
    }
    return Array.from(knipsSet)
        .sort((a, b) => a - b)
        .map(time => new Date(time));
}
/**
 * Get evaluation periods between consecutive knips.
 */
function getEvaluationPeriods(knips) {
    const periods = [];
    for (let i = 0; i < knips.length - 1; i++) {
        periods.push({
            start: knips[i],
            end: knips[i + 1]
        });
    }
    return periods;
}
/**
 * Check if a date is a leap year.
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
/**
 * Get the number of days in a month.
 */
function getDaysInMonth(year, month) {
    // month is 0-indexed in JavaScript Date
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 && isLeapYear(year)) {
        return 29;
    }
    return daysInMonth[month];
}
/**
 * Calculate time-proportional value for a partial period.
 * Used for tijdsevenredig deel calculations.
 */
function calculateProportionalValue(baseValue, startDate, endDate, periodType) {
    // Only works with numeric values
    if (baseValue.type !== 'number') {
        throw new Error('Proportional calculation requires numeric value');
    }
    // Calculate the number of days in the actual period
    const periodDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    let totalDays;
    if (periodType === 'maand') {
        // For monthly proportional, we need to know which month we're in
        // Use the start date's month for calculation
        const year = startDate.getFullYear();
        const month = startDate.getMonth();
        totalDays = getDaysInMonth(year, month);
    }
    else if (periodType === 'jaar') {
        // For yearly proportional, check if it's a leap year
        const year = startDate.getFullYear();
        totalDays = isLeapYear(year) ? 366 : 365;
    }
    else {
        throw new Error(`Unknown period type for proportional calculation: ${periodType}`);
    }
    // Calculate the proportion
    const proportion = new decimal_js_1.default(periodDays).div(new decimal_js_1.default(totalDays));
    // Apply proportion to the base value
    const baseDecimal = new decimal_js_1.default(baseValue.value);
    const resultValue = baseDecimal.mul(proportion);
    return {
        type: 'number',
        value: resultValue.toNumber(),
        unit: baseValue.unit
    };
}
/**
 * Remove redundant knips that don't actually represent value changes.
 */
function removeRedundantKnips(periods, granularity) {
    if (periods.length <= 1) {
        return periods;
    }
    const result = [periods[0]];
    for (let i = 1; i < periods.length; i++) {
        const current = periods[i];
        const last = result[result.length - 1];
        // Check if values are equal and periods are adjacent
        if (areValuesEqual(last.value, current.value) &&
            last.endDate.getTime() === current.startDate.getTime()) {
            // Merge periods by extending the last one
            last.endDate = current.endDate;
        }
        else {
            result.push(current);
        }
    }
    return result;
}
/**
 * Check if two values are equal.
 */
function areValuesEqual(v1, v2) {
    // Handle null/undefined cases
    if ((v1 === null || v1 === undefined) && (v2 === null || v2 === undefined)) {
        return true;
    }
    if (v1 === null || v1 === undefined || v2 === null || v2 === undefined) {
        return false;
    }
    if (v1.type !== v2.type) {
        return false;
    }
    if (v1.type === 'number' && v2.type === 'number') {
        // Use Decimal for precise comparison
        const d1 = new decimal_js_1.default(v1.value);
        const d2 = new decimal_js_1.default(v2.value);
        return d1.equals(d2) && v1.unit?.name === v2.unit?.name;
    }
    // For other types, use simple equality
    return v1.value === v2.value;
}
//# sourceMappingURL=timeline-utils.js.map