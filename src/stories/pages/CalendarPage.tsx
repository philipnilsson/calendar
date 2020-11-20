import React from "react";
import styled from "styled-components";
import { Card } from "../atoms/layout/Card";
import { GridCell, Grid } from "../atoms/layout/Grid";
import { H1 } from "../atoms/typography/H1";
import { H3 } from "../atoms/typography/H3";
import { testMenu, testRenderCalendarLabel, testRenderCalHeader, testRenderEntry } from "../helpers";
import { Calendar } from "../molecules/Calendar";
import { MenuItem } from "../molecules/MenuItem";

const Sidebar = styled(function Menu({ items, ...rest }: { items: typeof testMenu }) {
  return (
    <div {...rest}>
      <H3>Calendars</H3>
      <nav>
        <ul>
          {items.map(props => <MenuItem key={props.title} {...props} />)}
        </ul>
      </nav>
    </div>
  )
})`
  ul { 
    margin: 0;
    margin-left: -.75em;
    padding: 0;
  }
`

const GridHeader = styled(Grid)``

export const CalendarPage = styled(function(props) {
  return (
    <div {...props}>
      <H1>May, 2020</H1>
      <Sidebar items={testMenu} />
      <Card>
        <GridHeader
          rows={1}
          cols={7}
          renderCell={(_, j) => testRenderCalHeader(j)}
        />
        <Calendar
          renderEntry={testRenderEntry}
          renderLabel={testRenderCalendarLabel}
        />
      </Card>
    </div>
  )
})`
  width: 100vw;
  height: 100vh;
  background: #f5f4ef;
  
  display: grid;
  grid-template-areas: 
    'header header'
    'sidebar main';
  grid-template-columns: 12em 1fr;
  grid-template-rows: auto 1fr;
  
  ${H1} {
    grid-area: header;
    border-bottom: 1px solid;
    border-color: #e2e1df;
  }
  
  ${Sidebar} {
    grid-area: sidebar;
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
    overflow: scroll;
  }
`
