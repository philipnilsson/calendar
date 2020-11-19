import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Circled } from './Circled';
import { Large } from './Large';

export default {
  title: 'Atoms/Typography/Circled',
  component: Circled,
} as Meta;

const Template: Story<{ active: boolean, children: ReactNode }> =
  (args) => <Circled {...args} />;

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  children: <Large>6</Large>
}

export const Active = Template.bind({});
Active.args = {
  active: true,
  children: <Large>6</Large>
}
