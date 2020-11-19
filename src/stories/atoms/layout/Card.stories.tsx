import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card } from './Card';
import { H1 } from '../typography/H1';
import { CalendarHeader } from '../../molecules/CalendarHeader';

export default {
  title: 'Atoms/Layout/Card',
  component: Card,
} as Meta;

const Template: Story<{}> =
  () => (
    <Card>
      <CalendarHeader>
        <H1>Hello</H1>
      </CalendarHeader>
    </Card>
  );

export const card = Template.bind({});

