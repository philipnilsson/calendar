import React from 'react'
import { observer } from "mobx-react-lite"
import { calendarApp } from "./calendar"
import { Small } from "./stories/atoms/typography/Small"
import { CalendarEntry } from "./stories/molecules/CalendarEntry"
import { addDays } from 'date-fns'

export const Entry = observer(function Entry({ hour, offset }: { hour: number, offset: number }) {
  const date =
    addDays(calendarApp.date, offset)

  const event =
    calendarApp.calendarEvents.findEvent(hour, date)

  if (!event) {
    return null
  }

  return (
    <CalendarEntry offset={event.startOffset} height={event.length}>
      <Small>
        <b>{event.title}</b>
      </Small>
      <br />
      <Small style={{ opacity: 0.75 }}>
        {event.showPrettyInterval()}
      </Small>
    </CalendarEntry>
  )
})
