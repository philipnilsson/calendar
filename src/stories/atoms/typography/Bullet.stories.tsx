import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Bullet } from './Bullet';
import { H1 } from './H1';
import { Body } from './Body';

export default {
  title: 'Atoms/Typography/Bullet',
  component: Bullet,
} as Meta;

export const WithBody: Story<{ color: string }> = (args: any) => (
  <Body>
    <Bullet {...args} /> Header!
  </Body>
)

WithBody.args = {
  color: 'green'
}

export const WithHeader: Story<{ color: string }> = (args: any) =>
  <H1><Bullet {...args} /> Header!</H1>

WithHeader.args = {
  color: 'red'
}

