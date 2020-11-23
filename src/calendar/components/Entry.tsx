import React from 'react'
import { observer } from "mobx-react-lite"
import { addDays } from 'date-fns'
import { CalendarEntry } from '../../stories/molecules/CalendarEntry'
import { calendarApp } from '../models/CalendarPage'
import { Small } from '../../stories/atoms/typography/Small'
import { ThemeType } from '../../stories/theme/theme'

const EntryPresenter = React.memo(function({ height, offset, title, color, interval }: {
  height: number,
  offset: number,
  title: string,
  color: keyof ThemeType,
  interval: string
}) {
  return (
    <CalendarEntry offset={offset} height={height} color={color}>
      <Small>
        <b>{title}</b>
      </Small>
      <br />
      <Small style={{ opacity: 0.75 }}>
        {interval}
      </Small>
    </CalendarEntry>
  )
})

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
    <EntryPresenter
      offset={event.startOffset}
      height={event.length}
      color={color}
      title={event.title}
      interval={event.showPrettyInterval()}
    />
  )
})
