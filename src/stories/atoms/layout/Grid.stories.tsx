import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid, GridProps } from './Grid';

export default {
  title: 'Atoms/Layout/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> =
  (args) => (
    <Grid {...args} />
  );

export const View = Template.bind({});
View.args = {
  rows: 3,
  cols: 3,
  renderCell: (i, j) =>
    <div style={{ padding: '1em' }}>
      {i + ' — ' + j}
    </div>
}
