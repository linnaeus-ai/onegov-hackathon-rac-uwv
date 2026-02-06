"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineValueImpl = void 0;
/**
 * Class implementation of TimelineValue with methods for timeline operations
 */
class TimelineValueImpl {
    type = 'timeline';
    value;
    constructor(timeline) {
        this.value = timeline;
    }
    /**
     * Get the value that applies at a specific date.
     * Returns null if no period covers the given date.
     */
    getValueAt(date) {
        for (const period of this.value.periods) {
            // Check if date falls within this period (inclusive start, exclusive end)
            if (date >= period.startDate && date < period.endDate) {
                return period.value || null; // Return null if value is undefined
            }
        }
        return null;
    }
    /**
     * Get all periods that overlap with the given date range.
     */
    getPeriodsBetween(startDate, endDate) {
        const overlapping = [];
        for (const period of this.value.periods) {
            // Check for overlap
            if (period.startDate < endDate && period.endDate > startDate) {
                overlapping.push(period);
            }
        }
        return overlapping;
    }
    /**
     * Add a new period to the timeline, maintaining chronological order.
     */
    addPeriod(period) {
        // Insert in the correct position to maintain order
        let inserted = false;
        for (let i = 0; i < this.value.periods.length; i++) {
            if (period.startDate < this.value.periods[i].startDate) {
                this.value.periods.splice(i, 0, period);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            this.value.periods.push(period);
        }
    }
}
exports.TimelineValueImpl = TimelineValueImpl;
//# sourceMappingURL=timelines.js.map