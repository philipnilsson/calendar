import { differenceInMinutes, format, getHours, getMinutes, parseISO } from "date-fns"

type GAPIEvent = {
  start: { dateTime: string } | { date: string },
  end: { dateTime: string } | { date: string },
  summary: string,
  description: string
}

export class CalendarEvent {
  constructor(
    public date: Date,
    public endDate: Date,
    public title: string,
    public description: string,
    public startHour: number,
    public endHour: number,
    public startOffset: number,
    public length: number
  ) {
  }

  formatHour(date: Date) {
    return format(date, "h:mmaaaaa'm'").replace(':00', '')
  }

  showPrettyInterval() {
    const canAbbreviate =
      (this.startHour < 12) === (this.endHour < 12)

    if (canAbbreviate) {
      return `${format(this.date, 'h:mm')} — ${this.formatHour(this.endDate)}`
    }

    return `${this.formatHour(this.date)} — ${this.formatHour(this.endDate)}`
  }

  static fromGAPI(result: GAPIEvent) {

    const startDate =
      'date' in result.start
        ? parseISO(result.start.date)
        : parseISO(result.start.dateTime)

    const endDate =
      'date' in result.end
        ? parseISO(result.end.date)
        : parseISO(result.end.dateTime)

    const startHour =
      getHours(startDate)

    const endHour =
      getHours(endDate)

    const offset =
      getMinutes(startDate) / 60

    // Assume we're seeing an all-day event if endHour has no time.
    const length =
      'date' in result.end
        ? 24
        : differenceInMinutes(endDate, startDate) / 60

    return new CalendarEvent(
      startDate,
      endDate,
      result.summary,
      result.description,
      startHour,
      endHour,
      offset,
      length
    )
  }
}
