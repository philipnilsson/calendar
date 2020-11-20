import { flow, makeAutoObservable } from 'mobx'
import { fromPromise } from "mobx-utils";
import { CalendarEventList } from './CalendarEventList';
import { Calendar } from './Calendar';
import { getEvents, loadCalendars } from './GAPI';

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
            .map(c => getEvents(c.id, this.date.toISOString()))

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

    renderLabelAMPM = (hour: number): string => {
        if (hour >= 12) {
            return `${hour - 12 + 1} PM`
        }
        return `${hour + 1} AM`
    }
}

export const calendarApp =
    new CalendarApp()

