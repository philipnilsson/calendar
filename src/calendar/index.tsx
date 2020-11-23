import React from 'react'
import { CalendarPage } from '../stories/pages/CalendarPage'
import { addHours, format } from 'date-fns'
import { Tiny } from '../stories/atoms/typography/Tiny'
import { CalendarScroll } from './components/CalendarScroll'
import { AppHeader } from './components/AppHeader'
import { Entry } from './components/Entry'
import { Menu } from './components/Menu'
import { CalendarHeader } from './components/CalendarHeader'

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
  )
}

export default App
