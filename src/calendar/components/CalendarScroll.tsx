import { observer } from 'mobx-react-lite'
import React from 'react'
import { calendarPage } from '../models/CalendarPage'

export const CalendarScroll = observer(function CalendarScroll() {
  const { calendarEvents, date } = calendarPage
  React.useLayoutEffect(() => {
    const event =
      calendarEvents.earliestEvent(date)

    if (!event || event.isAllDay) {
      return
    }

    const cal =
      document.getElementById('calendar')!

    cal!.scrollTo({
      left: 0,
      top: cal.scrollHeight * (event.startHour / 24) - 70,
      behavior: 'smooth'
    })

  }, [calendarEvents, date])

  return null
})
