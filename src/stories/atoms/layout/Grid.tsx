import React, { ReactNode } from 'react'
import styled from 'styled-components'

export type GridProps = {
  rows: number,
  cols: number,
  renderCell: (i: number, j: number) => ReactNode
}

const StyledGrid = styled.div<{ cols: number } >`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
`

const Cell = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-left: 1px solid;
  border-bottom: 1px solid;
  border-color: #e2e1df;
`

export function Grid(props: GridProps) {
  return (
    <StyledGrid cols={props.cols}>
      {[...Array(props.rows)].map((_, i) =>
        [...Array(props.cols)].map((_, j) =>
          <Cell>{props.renderCell(i, j)}</Cell>))
      }
    </StyledGrid>
  )
}
