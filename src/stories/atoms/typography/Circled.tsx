import styled, { css } from 'styled-components'

const blue = '#5d6ae3'

export const Circled = styled.div<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.25em;  
  
  ${props => props.active && css`
    color: white !important;
    width: 2.25em;
    border-radius: 50%;
    color: white;
    background: ${blue};
  `}  
`
