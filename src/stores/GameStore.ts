import { URL_MAP_EUR, URL_MAP_PAC } from 'Constants/ui-constants'
import { observable } from 'mobx'

class GameStore {
  @observable public theater: string = URL_MAP_EUR

  public setTheater (theater: string): void {
    this.theater = theater
  }

  public toggleTheater (): void {
    if (this.theater === URL_MAP_EUR) {
      this.theater = URL_MAP_PAC
    } else {
      this.theater = URL_MAP_EUR
    }
  }
}

export default GameStore