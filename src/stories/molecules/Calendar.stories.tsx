import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Calendar, CalendarProps } from './Calendar';
import { Small } from '../atoms/typography/Small';
import { CalendarEntry } from './CalendarEntry';

export default {
  title: 'Molecules/Calendar/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarProps> =
  (args) => <Calendar {...args} />

export const calendar = Template.bind({});

calendar.args = {
  renderEntry: (i, j) => {
    if (i === 2 && j === 3) {
      return (
        <CalendarEntry offset={.5} height={2}>
          <Small>
            <b>Team meeting</b>
            <div>9 — 10am</div>
          </Small>
        </CalendarEntry>
      )
    }
    if (i === 1 && j === 1) {
      return (
        <CalendarEntry offset={.25} height={1}>
          <Small>
            <b>Project planning</b>
            <div>9 — 10am</div>
          </Small>
        </CalendarEntry>
      )
    }
    return null
  }
}
