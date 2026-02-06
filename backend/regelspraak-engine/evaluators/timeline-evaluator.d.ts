import { Value, RuntimeContext } from '../interfaces';
import { Timeline, TimelineValue, TimelineExpression } from '../ast/timelines';
import { Expression } from '../ast/expressions';
import { ExpressionEvaluator } from './expression-evaluator';
/**
 * Evaluator for timeline expressions and operations
 */
export declare class TimelineEvaluator {
    private expressionEvaluator;
    constructor(expressionEvaluator: ExpressionEvaluator);
    /**
     * Evaluate a timeline expression
     */
    evaluate(expr: TimelineExpression, context: RuntimeContext): Value;
    /**
     * Get value at a specific date from a timeline value
     */
    getValueAt(timelineValue: TimelineValue, date: Date): Value | null;
    /**
     * Merge knips (change points) from multiple timelines
     */
    mergeKnips(...timelines: Timeline[]): Date[];
    /**
     * Evaluate timeline addition, multiplication, etc.
     */
    evaluateTimelineBinaryOp(leftTimeline: Timeline, rightTimeline: Timeline, operator: '+' | '-' | '*' | '/' | '==' | '!=' | '>' | '<' | '>=' | '<=' | '&&' | '||', context: RuntimeContext): TimelineValue;
    private evaluateTotaal;
    private evaluateAantalDagen;
    private evaluateNaarVerhouding;
    /**
     * Evaluate tijdsevenredig deel per maand (time-proportional per month).
     */
    private evaluateTijdsevenredigPerMaand;
    /**
     * Evaluate tijdsevenredig deel per jaar (time-proportional per year).
     */
    private evaluateTijdsevenredigPerJaar;
    /**
     * Apply tijdsevenredig calculation to a timeline.
     */
    applyTijdsevenredigToTimeline(timelineValue: TimelineValue, periodType: 'maand' | 'jaar', condition: Expression | undefined, context: RuntimeContext): TimelineValue;
    /**
     * Expand a period to a different granularity, applying tijdsevenredig conversion.
     */
    private expandPeriodToGranularity;
    /**
     * Filter periods based on a temporal condition.
     */
    private filterPeriodsWithCondition;
    /**
     * Evaluate a period definition to get start and end dates.
     */
    private evaluatePeriodDefinition;
    private getValueAtDate;
    private performBinaryOp;
    private getFinestGranularity;
    /**
     * Evaluate timeline × scalar operation.
     * Broadcasts the scalar value across all periods in the timeline.
     */
    evaluateTimelineScalarOp(timeline: Timeline, scalar: Value, operator: '+' | '-' | '*' | '/', context: RuntimeContext): TimelineValue;
    /**
     * Evaluate scalar × timeline operation.
     * Broadcasts the scalar value across all periods in the timeline.
     * Order matters for non-commutative operations (-, /).
     */
    evaluateScalarTimelineOp(scalar: Value, timeline: Timeline, operator: '+' | '-' | '*' | '/', context: RuntimeContext): TimelineValue;
}
//# sourceMappingURL=timeline-evaluator.d.ts.map