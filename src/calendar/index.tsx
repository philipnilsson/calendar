import React from 'react';
import { CalendarPage } from '../stories/pages/CalendarPage';
import { addHours, format } from 'date-fns';
import { Tiny } from '../stories/atoms/typography/Tiny';
import { AppHeader } from './containers/AppHeader';
import { Entry } from './containers/Entry';
import { CalendarScroll } from './containers/CalendarScroll';
import { CalendarHeader } from './containers/CalendarHeader';
import { Menu } from './containers/Menu';

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
