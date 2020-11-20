import styled from 'styled-components'

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.dark};
  background: ${props => props.theme.white};
  height: 4rem;
  overflow: hidden;
`
