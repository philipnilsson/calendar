import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { dark, light } from './stories/theme/theme';
import { observer } from 'mobx-react-lite';
import { calendarPage } from './calendar/models/CalendarPage';

const Globals = createGlobalStyle`
  html {
    font-size: 15px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body { 
    margin: 0;
    padding: 0;
  }
`

const WithTheme = observer(({ children }) => {
  return (
    <ThemeProvider theme={calendarPage.isDarkMode ? dark : light}>
      {children}
    </ThemeProvider>
  )
})

ReactDOM.render(
  <React.StrictMode>
    <WithTheme>
      <Globals />
      <App />
    </WithTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
