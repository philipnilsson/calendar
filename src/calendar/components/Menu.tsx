import { observer } from 'mobx-react-lite'
import React from 'react'
import { calendarPage } from '../models/CalendarPage'
import { SidebarMenu } from '../../stories/organism/SidebarMenu'

export const Menu = observer(function Menu() {
  const items =
    calendarPage.calendars.map(c => ({ ...c, onClick: c.toggleActive }))
  return <SidebarMenu items={items} />
})
