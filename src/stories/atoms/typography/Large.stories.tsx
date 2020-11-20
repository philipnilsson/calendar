import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Large } from './Large';

export default {
  title: 'Atoms/Typography/Large',
  component: Large,
} as Meta;

const Template: Story<{}> =
  (args) => <Large {...args} />;

export const large = Template.bind({});
large.args = {
  children: 'Large text'
}
