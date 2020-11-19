import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItem, MenuItemProps } from './MenuItem';

export default {
  title: 'Molecules/Menu/MenuItem',
  component: MenuItem,
} as Meta;

const Template: Story<MenuItemProps> =
  (args) => <MenuItem {...args} />

export const Active = Template.bind({})

Active.args = {
  active: true,
  color: 'green',
  title: 'Work'
};

export const Inactive = Template.bind({})

Inactive.args = {
  active: false,
  color: 'red',
  title: 'Personal'
};


