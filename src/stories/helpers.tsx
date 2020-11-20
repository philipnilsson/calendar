import React from "react"
import { Body } from "./atoms/typography/Body"
import { Circled } from "./atoms/typography/Circled"
import { H3 } from "./atoms/typography/H3"
import { Large } from "./atoms/typography/Large"
import { Small } from "./atoms/typography/Small"
import { CalendarEntry } from "./molecules/CalendarEntry"
import { CalendarHeader } from "./molecules/CalendarHeader"

export const testMenu = [
  { color: 'green', title: 'Work', active: true },
  { color: 'blue', title: 'Personal' },
  { color: 'red', title: 'Team' },
]

export function testRenderCalendarHeader(i: number) {
  return (
    <CalendarHeader style={{ gap: '0.5em' }}>
      <Circled active={i === 2}>
        <Large>{6 + i}</Large>
      </Circled>
      <Body>Sunday</Body>
    </CalendarHeader>
  )
}

export function testRenderCalendarLabel(i: number) {
  return <H3>{i + 1} AM</H3>
}

export function testRenderCalendarEntry(i: number, j: number) {
  if (i === 2 && j === 3) {
    return (
      <CalendarEntry offset={.5} height={2}>
        <Small>
          <b>Team meeting</b>
          <div>11:15 — 12:30am</div>
        </Small>
      </CalendarEntry>
    )
  }
  if (i === 1 && j === 1) {
    return (
      <CalendarEntry offset={.25} height={1}>
        <Small>
          <b>Project planning</b>
          <div>9 — 10am</div>
        </Small>
      </CalendarEntry>
    )
  }
  return null
}
