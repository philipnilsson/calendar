import styled from 'styled-components'

export const Bullet = styled.span<{ color: string }>`
  display: inline-block;
  width: .6em;
  width: .6em;
  height: .6em;
  background: ${props => props.color};
  border-radius: 50%;
  margin-right: .75em;
`
