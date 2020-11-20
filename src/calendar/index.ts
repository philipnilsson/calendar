import { flow, makeAutoObservable } from 'mobx'
import { fromPromise } from "mobx-utils";
import { CalendarEventList } from './models/CalendarEventList';
import { Calendar } from './models/Calendar';
import { getEvents, loadCalendars, logIn, logOut, isLoggedIn } from './GAPI';
import { addDays, startOfDay } from 'date-fns';

class CalendarApp {
    isLoggedIn: boolean | undefined = undefined
    isDarkMode: boolean = false

    constructor(
        public date: Date = new Date(),
        public calendars: Calendar[] = [],
    ) {
        makeAutoObservable(this);
        this.init()
    }

    @flow * init() {
        if (yield isLoggedIn()) {
            this.isLoggedIn = true
            this.calendars = yield loadCalendars()
        }
    }

    private get events() {
        const upperLimit =
            addDays(this.date, 7).toISOString()

        const lowerLimit =
            this.date.toISOString()

        const requests = this.calendars
            .filter(c => c.active)
            .map(c => getEvents(c.id, lowerLimit, upperLimit))

        const allRequests =
            Promise.all(requests).then(x => new CalendarEventList(x.flat()))

        return fromPromise(allRequests)
    }

    get calendarEvents(): CalendarEventList {
        return this.events.case({
            pending: () => CalendarEventList.EMPTY,
            rejected: () => CalendarEventList.EMPTY,
            fulfilled: list => list
        })
    }

    logIn = async () => {
        await logIn()
        this.init()
    }

    logOut = () => {
        logOut()
        this.isLoggedIn = false
        this.calendars = []
    }

    toggleDarkMode = () => {
        this.isDarkMode = !this.isDarkMode
    }

    nextWeek = () => {
        this.date = addDays(this.date, 7)
    }

    previousWeek = () => {
        this.date = addDays(this.date, -7)
    }
}

export const calendarApp =
    new CalendarApp(startOfDay(new Date()))

