import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

declare var gapi: any

const DISCOVERY_DOCS =
  ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

const SCOPES =
  'https://www.googleapis.com/auth/calendar.readonly';

async function requestCalendarEvents() {
  const response = await gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  })
  console.log('events!', response.result.items)
}

function initClient() {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: process.env.REACT_APP_API_KEY,
      clientId: process.env.REACT_APP_CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function() {
      if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
        gapi.auth2.getAuthInstance().signIn();
        gapi.auth2.getAuthInstance().isSignedIn.listen(requestCalendarEvents);
      } else {
        requestCalendarEvents()
      }
    }, function(error: any) {
      console.error(JSON.stringify(error, null, 2));
    });
  })
}

function CalendarApp() {
  React.useEffect(() => {
    window.addEventListener('load', initClient);
  }, [])
  return <App />
}

ReactDOM.render(
  <React.StrictMode>
    <CalendarApp />
  </React.StrictMode>,
  document.getElementById('root')
);
