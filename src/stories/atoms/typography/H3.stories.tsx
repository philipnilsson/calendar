import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { H3 } from './H3';

export default {
  title: 'Atoms/Typography/H3',
  component: H3,
} as Meta;

const Template: Story<{}> =
  (args) => <H3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'May, 2020'
}
