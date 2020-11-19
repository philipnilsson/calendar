import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarHeader } from './CalendarHeader';
import { Circled } from '../atoms/typography/Circled';
import { Large } from '../atoms/typography/Large';
import { Body } from '../atoms/typography/Body';
import styled from 'styled-components';

export default {
  title: 'Molecules/Calendar/CalendarHeader',
  component: CalendarHeader,
} as Meta;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
`

const Template: Story<{}> =
  (args) => (
    <Wrapper>
      <CalendarHeader {...args} style={{ gap: '0.5em' }}>
        <Circled><Large>6</Large></Circled>
        <Body>Sunday</Body>
      </CalendarHeader>
      <CalendarHeader {...args} style={{ gap: '0.5em' }}>
        <Circled active><Large>7</Large></Circled>
        <Body>Monday</Body>
      </CalendarHeader>
      <CalendarHeader {...args} style={{ gap: '0.5em' }}>
        <Circled><Large>8</Large></Circled>
        <Body>Tuesday</Body>
      </CalendarHeader>
      <CalendarHeader {...args} style={{ gap: '0.5em' }}>
        <Circled><Large>9</Large></Circled>
        <Body>Wednesday</Body>
      </CalendarHeader>
    </Wrapper>
  );

export const calendarHeader = Template.bind({});

