import * as moment from 'moment'

export const DATE_FILTER_FORMAT: string = 'Y-MM-DD'
export const TIME_FILTER_FORMAT: string = 'HH:mm'

export const utcOffset = (): number =>
    moment.parseZone(new Date()).utcOffset()

// Createing a moment from a date object because we know that the format
// of our date is an iso 8601 string. This is much faster than having
// moment parse the string itself
const toMoment = (val: string) => moment(new Date(val))

export const format = (val: string, fmt: string) =>
    toMoment(val).format(fmt)

export const formatSafe = (val: string | null | undefined, fmt: string) =>
    typeof val === 'string' ? format(val, fmt) : ''

export const formatTime = (val: string) =>
    formatSafe(val, TIME_FILTER_FORMAT)

export const formatDate = (val: string) =>
    formatSafe(val, DATE_FILTER_FORMAT)

export const formatMinutes = (time: number) =>
    moment.duration(time, 'minute').asMinutes()

export const diff = (a: string, b: string) =>
    toMoment(a).diff(toMoment(b))

export const diffNow = (val: string) =>
    toMoment(val).diff(moment(new Date()))

export const toUtc = (val: string) =>
    moment.utc(new Date(val)).format()


// as far as I can tell this method is inferior to the one above
// export const withUtcOffset = (val: string) =>
//     moment(val).add(utcOffset() * -1, 'minutes').format()

export const fromUtc = (val: string) =>
    moment(new Date(val)).local().format()