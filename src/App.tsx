import React from 'react';
import { CalendarPage } from './stories/pages/CalendarPage';
import { addHours, format } from 'date-fns';
import { Tiny } from './stories/atoms/typography/Tiny';
import { AppHeader } from './calendar/containers/AppHeader';
import { Entry } from './calendar/containers/Entry';
import { CalendarScroll } from './calendar/containers/CalendarScroll';
import { CalendarHeader } from './calendar/containers/CalendarHeader';
import { Menu } from './calendar/containers/Menu';

function App() {
  return (
    <div>
      <CalendarScroll />
      <CalendarPage

        header={<AppHeader />}

        menu={<Menu />}

        renderCalendarEntry={(hour, offset) => {
          return <Entry hour={hour} offset={offset} />
        }}

        renderCalendarLabel={hour => {
          return <Tiny>{format(addHours(new Date(), hour + 1), 'h a')}</Tiny>
        }}

        renderCalendarHeader={offset => {
          return <CalendarHeader offset={offset} />
        }}
      />
    </div>
  );
}

export default App;
