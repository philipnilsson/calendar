import React from "react"
import styled from "styled-components"
import { H3 } from "../atoms/typography/H3"
import { MenuItem } from "../molecules/MenuItem"

export type MenuItems = {
  color: string,
  title: string,
  active?: boolean
}[]

export const SidebarMenu = styled(function SidebarMenu({ items, ...rest }: { items: MenuItems }) {
  return (
    <div {...rest}>
      <H3>Calendars</H3>
      <nav>
        <ul>
          {items.map(props => (
            <MenuItem key={props.title} {...props} />
          ))}
        </ul>
      </nav>
    </div>
  )
})`
  ${H3} {
    margin-bottom: 1em;
  }
  
  ul { 
    margin: 0;
    margin-left: -.75em;
    padding: 0;
  }
`
