import { flow, makeAutoObservable } from 'mobx'
import { fromPromise } from "mobx-utils";
import { CalendarEventList } from './CalendarEventList';
import { Calendar } from './Calendar';
import { getEvents, loadCalendars } from './GAPI';
import { addDays, startOfDay } from 'date-fns';

class CalendarApp {
    constructor(
        public date: Date = new Date(),
        public calendars: Calendar[] = [],
    ) {
        makeAutoObservable(this);
        this.init()
    }

    @flow * init() {
        this.calendars = yield loadCalendars()
    }

    get events() {
        const requests = this.calendars
            .filter(c => c.active)
            .map(c => getEvents(
                c.id,
                this.date.toISOString(),
                addDays(this.date, 7).toISOString()
            ))

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

    nextWeek = () => {
        this.date =
            addDays(this.date, 7)
    }

    previousWeek = () => {
        this.date =
            addDays(this.date, -7)
    }
}

export const calendarApp =
    new CalendarApp(startOfDay(new Date()))


    ; (window as any).calendarApp = calendarApp
