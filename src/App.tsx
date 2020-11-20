import React from 'react';
import { CalendarPage } from './stories/pages/CalendarPage';
import { calendarApp } from './calendar'
import { addDays, addHours, format, getDate } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { Tiny } from './stories/atoms/typography/Tiny';
import { CalendarHeader } from './stories/molecules/CalendarHeader';
import { Body } from './stories/atoms/typography/Body';
import { Circled } from './stories/atoms/typography/Circled';
import { Large } from './stories/atoms/typography/Large';
import { AppHeader } from './calendar/presenters/AppHeader';
import { Entry } from './calendar/presenters/Entry';

const App = observer(function App() {
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

        header={<AppHeader />}

        items={calendarApp.calendars.map(c => ({ ...c, onClick: c.toggleActive }))}

        renderCalendarEntry={(hour, offset) => <Entry hour={hour} offset={offset} />}

        renderCalendarLabel={hour => {
          return <Tiny>{format(addHours(calendarApp.date, hour + 1), 'h a')}</Tiny>
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
