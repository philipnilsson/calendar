import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Body } from './Body';

export default {
  title: 'Atoms/Typography/Body',
  component: Body,
} as Meta;

const Template: Story<{}> =
  (args) => <Body {...args} />;

export const body = Template.bind({});
body.args = {
  children: 'Work'
}
