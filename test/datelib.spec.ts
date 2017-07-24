import * as Datelib from '../datelib'

test('it formats time in hours', () => {

    const date = new Date().toISOString()
    console.log('date is', date)
    expect(Datelib.formatTime(date).length).toEqual(5)

})