import styled from 'styled-components'
import { ThemeType } from '../../../stories/theme/theme'

export const Bullet = styled.span<{ color: keyof ThemeType }>`
  display: inline-block;
  width: .6em;
  width: .6em;
  height: .6em;
  background: ${props => props.theme[props.color]};
  border-radius: 50%;
  margin-right: .75em;
`
