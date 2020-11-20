import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarPage } from './CalendarPage';

export default {
  title: 'Pages/Calendar/Main',
  component: CalendarPage
} as Meta;

const Template: Story<{}> =
  (args) => <CalendarPage {...args} />

export const grid = Template.bind({});

grid.args = {}
