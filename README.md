# Running the project

Edit the `.env` file in this project and add

```
PORT=8000
REACT_APP_CLIENT_ID=<ID>
REACT_APP_API_KEY=<KEY>
```

 * `PORT` your whitelisted localhost port.
 * `REACT_APP_CLIENT_ID` your  google calendar client id.
 * `REACT_APP_API_KEY` your api key for google calendar.

Then run...

### `yarn start`

...to run the app on localhost.

Click the "log in" button in the app header to log into your calendar.

# Additional features

## Atomic design system in storybook

`yarn run storybook` to start

## Weekly navigation

Navigate between weeks in the calendar.

## Scrolling

The app finds and scrolls to events in the calendar.

## Light / dark themes

Toggle in the UI

# State management

Using mobx. The MobX calsses most interesting w.r.t. test coverage.

There should be more tests :) No time!

# Limitations due to time

 * Loading / error states

 * Responsive design

 * No mocking out of the API and testing the main App component.
 
 * No Prettier / commit hooks etc
