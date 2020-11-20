import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { H1 } from './H1';

export default {
  title: 'Atoms/Typography/H1',
  component: H1,
} as Meta;

const Template: Story<{}> =
  (args) => <H1 {...args} />;

export const h1 = Template.bind({});
h1.args = {
  children: 'May, 2020'
}
