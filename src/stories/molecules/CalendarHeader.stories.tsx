import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarHeader } from './CalendarHeader';
import styled from 'styled-components';
import { testRenderCalendarHeader } from '../helpers';

export default {
  title: 'Molecules/Calendar/CalendarHeader',
  component: CalendarHeader,
} as Meta;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
`

const Template: Story<{}> =
  () => (
    <Wrapper>
      {testRenderCalendarHeader(0)}
      {testRenderCalendarHeader(1)}
      {testRenderCalendarHeader(2)}
      {testRenderCalendarHeader(3)}
      {testRenderCalendarHeader(4)}
      {testRenderCalendarHeader(5)}
      {testRenderCalendarHeader(6)}
    </Wrapper>
  );

export const calendarHeader = Template.bind({});

