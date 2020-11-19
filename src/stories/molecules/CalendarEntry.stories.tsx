import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarEntry, CalendarEntryProps } from './CalendarEntry';
import { Small } from '../atoms/typography/Small';
import styled from 'styled-components';

export default {
  title: 'Molecules/Calendar/CalendarEntry',
  component: CalendarEntry,
} as Meta;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background: white;
  height: 10rem;
  width: 10rem;
`

const Template: Story<CalendarEntryProps> =
  (args) => (
    <Wrapper>
      <CalendarEntry {...args}>
        <Small>
          <b>Project planning</b>
          <div>9 — 10am</div>
        </Small>
      </CalendarEntry>
    </Wrapper>
  );

export const Full = Template.bind({});
Full.args = {
  offset: 0,
  height: 1
}

export const Offset = Template.bind({});
Offset.args = {
  offset: .5,
  height: 1
}

export const Half = Template.bind({});
Half.args = {
  offset: 0,
  height: 0.5
}
