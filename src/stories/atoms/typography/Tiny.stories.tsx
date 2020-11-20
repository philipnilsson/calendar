import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tiny } from './Tiny';

export default {
  title: 'Atoms/Typography/Tiny',
  component: Tiny,
} as Meta;

const Template: Story<{}> =
  (args) => <Tiny {...args} />;

export const tiny = Template.bind({});
tiny.args = {
  children: 'Tiny text'
}
