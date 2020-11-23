import memoizee from "memoizee"
import { Calendar } from "../models/Calendar"
import { CalendarEvent } from "../models/CalendarEvent"

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

export const getEvents = memoizee(async (calendarID: string, dateFrom: string, dateTo: string): Promise<CalendarEvent[]> => {
    const api = await calendarAPI
    const results = await api.client.calendar.events.list({
        'calendarId': calendarID,
        'timeMin': dateFrom,
        'timeMax': dateTo,
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 100,
        'orderBy': 'startTime'
    })
    return results.result.items.map((result: any) =>
        CalendarEvent.fromGAPI(result, calendarID))
})

export const loadCalendars = memoizee(async (): Promise<Calendar[]> => {
    const api =
        await calendarAPI
    const results =
        await api.client.calendar.calendarList.list()
    return results.result.items.sort((x: any, y: any) => +!x.primary - +!y.primary).map(Calendar.fromGAPI)
})
