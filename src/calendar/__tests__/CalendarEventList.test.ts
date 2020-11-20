import { parseISO } from 'date-fns'
import { CalendarEvent } from '../CalendarEvent'
import { CalendarEventList } from '../CalendarEventList'

const calendarEvent1 =
    new CalendarEvent(parseISO('2019-11-18'), 'E1', 'D1', 4, 0.25, 1.5)

const calendarEvent2 =
    new CalendarEvent(parseISO('2019-11-19'), 'E2', 'D1', 8, 0, 0.15)

const eventList = new CalendarEventList([
    calendarEvent1,
    calendarEvent2
])

test('can find event', () => {
    expect(eventList.findEvent(4, parseISO('2019-11-18'))).toBe(calendarEvent1)
})

test('can find another event', () => {
    expect(eventList.findEvent(8, parseISO('2019-11-19'))).toBe(calendarEvent2)
})

test('will not find event on the wrong day', () => {
    expect(eventList.findEvent(4, parseISO('2019-11-19'))).toBe(undefined)
})

test('will not find event with the wrong time', () => {
    expect(eventList.findEvent(8, parseISO('2019-11-18'))).toBe(undefined)
})
