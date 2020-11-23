import { observer } from 'mobx-react-lite'
import React from 'react'
import { calendarApp } from '..'
import { SidebarMenu } from '../../stories/organism/SidebarMenu'

export const Menu = observer(function Menu() {
  const items =
    calendarApp.calendars.map(c => ({ ...c, onClick: c.toggleActive }))
  return <SidebarMenu items={items} />
})
