import * as moment from 'moment'

export const DATE_FILTER_FORMAT: string = 'Y-MM-DD'
export const TIME_FILTER_FORMAT: string = 'HH:mm'
export const INPUT_DATE_FORMAT: string = 'YYYY-MM-DDTHH:mm'

/**
 * Creating a moment from a date object because we know that the format
 * of our date is an iso 8601 string. This is much faster than having
 * moment parse the string itself
 *
 * @param fmt
 * @param val
 */
export const format = (fmt: string, val?: string) => val
    ? moment(new Date(val)).format(fmt)
    : moment(new Date()).format(fmt)

/**
 * Standardized format for displaying time
 *
 * @param val
 */
export const formatTime = (val?: string) =>
    format(TIME_FILTER_FORMAT, val)

/**
 * Standardized format for displaying date
 *
 * @param val
 */
export const formatDate = (val?: string) =>
    format(DATE_FILTER_FORMAT, val)

/**
 * Format required for datetime-local html input type
 *
 * @param value
 */
export const formatDateForInput = (val: string) => {
    const formatted = format(INPUT_DATE_FORMAT, val)
    return formatted === 'Invalid date' ? val : formatted
}

/**
 * Convert a number into minutes
 *
 * @param time
 */
export const formatMinutes = (time: number) =>
    moment.duration(time, 'minute').asMinutes()

/**
 * Compare one date string with another
 *
 * @param a
 * @param b
 */
export const diff = (a: string, b: string) =>
    moment(new Date(a)).diff(moment(new Date(b)))

/**
 * Compare a datestring with the current time
 *
 * @param val
 */
export const diffNow = (val: string) =>
    moment(new Date(val)).diff(moment(new Date()))

/**
 * Convert a datestring into UTC
 *
 * @param val
 */
export const toUtc = (val: string) =>
    moment.utc(new Date(val)).format()

/**
 * Convert a datestring from UTC
 *
 * @param val
 */
export const fromUtc = (val: string) =>
    moment(new Date(val)).local().format()

/**
 * ISO string of current UTC datetime
 */
export const utcNow = () =>
    moment.utc().toISOString()

/**
 * Get the utc offset
 */
export const utcOffset = (): number =>
    moment.parseZone(new Date()).utcOffset()