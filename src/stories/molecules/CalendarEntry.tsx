import styled from 'styled-components'

const teal = 'teal'

export type CalendarEntryProps = {
  offset: number,
  height: number
}

export const CalendarEntry = styled.div<CalendarEntryProps>`
  position: absolute;
  background: ${teal};
  margin: .125rem;
  border-radius: .5rem;
  color: white;
  padding: .5em .75em;
  box-sizing: border-box;
  width: calc(100% - 1.375em);
  height: calc(${props => 100 * props.height}% - 0.25rem);
  top: ${props => 100 * props.offset}%;
`
