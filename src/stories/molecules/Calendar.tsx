import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Grid } from '../atoms/layout/Grid'

export type CalendarProps = {
  renderEntry: (i: number, j: number) => ReactNode,
  renderLabel: (j: number) => ReactNode,
} & React.HTMLAttributes<HTMLDivElement>

const Cell = styled.div`
  position: relative;
  min-height: 5em;
`

const Label = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: -0.5em;
  right: calc(100% + .5em);
  white-space: nowrap;
`

export const Calendar = styled(function Calendar({ renderEntry, renderLabel, ...props }: CalendarProps) {
  return (
    <Grid {...props} cols={7} rows={24} renderCell={(i, j) => (
      <Cell>
        { j === 0 && <Label>{renderLabel(i)}</Label>}
        { renderEntry(i, j)}
      </Cell>
    )} />
  )
})`

`
