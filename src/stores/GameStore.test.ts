import { URL_MAP_EUR, URL_MAP_PAC } from 'Constants/ui-constants'
import GameStore from './GameStore'


describe('GameStore', (): void => {
  let store: GameStore
  beforeEach((): void => {
    store = new GameStore
  })

  it('should be able to set the theater', (): void => {
    store.setTheater('pac')
    expect(store.theater).toBe('pac')
  })

  it('should be able to toggle between theaters', (): void => {
    store.toggleTheater()
    expect(store.theater).toBe(URL_MAP_PAC)
    store.toggleTheater()
    expect(store.theater).toBe(URL_MAP_EUR)
  })

  it('should toggleDialogPanels', (): void => {
    expect(store.showDialogPanel).toBe(false)
    store.toggleDialogPanel()
    expect(store.showDialogPanel).toBe(true)
    store.toggleDialogPanel()
    expect(store.showDialogPanel).toBe(false)
  })

  it('should openDialogPanel', (): void => {
    store.openDialogPanel()
    expect(store.showDialogPanel).toBe(true)
  })

  it('should closeDialogPanel', (): void => {
    store.openDialogPanel()
    expect(store.showDialogPanel).toBe(true)
    store.closeDialogPanel()
    expect(store.showDialogPanel).toBe(false)
  })

  it('should setCurrentActiveDialog', (): void => {
    expect(store.currentActiveDialog).toBe('')
    store.setCurrentActiveDialog('shipyard')
    expect(store.currentActiveDialog).toBe('shipyard')
  })

  describe('handleDialogButton', (): void => {
    it('should open with correct dialog if closed', (): void => {
      expect(store.currentActiveDialog).toBe('')
      expect(store.showDialogPanel).toBe(false)
      store.handleDialogButton('shipyard')
      expect(store.currentActiveDialog).toBe('shipyard')
      expect(store.showDialogPanel).toBe(true)
    })

    it('should stay open but show new dialog if currently open but called with different dialog', (): void => {
      store.handleDialogButton('shipyard')
      expect(store.currentActiveDialog).toBe('shipyard')
      expect(store.showDialogPanel).toBe(true)
      store.handleDialogButton('taskforce')
      expect(store.currentActiveDialog).toBe('taskforce')
      expect(store.showDialogPanel).toBe(true)
    })

    it('should close if called with the same dialog', (): void => {
      store.handleDialogButton('shipyard')
      expect(store.currentActiveDialog).toBe('shipyard')
      expect(store.showDialogPanel).toBe(true)
      store.handleDialogButton('shipyard')
      expect(store.currentActiveDialog).toBe('')
      expect(store.showDialogPanel).toBe(false)
    })

  })
})