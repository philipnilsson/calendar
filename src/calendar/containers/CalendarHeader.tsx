import { addDays, format, getDate, isToday } from "date-fns"
import { observer } from "mobx-react-lite"
import React from "react"
import { calendarApp } from ".."
import { Body } from "../../stories/atoms/typography/Body"
import { Circled } from "../../stories/atoms/typography/Circled"
import { Large } from "../../stories/atoms/typography/Large"
import { CalendarHeader as _CalendarHeader } from "../../stories/molecules/CalendarHeader"

export const CalendarHeader = observer(function ConnectedCalendarHeader({ offset }: { offset: number }) {
  const date = addDays(calendarApp.date, offset)
  return (
    <_CalendarHeader style={{ gap: '0.5em' }}>
      <Circled active={isToday(date)}>
        <Large>{getDate(date)}</Large>
      </Circled>
      <Body>{format(date, 'EEEE')}</Body>
    </_CalendarHeader>
  )
})