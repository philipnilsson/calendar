import { observer } from 'mobx-react-lite';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { calendarApp } from './calendar';

const CalendarApp = observer(() => {
  return <App calendars={calendarApp.calendars.map(c => ({
    title: c.summary,
    color: ['green', 'red', 'blue'][c.colorId % 3],
    active: true
  }))} />
})

ReactDOM.render(
  <React.StrictMode>
    <CalendarApp />
  </React.StrictMode>,
  document.getElementById('root')
);
