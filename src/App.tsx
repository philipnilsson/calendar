import React from 'react';
import { CalendarPage } from './stories/pages/CalendarPage';
import { createGlobalStyle } from 'styled-components';
import { testRenderCalendarLabel, testRenderCalendarHeader } from './stories/helpers';
import { CalendarEntry } from './stories/molecules/CalendarEntry';
import { calendarApp } from './calendar'
import { addDays } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { Small } from './stories/atoms/typography/Small';

const Globals = createGlobalStyle`
  html {
    font-size: 15px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body { 
    margin: 0;
    padding: 0;
  }
`

const App = observer(function App() {
  calendarApp.events.case({
    fulfilled: x => x
  })
  return (
    <div>
      <Globals />
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
        renderCalendarLabel={testRenderCalendarLabel}
        renderCalendarHeader={testRenderCalendarHeader}
      />
    </div>
  );
})

export default App;
