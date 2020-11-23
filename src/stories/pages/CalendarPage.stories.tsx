import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarPage } from './CalendarPage';
import { testMenu, testRenderCalendarLabel, testRenderCalendarHeader, testRenderCalendarEntry } from "../helpers";
import { H1 } from '../atoms/typography/H1';
import { SidebarMenu } from '../organism/SidebarMenu';

export default {
  title: 'Pages/Calendar/Main',
  component: CalendarPage
} as Meta;

const Template: Story<{}> =
  (args) => (
    <CalendarPage
      renderMenu={() => <SidebarMenu items={testMenu} />}
      header={<H1>Nov 2020</H1>}
      renderCalendarEntry={testRenderCalendarEntry}
      renderCalendarLabel={testRenderCalendarLabel}
      renderCalendarHeader={testRenderCalendarHeader}
      {...args}
    />
  )

export const grid = Template.bind({});

grid.args = {}
