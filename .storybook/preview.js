import React from "react";
import { ThemeProvider } from 'styled-components';
import { light } from '../src/stories/theme/theme.ts'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={light}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
