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

* `/calendar/models`
   
   Domain models (typically observable via MobX)
   
* `/calendar/services`

    The Google Calendar API service.

### Language

I always use TypeScript unless there's a specific
reason. Productivity++.

### State management

Standard MobX. Helps with quicker prototyping compared to Redux.

### Styling

Styled components. Nothing unusual. TypeScript support for themes is
set up, so everything type safe.

# Current limitations

 * Will add a couple of tests before calling it done
 
 * No loading or error states

 * No responsive design

 * Hard dependency on the google calendar service
 
 * No Prettier / commit hooks etc
