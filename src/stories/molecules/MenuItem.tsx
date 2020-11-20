import React from 'react'
import styled, { css } from 'styled-components'
import { ThemeType } from '../../theme/theme'
import { Body } from '../atoms/typography/Body'
import { Bullet } from '../atoms/typography/Bullet'

export type MenuItemProps = {
  active?: boolean,
  title: string,
  color: keyof ThemeType
}

export const MenuItem = styled(function MenuItem({ active, color, title, ...props }) {
  return (
    <li {...props}>
      <Bullet color={color} />
      <Body>{title}</Body>
    </li>
  )
})`
  cursor: pointer;
  list-style: none;
  padding: 0.5em 1em;
  border-radius: .35rem;
  margin: 0.25em 0;
  color: ${props => props.theme.menu};
  &: hover {
    background: ${props => props.theme.hover};
    box-shadow: 
      0px 2px 1px rgba(0, 0, 0, .1),
      1px 0 1px rgba(0, 0, 0, .03);
  }
  ${props => props.active && css`
    background: ${props => props.theme.hover};
    box-shadow: 
      0px 2px 1px rgba(0, 0, 0, .1),
      1px 0 1px rgba(0, 0, 0, .03);
  `}
`
