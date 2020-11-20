import memoizee from "memoizee"
import { Calendar } from "./Calendar"
import { CalendarEvent } from "./CalendarEvent"

declare var gapi: any

const DISCOVERY_DOCS =
    ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']

const SCOPES =
    'https://www.googleapis.com/auth/calendar.readonly'

export const calendarAPI = new Promise<any>((resolve, reject) => {
    document.getElementById('gapi')!.onload = function() {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: process.env.REACT_APP_API_KEY,
                clientId: process.env.REACT_APP_CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(() => {
                resolve(gapi)
            }, reject)
        })
    }
})

export async function isLoggedIn() {
    return (await calendarAPI).auth2.getAuthInstance().isSignedIn.get()
}

export async function logOut() {
    (await calendarAPI).auth2.getAuthInstance().signOut()
}

export async function logIn() {
    (await calendarAPI).auth2.getAuthInstance().signIn()
    return new Promise(resolve => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(resolve)
    })
}

export const getEvents = memoizee(async (calendarId: string, dateFrom: string, dateTo: string): Promise<CalendarEvent[]> => {
    const api = await calendarAPI
    const results = await api.client.calendar.events.list({
        'calendarId': calendarId,
        'timeMin': dateFrom,
        'timeMax': dateTo,
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 100,
        'orderBy': 'startTime'
    })
    return results.result.items.map(CalendarEvent.fromGAPI)
})

export const loadCalendars = memoizee(async (): Promise<Calendar[]> => {
    const api =
        await calendarAPI
    const results =
        await api.client.calendar.calendarList.list()
    return results.result.items.map(Calendar.fromGAPI)
})
