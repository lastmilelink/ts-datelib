import * as Datelib from '../datelib'

test('it formats time in hours', () => {
    const date = new Date().toISOString()

    expect(Datelib.formatTime(date).length).toEqual(5)

})


test('it converts from utc to bst and back', () => {
    const date = new Date().toISOString()

    const utc = Datelib.toUtc(date)
    //console.log('utc is', utc)
    const bst = Datelib.fromUtc(utc)
    //console.log('bst is', bst)
    const newUtc = Datelib.toUtc(bst)
    //console.log('newUtc is', newUtc)

    expect(utc).toEqual(newUtc)
})