import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Bullet } from './Bullet';
import { H1 } from './H1';
import { Body } from './Body';

export default {
  title: 'Atoms/Typography/Bullet',
  component: Bullet,
} as Meta;

export const WithBody = () => <Body><Bullet /> Header!</Body>
export const WithHeader = () => <H1><Bullet /> Header!</H1>
