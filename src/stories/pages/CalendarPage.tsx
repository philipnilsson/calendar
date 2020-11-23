import React, { ReactNode } from "react";
import styled from "styled-components";
import { Card } from "../atoms/layout/Card";
import { GridCell, Grid } from "../atoms/layout/Grid";
import { Calendar } from "../molecules/Calendar";

const PageHeader = styled.div``
const GridHeader = styled(Grid)``
const Menu = styled.div``

type CalendarPageProps = {
  menu: ReactNode,
  header: ReactNode,
  renderCalendarLabel: (i: number) => ReactNode,
  renderCalendarHeader: (i: number) => ReactNode,
  renderCalendarEntry: (i: number, j: number) => ReactNode,
}

export const CalendarPage = styled(function({
  menu,
  header,
  renderCalendarEntry,
  renderCalendarHeader,
  renderCalendarLabel,
  ...props
}: CalendarPageProps) {
  return (
    <div {...props}>
      <PageHeader>{header}</PageHeader>
      <Menu>{menu}</Menu>
      <Card>
        <GridHeader
          rows={1}
          cols={7}
          renderCell={(_, j) => renderCalendarHeader(j)}
        />
        <Calendar
          id="calendar"
          renderEntry={renderCalendarEntry}
          renderLabel={renderCalendarLabel}
        />
      </Card>
    </div>
  )
})`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.sand};
  
  display: grid;
  grid-template-areas: 
    'header header'
    'sidebar main';
  grid-template-columns: 14rem 1fr;
  grid-template-rows: auto 1fr;
  
  ${PageHeader} {
    grid-area: header;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.border};
    padding: 1.5rem 1.5rem;
  }
  
  ${Menu} {
    grid-area: sidebar;
    padding: 1.5rem 0 1.5rem 1.5rem;
  }
  
  ${Card} {
    grid-area: main;
    background: ${props => props.theme.white};
    margin: 1em;
  }
  
  ${Grid} {
    padding-left: 4em;
  }
  
  ${GridHeader} {
    border-bottom: 1px solid ${props => props.theme.border};
    ${GridCell} {
      border-bottom: none;
    }
  }
  
  ${Calendar} {
    height: calc(100% - 4em);
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar { 
      display: none;
    }  
  }
`
