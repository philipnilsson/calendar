import { differenceInMinutes, getHours, getMinutes, parseISO } from "date-fns"

type GAPIEvent = {
  start: { dateTime: string } | { date: string },
  end: { dateTime: string } | { date: string },
  summary: string,
  description: string
}

export class CalendarEvent {
  constructor(
    public date: Date,
    public title: string,
    public description: string,
    public startHour: number,
    public startOffset: number,
    public length: number
  ) {
  }

  static fromGAPI(result: GAPIEvent) {

    const date =
      'date' in result.start
        ? parseISO(result.start.date)
        : parseISO(result.start.dateTime)

    const startHour =
      getHours(date)

    const offset =
      getMinutes(date) / 60

    // Assume we're seeing an all-day event if endHour has no time.
    const length =
      'dateTime' in result.end
        ? differenceInMinutes(parseISO(result.end.dateTime), date) / 60
        : 24

    return new CalendarEvent(
      date,
      result.summary,
      result.description,
      startHour,
      offset,
      length
    )
  }
}
