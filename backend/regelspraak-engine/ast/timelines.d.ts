import { Value } from '../interfaces';
import { Expression } from './expressions';
/**
 * Represents a single period in a timeline with a constant value.
 * The period is from startDate (inclusive) to endDate (exclusive).
 */
export interface Period {
    startDate: Date;
    endDate: Date;
    value?: Value;
}
/**
 * Represents a time-dependent value as a sequence of periods.
 * Each period has a constant value from start to end date.
 */
export interface Timeline {
    periods: Period[];
    granularity: 'dag' | 'maand' | 'jaar';
}
/**
 * Represents a timeline period definition (vanaf, tot, van...tot, etc.)
 */
export interface PeriodDefinition extends Expression {
    type: 'PeriodDefinition';
    periodType: 'vanaf' | 'tot' | 'tot_en_met' | 'van_tot' | 'van_tot_en_met';
    startDate?: Expression;
    endDate?: Expression;
}
/**
 * Timeline-aware value that changes over time
 */
export interface TimelineValue {
    type: 'timeline';
    value: Timeline;
}
/**
 * Timeline expression for operations like "totaal van" over time periods
 */
export interface TimelineExpression extends Expression {
    type: 'TimelineExpression';
    operation: 'totaal' | 'aantal_dagen' | 'naar_verhouding' | 'tijdsevenredig_deel_per_maand' | 'tijdsevenredig_deel_per_jaar';
    target: Expression;
    period?: PeriodDefinition;
    condition?: Expression;
}
/**
 * Class implementation of TimelineValue with methods for timeline operations
 */
export declare class TimelineValueImpl implements TimelineValue {
    type: 'timeline';
    value: Timeline;
    constructor(timeline: Timeline);
    /**
     * Get the value that applies at a specific date.
     * Returns null if no period covers the given date.
     */
    getValueAt(date: Date): Value | null;
    /**
     * Get all periods that overlap with the given date range.
     */
    getPeriodsBetween(startDate: Date, endDate: Date): Period[];
    /**
     * Add a new period to the timeline, maintaining chronological order.
     */
    addPeriod(period: Period): void;
}
//# sourceMappingURL=timelines.d.ts.map