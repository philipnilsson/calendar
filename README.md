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

Then run

### `yarn start`

Run the app in a local environment


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

Using mobx. This is mostly what's interesting re: test coverage.

There should be more tests :) Running out of time.


