import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Small } from './Small';

export default {
  title: 'Atoms/Typography/Small',
  component: Small,
} as Meta;

const Template: Story<{}> =
  (args) => <Small {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>
    <b>Project planning</b>
    <div>9 — 10am</div>
  </div>
}
