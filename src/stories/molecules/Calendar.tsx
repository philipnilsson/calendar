import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Grid } from '../atoms/grid/Grid'
import { CalendarEntry } from './CalendarEntry'

export type CalendarProps = {
  renderEntry: (i: number, j: number) => ReactNode
}

const Cell = styled.div`
  position: relative;
  min-height: 5em;
`

export function Calendar(props: CalendarProps) {
  return (
    <Grid cols={7} rows={24} renderCell={(i, j) => {
      const entry = props.renderEntry(i, j);
      return (
        <Cell>
          { props.renderEntry(i, j)}
        </Cell>
      )
    }} />
  )
}
