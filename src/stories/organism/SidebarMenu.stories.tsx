import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuItems, SidebarMenu } from './SidebarMenu';
import { testMenu } from '../helpers';

export default {
  title: 'Organisms/Menu/SidebarMenu',
  component: SidebarMenu,
} as Meta;

const Template: Story<{ items: MenuItems }> =
  (args) => <SidebarMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: testMenu
}
