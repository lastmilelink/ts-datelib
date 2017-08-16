import * as moment from 'moment'

export const DATE_FILTER_FORMAT: string = 'Y-MM-DD'
export const TIME_FILTER_FORMAT: string = 'HH:mm'
export const INPUT_DATE_FORMAT: string = 'YYYY-MM-DDTHH:mm'

export const utcOffset = (): number =>
    moment.parseZone(new Date()).utcOffset()

// Creating a moment from a date object because we know that the format
// of our date is an iso 8601 string. This is much faster than having
// moment parse the string itself
export const toMoment = (val: string) => moment(new Date(val))

export const format = (val: string, fmt: string) =>
    moment(new Date(val)).format(fmt)

export const formatSafe = (val: string|null|undefined, fmt: string) =>
    typeof val === 'string' ? format(val, fmt) : ''

export const formatTime = (val: string) =>
    formatSafe(val, TIME_FILTER_FORMAT)

export const formatDate = (val: string) =>
    formatSafe(val, DATE_FILTER_FORMAT)

export const formatMinutes = (time: number) =>
    moment.duration(time, 'minute').asMinutes()

export const diff = (a: string, b: string) =>
    moment(new Date(a)).diff(moment(new Date(b)))

export const diffNow = (val: string) =>
    moment(new Date(val)).diff(moment(new Date()))

export const toUtc = (val: string) =>
    moment.utc(new Date(val)).format()

export const fromUtc = (val: string) =>
    moment(new Date(val)).local().format()

export const utcNow = () =>
    moment.utc().toISOString()
/**
 * Format required for datetime-local html input type
 *
 * @param value
 */
export const formatDateForInput = (value: string) => {
    const formatted = moment(new Date(value)).format(INPUT_DATE_FORMAT)
    return formatted === 'Invalid date' ? value : formatted
}