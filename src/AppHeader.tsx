import { format } from "date-fns"
import { observer } from "mobx-react-lite"
import React from "react"
import styled from "styled-components"
import { calendarApp } from "./calendar"
import { Body } from "./stories/atoms/typography/Body"
import { H1 } from "./stories/atoms/typography/H1"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  ${Body} {
    color: #222;
    margin-right: 1em;
    &:hover {
      color: teal;
    }
  }
`

export const AppHeader = observer(() => (
  <Header>
    <H1>{format(calendarApp.date, 'MMM, yyyy')}</H1>
    <div>
      <Body as="a" href="#" onClick={calendarApp.previousWeek}>Prev week</Body>
      <Body as="a" href="#" onClick={calendarApp.nextWeek}>Next week</Body>
    </div>
  </Header>
))
