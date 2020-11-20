import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarPage } from './CalendarPage';
import { testMenu, testRenderCalendarLabel, testRenderCalendarHeader, testRenderCalendarEntry } from "../helpers";

export default {
  title: 'Pages/Calendar/Main',
  component: CalendarPage
} as Meta;

const Template: Story<{}> =
  (args) => (
    <CalendarPage
      items={testMenu}
      renderCalendarEntry={testRenderCalendarEntry}
      renderCalendarLabel={testRenderCalendarLabel}
      renderCalendarHeader={testRenderCalendarHeader}
      {...args}
    />
  )

export const grid = Template.bind({});

grid.args = {}
