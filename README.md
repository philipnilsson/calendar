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

Navigate between weeks in the calendar.

### Scrolling

The app finds and scrolls to events in the calendar.

### Light / dark themes

Toggle in the UI. Mostly for fun, and because it's a good sanity check for 
well structured styling. The dark theme is not a serious design attempt :)

# Architecture

### File strucutre

* `/stories` 
   
    Contains presentational components organized according to the atomic design principles

* `/calendar`
 
    A vertical slice for the calendar page.

* `/calendar/models`
   
   Domain models (typically observable via MobX)
   
* `/calendar/services`

    The Google Calendar API service.

### Language

I always use TypeScript unless there's a specific
reason. Just more productive with types.

### State management

Standard MobX. Helps with quicker prototyping compared to Redux.

### Styling

Styled components. Nothing unusual. TypeScript support for themes is
set up, so everything type safe.

### Other dependencies

 - mobx-utils. Utilities for MobX. Used for "observable" promises.
 - memoizee: Memoizing API calls
 - date-fns: Functional date library

# Current limitations

 * Not pixel perfect. Can spend more time here if desired.
 
 * Will add a couple of tests before calling it done
 
 * No loading or error states

 * No responsive design

 * Hard dependency on the google calendar service
 
 * No Prettier / commit hooks etc
