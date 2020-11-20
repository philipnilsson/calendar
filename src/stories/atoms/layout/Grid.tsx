import React, { ReactNode } from 'react'
import styled from 'styled-components'

export type GridProps = {
  rows: number,
  cols: number,
  renderCell: (i: number, j: number) => ReactNode,
}

const StyledGrid = styled.div<{ cols: number } >`
  display: grid;
  background: white;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
`

export const GridCell = styled.div`
  width: 100%;
  height: 100%;
  min-width: 0;
  border-left: 1px solid;
  border-bottom: 1px solid;
  border-color: #e2e1df;
`

export const Grid = styled(
  function Grid({ renderCell, cols, rows, ...props }: GridProps) {
    return (
      <StyledGrid cols={cols} {...props}>
        {[...Array(rows)].map((_, i) =>
          [...Array(cols)].map((_, j) =>
            <GridCell key={i + '-' + j}>
              {renderCell(i, j)}
            </GridCell>))
        }
      </StyledGrid>
    )
  }
)``
