import { date } from "bueno/dist/cjs/schema/date";
import { format } from "date-fns";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { Card } from "../atoms/layout/Card";
import { GridCell, Grid } from "../atoms/layout/Grid";
import { H1 } from "../atoms/typography/H1";
import { Calendar } from "../molecules/Calendar";
import { MenuItems, SidebarMenu } from '../organism/SidebarMenu';

const PageHeader = styled.div``
const GridHeader = styled(Grid)``

type CalendarPageProps = {
  items: MenuItems,
  header: ReactNode,
  renderCalendarLabel: (i: number) => ReactNode,
  renderCalendarHeader: (i: number) => ReactNode,
  renderCalendarEntry: (i: number, j: number) => ReactNode,
}

export const CalendarPage = styled(function({
  items,
  header,
  renderCalendarEntry,
  renderCalendarHeader,
  renderCalendarLabel,
  ...props
}: CalendarPageProps) {
  return (
    <div {...props}>
      <PageHeader>{header}</PageHeader>
      <SidebarMenu items={items} />
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
  background: #f5f4f0;
  
  display: grid;
  grid-template-areas: 
    'header header'
    'sidebar main';
  grid-template-columns: 14rem 1fr;
  grid-template-rows: auto 1fr;
  
  ${PageHeader} {
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
