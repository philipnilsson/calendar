import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { H1 } from './H1';

export default {
  title: 'Atoms/Typography/H2',
  component: H1,
} as Meta;

const Template: Story<{}> =
  (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'May, 2020'
}
