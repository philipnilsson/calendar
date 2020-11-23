import { isBefore, addDays, isSameDay, isAfter, isEqual } from "date-fns";
import { CalendarEvent } from "./CalendarEvent";

export class CalendarEventList {
    constructor(
        public events: CalendarEvent[]
    ) {
    }

    static EMPTY =
        new CalendarEventList([])

    isWithinWeek(date: Date, dateToCompare: Date) {
        const isAfterOrBefore =
            isAfter(date, dateToCompare) || isEqual(date, dateToCompare)
        return isAfterOrBefore && isBefore(date, addDays(dateToCompare, 7))
    }

    earliestEvent(startOfDay: Date): CalendarEvent | undefined {
        const eventsInWeek = this.events
            .filter(e => this.isWithinWeek(e.startDate, startOfDay))

        return eventsInWeek.sort((e, f) => e.startHour - f.startHour)[0]
    }

    findEvent(hour: number, day: Date) {
        return this.events.find((e: CalendarEvent) => {
            return e.startHour === hour && isSameDay(day, e.startDate)
        })
    }
}
