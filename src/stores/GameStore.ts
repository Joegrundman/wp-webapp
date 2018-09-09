import { URL_MAP_EUR, URL_MAP_PAC } from 'Constants/ui-constants'
import { observable } from 'mobx'

class GameStore {

  @observable public theater: string = URL_MAP_EUR
  @observable public showDialogPanel: boolean = false
  @observable public currentActiveDialog: string = ''

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

  public toggleDialogPanel (): void {
    this.showDialogPanel = !this.showDialogPanel
  }

  public openDialogPanel (): void {
    this.showDialogPanel = true
  }

  public handleDialogButton(dialog: string): void {
    if(this.showDialogPanel && this.currentActiveDialog !== dialog) {
      this.setCurrentActiveDialog(dialog)
    } else if(this.showDialogPanel && this.currentActiveDialog === dialog) {
      this.closeDialogPanel()
      this.setCurrentActiveDialog('')
    } else {
      this.openDialogPanel()
      this.setCurrentActiveDialog(dialog)
    }  
  }

  public closeDialogPanel (): void {
    this.showDialogPanel = false
  }

  public setCurrentActiveDialog (dialog: string): void {
    this.currentActiveDialog = dialog
  }
}

export default GameStore