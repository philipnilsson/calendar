import { parseISO } from 'date-fns'
import { CalendarEvent } from '../CalendarEvent'
import { CalendarEventList } from '../CalendarEventList'

const calendarEvent1 = new CalendarEvent(
    parseISO('2019-11-18T04:15:00'),
    parseISO('2019-11-18T08:00:00'),
    'calendar 1',
    'E1',
    'D1',
)

const calendarEvent2 = new CalendarEvent(
    parseISO('2019-11-19T08:15:00'),
    parseISO('2019-11-19T10:00:00'),
    'calendar 1',
    'E2',
    'D1',
)

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

test('can find relevant events', () => {
    expect(eventList.earliestEvent(parseISO('2019-11-18'))).toEqual(calendarEvent1)
})

test('can find relevant events ignoring earlier events', () => {
    expect(eventList.earliestEvent(parseISO('2019-11-19'))).toEqual(calendarEvent2)
})

test('wont find too early events', () => {
    expect(eventList.earliestEvent(parseISO('2019-11-20'))).toEqual(undefined)
})

test('wont find too late events', () => {
    expect(eventList.earliestEvent(parseISO('2019-11-10'))).toEqual(undefined)
})

