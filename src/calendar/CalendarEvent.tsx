import { differenceInMinutes, format, getHours, getMinutes, parseISO } from "date-fns"

type GAPIEvent = {
  start: { dateTime: string } | { date: string },
  end: { dateTime: string } | { date: string },
  summary: string,
  description: string
}

export class CalendarEvent {
  constructor(
    public startDate: Date,
    public endDate: Date,
    public calendarID: string,
    public title: string,
    public description: string,
    public isAllDay: boolean = false
  ) {
  }

  get length() {
    return this.isAllDay
      ? 24
      : differenceInMinutes(this.endDate, this.startDate) / 60
  }

  get startOffset() {
    return getMinutes(this.startDate) / 60
  }

  get startHour() {
    return getHours(this.startDate)
  }

  get endHour() {
    return getHours(this.endDate)
  }

  formatHour(date: Date) {
    return format(date, "h:mmaaaaa'm'").replace(':00', '')
  }

  showPrettyInterval() {
    const canAbbreviate =
      (this.startHour < 12) === (this.endHour < 12)

    if (canAbbreviate) {
      return `${format(this.startDate, 'h:mm')} — ${this.formatHour(this.endDate)}`
    }

    return `${this.formatHour(this.startDate)} — ${this.formatHour(this.endDate)}`
  }

  static fromGAPI(result: GAPIEvent, calendarID?: string) {

    const startDate =
      'date' in result.start
        ? parseISO(result.start.date)
        : parseISO(result.start.dateTime)

    const endDate =
      'date' in result.end
        ? parseISO(result.end.date)
        : parseISO(result.end.dateTime)

    return new CalendarEvent(
      startDate,
      endDate,
      calendarID || '',
      result.summary,
      result.description,
      // Assume we're seeing an all-day event if endHour has no time.
      'date' in result.end
    )
  }
}
