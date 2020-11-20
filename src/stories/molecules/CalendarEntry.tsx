import styled from 'styled-components'
import { ThemeType } from '../../stories/theme/theme'

export type CalendarEntryProps = {
  offset: number,
  height: number,
  color?: keyof ThemeType
}

export const CalendarEntry = styled.div<CalendarEntryProps>`
  position: absolute;
  z-index: 10;
  background: ${props => props.theme[props.color ?? 'green']};
  margin: .125rem;
  border-radius: .5rem;
  color: white;
  overflow: hidden;
  padding: .5em .75em;
  width: calc(100% - 1.375em);
  height: calc(${props => 100 * props.height}% - 0.25rem + ${props => props.height}px);
  top: ${props => 100 * props.offset}%;
`
