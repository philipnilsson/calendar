import React from 'react';
import { CalendarPage } from './stories/pages/CalendarPage';
import { testRenderCalendarHeader } from './stories/helpers';
import { CalendarEntry } from './stories/molecules/CalendarEntry';
import { calendarApp } from './calendar'
import { addDays } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { Small } from './stories/atoms/typography/Small';
import { Tiny } from './stories/atoms/typography/Tiny';

const App = observer(function App() {
  calendarApp.events.case({
    fulfilled: x => x
  })
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

        renderCalendarLabel={(hour) => {
          return <Tiny>{calendarApp.renderLabelAMPM(hour)}</Tiny>
        }}

        renderCalendarHeader={testRenderCalendarHeader}
      />
    </div>
  );
})

export default App;
