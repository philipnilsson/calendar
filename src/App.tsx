import React from 'react';
import { CalendarPage } from './stories/pages/CalendarPage';
import { CalendarEntry } from './stories/molecules/CalendarEntry';
import { calendarApp } from './calendar'
import { addDays, format, getDate } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { Small } from './stories/atoms/typography/Small';
import { Tiny } from './stories/atoms/typography/Tiny';
import { CalendarHeader } from './stories/molecules/CalendarHeader';
import { Body } from './stories/atoms/typography/Body';
import { Circled } from './stories/atoms/typography/Circled';
import { Large } from './stories/atoms/typography/Large';
import { CalendarEvent } from './calendar/CalendarEvent';

const App = observer(function App() {
  calendarApp.events.case({
    fulfilled: x => x
  })

  React.useLayoutEffect(() => {
    const event =
      calendarApp.calendarEvents.earliestEvent(calendarApp.date)

    if (!event) {
      return
    }

    const cal =
      document.getElementById('calendar')!

    cal!.scrollTo(
      0,
      cal.scrollHeight * (event.startHour / 24) - 70
    )

  }, [calendarApp.calendarEvents, calendarApp.date])

  return (
    <div>
      <CalendarPage
        items={calendarApp.calendars.map(c => ({ ...c, onClick: c.toggleActive }))}
        renderCalendarEntry={(hour, day_offset) => {

          const date =
            addDays(calendarApp.date, day_offset)

          const event =
            calendarApp.calendarEvents.findEvent(hour, date)

          if (event) {
            return (
              <CalendarEntry offset={event.startOffset} height={event.length}>
                <Small><b>{event.title}</b></Small> <br />
                <Small>{event.description}</Small>
              </CalendarEntry>
            )
          }
        }}

        renderCalendarLabel={hour => {
          return <Tiny>{calendarApp.renderLabelAMPM(hour)}</Tiny>
        }}

        renderCalendarHeader={offset => {
          const date = addDays(calendarApp.date, offset)
          return (
            <CalendarHeader style={{ gap: '0.5em' }}>
              <Circled active={offset === 0}>
                <Large>{getDate(date)}</Large>
              </Circled>
              <Body>{format(date, 'EEEE')}</Body>
            </CalendarHeader>
          )
        }}
      />
    </div>
  );
})

export default App;
