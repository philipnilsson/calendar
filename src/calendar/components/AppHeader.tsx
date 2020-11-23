import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'
import { calendarPage } from '../models/CalendarPage'
import { Body } from '../../stories/atoms/typography/Body'
import { H1 } from '../../stories/atoms/typography/H1'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  ${Body} {
    color: ${props => props.theme.dark};
    margin-right: 1em;
    &:hover {
      color: ${props => props.theme.green};
    }
  }
`

export const AppHeader = observer(() => {
  return (
    <Header>
      <H1>{format(calendarPage.date, 'MMM, yyyy')}</H1>
      <div>
        {calendarPage.isLoggedIn === true && <Body as="a" href="#" onClick={calendarPage.logOut}>Log out</Body>}
        {calendarPage.isLoggedIn === false && <Body as="a" href="#" onClick={calendarPage.logIn}>Log in</Body>}
        <Body as="a" href="#" onClick={calendarPage.toggleDarkMode}>
          Toggle theme
        </Body>
        <Body as="a" href="#" onClick={calendarPage.previousWeek}>
          Previous week
        </Body>
        <Body as="a" href="#" onClick={calendarPage.nextWeek}>
          Next week
        </Body>
      </div>
    </Header>
  )
})
