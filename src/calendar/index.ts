import React from "react";
import { makeAutoObservable } from 'mobx'

declare var gapi: any

const DISCOVERY_DOCS =
    ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

const SCOPES =
    'https://www.googleapis.com/auth/calendar.readonly';

let calendarAPI = new Promise<any>((resolve, reject) => {
    document.getElementById('gapi')!.onload = function() {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: process.env.REACT_APP_API_KEY,
                clientId: process.env.REACT_APP_CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(() => {
                if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
                    gapi.auth2.getAuthInstance().signIn();
                    gapi.auth2.getAuthInstance().isSignedIn.listen(() => resolve(gapi));
                } else {
                    resolve(gapi)
                }
            }, reject)
        })
    }
})

type Calendar = {
    id: string,
    summary: string,
    colorId: number
}

class CalendarApi {
    calendars: Calendar[] = []

    constructor() {
        makeAutoObservable(this);
        (async () => {
            const api = await calendarAPI
            const { result: { items: calendarItems } } =
                await api.client.calendar.calendarList.list()
            this.calendars = calendarItems
        })()
    }
}

export const calendarApp =
    new CalendarApi()

// async function requestCalendarEvents(date = new Date()) {
//     const { result: { items: calendarItems } } =
//         await gapi.client.calendar.calendarList.list()

//     const response = await gapi.client.calendar.events.list({
//         'calendarId': calendarItems[1].id,
//         'timeMin': date.toISOString(),
//         'showDeleted': false,
//         'singleEvents': true,
//         'maxResults': 10,
//         'orderBy': 'startTime'
//     })
//     console.log('events!', response.result.items)
//     return calendarItems
// }


// export function useCalendars() {
//     const [calendars, setCalendars] =
//         React.useState<null | Calendar>(null)

//     React.useEffect(() => {
//         (async () => {
//         })()
//     })
// }
