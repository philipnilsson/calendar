import { Calendar } from "../Calendar"

const calendar = Calendar.fromGAPI({
    colorId: 25,
    primary: true,
    id: 'abc123',
    summary: 'A calendar'
})

test('primary calendar starts active', () => {
    expect(calendar.active).toBe(true)
})

test('parses out summary field', () => {
    expect(calendar.title).toBe('A calendar')
})

test('toggle calendar active', () => {
    const c =
        new Calendar('id', 'title', 'green', false)

    expect(c.active).toBe(false)
    c.toggleActive()
    expect(c.active).toBe(true)
    c.toggleActive()
    expect(c.active).toBe(false)
})
