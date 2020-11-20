import styled, { css } from 'styled-components'

export const Circled = styled.div<{ active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.25em;  
  ${props => props.active && css`
    width: 2.25em;
    border-radius: 50%;
    color:  ${props => props.theme.white};
    background: ${props => props.theme.blue};
  `}  
`
