import { CalendarEvent } from "../CalendarEvent"

const dateTimeCalendarEvent = CalendarEvent.fromGAPI({
    summary: 'e1',
    description: 'desc',
    start: { dateTime: '2019-11-28T10:15:00' },
    end: { dateTime: '2019-11-28T11:30:00' },
})

const dateCalendarEvent = CalendarEvent.fromGAPI({
    summary: 'e1',
    description: 'desc',
    start: { date: '2019-11-28' },
    end: { date: '2019-11-28' },
})

const mixedCalendarEvent = CalendarEvent.fromGAPI({
    summary: 'e1',
    description: 'desc',
    start: { dateTime: '2019-11-28T10:15:00' },
    end: { date: '2019-11-28' },
})

test('datetime offset', () => {
    expect(dateTimeCalendarEvent.startOffset).toEqual(.25)
})

test('datetime length', () => {
    expect(dateTimeCalendarEvent.length).toEqual(1.25)
})

test('date offset', () => {
    expect(dateCalendarEvent.startOffset).toEqual(0)
})

test('date length', () => {
    expect(dateCalendarEvent.length).toEqual(24)
})

test('mixed offset', () => {
    expect(mixedCalendarEvent.startOffset).toEqual(0.25)
})

test('mixed length', () => {
    expect(mixedCalendarEvent.length).toEqual(24)
})
