import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Calendar, CalendarProps } from './Calendar';
import { testRenderCalendarLabel, testRenderCalendarEntry } from '../helpers';

export default {
  title: 'Molecules/Calendar/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarProps> =
  (args) => <div style={{ marginLeft: '4em' }}>
    <Calendar {...args} />
  </div>

export const calendar = Template.bind({});

calendar.args = {
  renderLabel: testRenderCalendarLabel,
  renderEntry: testRenderCalendarEntry
}
