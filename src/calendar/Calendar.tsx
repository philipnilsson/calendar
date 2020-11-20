import { makeAutoObservable } from "mobx"

const COLORS =
  ['green', 'red', 'blue', 'purple']

type GAPICalendar = {
  id: string,
  summary: string,
  colorId: number,
  primary: boolean | undefined
}

export class Calendar {
  constructor(
    public id: string,
    public title: string,
    public color: string,
    public active: boolean,
  ) {
    makeAutoObservable(this)
  }

  toggleActive = () => {
    this.active = !this.active
  }

  static fromGAPI(c: GAPICalendar) {
    return new Calendar(
      c.id,
      c.summary,
      COLORS[c.colorId % COLORS.length],
      !!c.primary
    )
  }
}
