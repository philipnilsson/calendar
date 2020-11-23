import { observer } from 'mobx-react-lite'
import React from 'react'
import { calendarApp } from '../models/CalendarPage'

export const CalendarScroll = observer(function CalendarScroll() {
  const { calendarEvents, date } = calendarApp
  React.useLayoutEffect(() => {
    const event =
      calendarEvents.earliestEvent(date)

    if (!event) {
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
