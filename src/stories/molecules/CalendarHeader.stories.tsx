import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarHeader } from './CalendarHeader';
import styled from 'styled-components';
import { testRenderCalHeader } from '../helpers';

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
      {testRenderCalHeader(0)}
      {testRenderCalHeader(1)}
      {testRenderCalHeader(2)}
      {testRenderCalHeader(3)}
      {testRenderCalHeader(4)}
      {testRenderCalHeader(5)}
      {testRenderCalHeader(6)}
    </Wrapper>
  );

export const calendarHeader = Template.bind({});

