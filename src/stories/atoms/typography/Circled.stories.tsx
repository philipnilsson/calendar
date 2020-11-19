import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Circled } from './Circled';
import { Body } from './Body';
import { Small } from './Small';

export default {
  title: 'Atoms/Typography/Circled',
  component: Circled,
} as Meta;

const Template: Story<{ active: boolean, children: ReactNode }> =
  (args) => <Circled {...args} />;

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  children: <Body>6</Body>
}

export const Active = Template.bind({});
Active.args = {
  active: true,
  children: <Small>6</Small>
}
