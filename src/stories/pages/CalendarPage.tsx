import React, { ReactNode } from "react";
import styled from "styled-components";
import { Card } from "../atoms/layout/Card";
import { GridCell, Grid } from "../atoms/layout/Grid";
import { H1 } from "../atoms/typography/H1";
import { Calendar } from "../molecules/Calendar";
import { MenuItems, SidebarMenu } from '../organism/SidebarMenu';

const GridHeader = styled(Grid)``

type CalendarPageProps = {
  items: MenuItems,
  renderCalendarLabel: (i: number) => ReactNode,
  renderCalendarHeader: (i: number) => ReactNode,
  renderCalendarEntry: (i: number, j: number) => ReactNode,
}

export const CalendarPage = styled(function(props: CalendarPageProps) {
  return (
    <div {...props}>
      <H1>May, 2020</H1>
      <SidebarMenu items={props.items} />
      <Card>
        <GridHeader
          rows={1}
          cols={7}
          renderCell={(_, j) => props.renderCalendarHeader(j)}
        />
        <Calendar
          renderEntry={props.renderCalendarEntry}
          renderLabel={props.renderCalendarLabel}
        />
      </Card>
    </div>
  )
})`
  width: 100vw;
  height: 100vh;
  background: #f5f4f0;
  
  display: grid;
  grid-template-areas: 
    'header header'
    'sidebar main';
  grid-template-columns: 14rem 1fr;
  grid-template-rows: auto 1fr;
  
  ${H1} {
    grid-area: header;
    border-bottom: 1px solid;
    border-color: #e2e1df;
    padding: 1.5rem 1.5rem;
  }
  
  ${SidebarMenu} {
    grid-area: sidebar;
    padding: 1.5rem 0 1.5rem 1.5rem;
  }
  
  ${Card} {
    grid-area: main;
    background: white;
    margin: 1em;
  }
  
  ${Grid} {
    padding-left: 4em;
  }
  
  ${GridHeader} {
    border-bottom: 1px solid #e2e1df;
    ${GridCell} {
      border-bottom: none;
    }
  }
  
  ${Calendar} {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
`
