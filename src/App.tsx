import React from 'react';
import { CalendarPage } from './stories/pages/CalendarPage';
import { createGlobalStyle } from 'styled-components';
import { testMenu, testRenderCalendarLabel, testRenderCalendarHeader, testRenderCalendarEntry } from './stories/helpers';

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

function App() {
  return (
    <div>
      <Globals />
      <CalendarPage
        items={testMenu}
        renderCalendarEntry={testRenderCalendarEntry}
        renderCalendarLabel={testRenderCalendarLabel}
        renderCalendarHeader={testRenderCalendarHeader}
      />
    </div>
  );
}

export default App;
