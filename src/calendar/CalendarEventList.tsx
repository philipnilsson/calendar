import { isSameDay } from "date-fns";
import { CalendarEvent } from "./CalendarEvent";

export class CalendarEventList {
  constructor(
    public events: CalendarEvent[]
  ) {
  }

  static EMPTY =
    new CalendarEventList([])

  findEvent(hour: number, day: Date) {
    return this.events.find((e: CalendarEvent) => {
      return e.startHour === hour && isSameDay(day, e.date)
    })
  }
}
