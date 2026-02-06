/**
 * Utilities for timeline operations including date alignment and knip merging.
 */
import { Timeline, Period } from '../ast/timelines';
import { Value } from '../interfaces';
/**
 * Align a date to the start of the day (00:00:00).
 */
export declare function alignToDay(dt: Date): Date;
/**
 * Align a date to the start of the month (first day at 00:00:00).
 */
export declare function alignToMonth(dt: Date): Date;
/**
 * Align a date to the start of the year (January 1st at 00:00:00).
 */
export declare function alignToYear(dt: Date): Date;
/**
 * Get the next day at 00:00:00.
 */
export declare function nextDay(dt: Date): Date;
/**
 * Get the first day of the next month at 00:00:00.
 */
export declare function nextMonth(dt: Date): Date;
/**
 * Get January 1st of the next year at 00:00:00.
 */
export declare function nextYear(dt: Date): Date;
/**
 * Align a date to the start of its period based on granularity.
 */
export declare function alignDate(dt: Date, granularity: 'dag' | 'maand' | 'jaar'): Date;
/**
 * Get the start of the next period based on granularity.
 */
export declare function nextPeriod(dt: Date, granularity: 'dag' | 'maand' | 'jaar'): Date;
/**
 * Extract all knips (change points) from a timeline.
 */
export declare function getKnipsFromTimeline(timeline: Timeline): Date[];
/**
 * Merge knips from multiple timelines, removing duplicates and sorting.
 */
export declare function mergeKnips(...timelines: Timeline[]): Date[];
/**
 * Get evaluation periods between consecutive knips.
 */
export declare function getEvaluationPeriods(knips: Date[]): Array<{
    start: Date;
    end: Date;
}>;
/**
 * Calculate time-proportional value for a partial period.
 * Used for tijdsevenredig deel calculations.
 */
export declare function calculateProportionalValue(baseValue: Value, startDate: Date, endDate: Date, periodType: 'maand' | 'jaar'): Value;
/**
 * Remove redundant knips that don't actually represent value changes.
 */
export declare function removeRedundantKnips(periods: Period[], granularity: 'dag' | 'maand' | 'jaar'): Period[];
//# sourceMappingURL=timeline-utils.d.ts.map