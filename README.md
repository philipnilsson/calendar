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

### Atomic design system in storybook

`yarn run storybook` to start

### Week navigation

Navigate between weeks in the calendar. Wasn't almost no extra work.

### Scrolling

The app finds and scrolls to events in the calendar.

### Light / dark themes

Toggle in the UI

# Architecture

### File strucutre

* `/stories` 
   
    Contains presentational components organized according to atomic design patterns

* `/calendar`
 
    A vertical slice for the calendar page.

### State management

Standard MobX. Helps with quicker prototyping compared to Redux.

### Styling

Styled components. Nothing unusual. TypeScript support for themes is
set up.

# Current limitations

 * No loading or error states

 * Not responsive design

 * No mocking out of the API and testing the main App component.
 
 * No Prettier / commit hooks etc
