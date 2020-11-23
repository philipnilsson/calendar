import React from 'react';
import { CalendarPage } from './stories/pages/CalendarPage';
import { calendarApp } from './calendar'
import { addDays, addHours, format, getDate, isToday } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { Tiny } from './stories/atoms/typography/Tiny';
import { CalendarHeader } from './stories/molecules/CalendarHeader';
import { Body } from './stories/atoms/typography/Body';
import { Circled } from './stories/atoms/typography/Circled';
import { Large } from './stories/atoms/typography/Large';
import { AppHeader } from './calendar/presenters/AppHeader';
import { Entry } from './calendar/presenters/Entry';
import { SidebarMenu } from './stories/organism/SidebarMenu';

const Menu = observer(function Menu() {
  const items =
    calendarApp.calendars.map(c => ({ ...c, onClick: c.toggleActive }))
  return <SidebarMenu items={items} />
})

const CalendarScroll = observer(function CalendarScroll() {
  React.useLayoutEffect(() => {
    const event =
      calendarApp.calendarEvents.earliestEvent(calendarApp.date)

    if (!event) {
      return
    }

    const cal =
      document.getElementById('calendar')!

    cal!.scrollTo({
      left: 0,
      top: cal.scrollHeight * (event.startHour / 24) - 70,
      behavior: 'smooth'
    })

  }, [calendarApp.calendarEvents, calendarApp.date])

  return null
})

const ConnectedCalendarHeader = observer(function ConnectedCalendarHeader({ offset }: { offset: number }) {
  const date = addDays(calendarApp.date, offset)
  return (
    <CalendarHeader style={{ gap: '0.5em' }}>
      <Circled active={isToday(date)}>
        <Large>{getDate(date)}</Large>
      </Circled>
      <Body>{format(date, 'EEEE')}</Body>
    </CalendarHeader>
  )
})

const App = function App() {
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
          return <ConnectedCalendarHeader offset={offset} />
        }}
      />
    </div>
  );
}

export default App;
