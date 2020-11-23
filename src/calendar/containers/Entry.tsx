import React from 'react'
import { observer } from "mobx-react-lite"
import { addDays } from 'date-fns'
import { CalendarEntry } from '../../stories/molecules/CalendarEntry'
import { calendarApp } from '..'
import { Small } from '../../stories/atoms/typography/Small'

export const Entry = observer(function Entry({ hour, offset }: { hour: number, offset: number }) {
  const date =
    addDays(calendarApp.date, offset)

  const event =
    calendarApp.calendarEvents.findEvent(hour, date)

  if (!event) {
    return null
  }

  const color =
    calendarApp.calendars.find(c => c.id === event.calendarID)?.color ?? 'green'

  return (
    <CalendarEntry offset={event.startOffset} height={event.length} color={color}>
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
