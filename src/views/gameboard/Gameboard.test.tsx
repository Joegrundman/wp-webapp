import { URL_MAP_PAC } from 'Constants/ui-constants'
import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import Gameboard, { IGameProps } from './Gameboard'

jest.mock('Wp/Game', () => ({
  getGame: () => ({
    switchTheaters: jest.fn()
  })
}))

jest.mock('Init/init', () => ({
  initialize: jest.fn()
}))


describe('<Gameboard />', (): void => {
  let store: GameStore
  let defaultProps: any

  const shallowComponent = (props: IGameProps): ShallowWrapper => shallow(<Gameboard {...props} />)

  beforeEach((): void => {
    store = new GameStore()
    defaultProps = {
      store
    }
  })

  describe('@render', (): void => {
    it('should render as expected in the default state', (): void => {
      const component: ShallowWrapper = shallowComponent(defaultProps)
      expect(component).toMatchSnapshot()
    })

    it('should render as expected with different theater', (): void => {
      store.toggleTheater()
      const component: ShallowWrapper = shallowComponent(defaultProps)
      expect(component).toMatchSnapshot()
    })

    it('should render as expected with canvas dimensions set on the state', (): void => {
      const component: ShallowWrapper = shallowComponent(defaultProps)
      component.setState({
        windowHeight: 300,
        windowWidth: 500,
      })
      expect(component).toMatchSnapshot()
    })
  })

  describe('@lifecycle', (): void => {
    describe('componentDidMount', (): void => {
      it('should call updateWindowDimensions and set a resize eventlistener', () => {
        const mockEvent: jest.SpyInstance<any> = jest.spyOn(window, 'addEventListener')
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: Gameboard = component.instance() as Gameboard
        instance.updateWindowDimensions = jest.fn()
        instance.componentDidMount()
        expect(instance.updateWindowDimensions).toHaveBeenCalled()
        expect(mockEvent.mock.calls[0][0]).toBe('resize')
      })
    })

    describe('componentWillUnmount', (): void => {
      it('should remove the resize event listener', (): void => {
        const mockEvent: jest.SpyInstance<any> = jest.spyOn(window, 'removeEventListener')
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: Gameboard = component.instance() as Gameboard
        instance.componentWillUnmount()
        expect(mockEvent.mock.calls[0][0]).toBe('resize')
      })
    })
  })

  describe('@methods', (): void => {
    describe('updateWindowDimensions', (): void => {
      it('should update the state with the window dimensions', (): void => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        component.setState({
          windowHeight: 40,
          windowWidth: 20,
        })
        const instance: Gameboard = component.instance() as Gameboard
        instance.updateWindowDimensions()
        expect(instance.state).toEqual({
          initialized: false,
          windowHeight: 768,
          windowWidth: 1024
        })
      })
    })

    describe('toggleTheater', (): void => {
      it('should remove map events', (): void => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: Gameboard = component.instance() as Gameboard
        instance.removeMapEvents = jest.fn()
        instance.toggleTheater()
        expect(instance.removeMapEvents).toHaveBeenCalled()
      })

      it('should toggle the theater on the store', (): void => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: Gameboard = component.instance() as Gameboard
        instance.removeMapEvents = jest.fn()
        instance.toggleTheater()
        expect(store.theater).toBe(URL_MAP_PAC)
      })
    })

    describe('getMapContext', (): void => {
      it('should  call switchTheaters and attachMapEvents if already initialized', () => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: Gameboard = component.instance() as Gameboard
        instance.attachMapEvents = jest.fn()
        
        // @ts-ignore
        instance.game = {
          switchTheaters: jest.fn()
        }
        component.setState({
          initialized: true
        })
        // @ts-ignore
        instance.getMapContext({}, {}, {});
        expect(instance.game.switchTheaters).toHaveBeenCalled();
        expect(instance.attachMapEvents).toHaveBeenCalled()
      })

      it('should create a gameInstance, attack Map and KeyboardEvents and setstate initialized if not already initialized', (): void => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: Gameboard = component.instance() as Gameboard
        instance.attachMapEvents = jest.fn()
        instance.attachKeyboardEvents = jest.fn()
        // @ts-ignore
        instance.getMapContext({}, {}, {});
        expect(instance.attachMapEvents).toHaveBeenCalled()
        expect(instance.attachKeyboardEvents).toHaveBeenCalled()
        expect(instance.state.initialized).toBe(true)          
      })

      it('should do nothing if the game is initialised but there is not game instance', (): void => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: Gameboard = component.instance() as Gameboard
        instance.attachMapEvents = jest.fn()
        instance.attachKeyboardEvents = jest.fn()
        // @ts-ignore
        instance.game = null
        component.setState({
          initialized: true
        })
        expect(instance.attachKeyboardEvents).not.toHaveBeenCalled()
        expect(instance.attachMapEvents).not.toHaveBeenCalled()
      })
    })

    describe('attachKeyboardEvents', (): void => {
    
      it('should attach keyboard events', (): void => {
        const mockEvent = jest.spyOn(window, 'addEventListener')
        const component = shallowComponent(defaultProps)
        const instance = component.instance() as Gameboard
        mockEvent.mockClear()
        instance.attachKeyboardEvents()
        expect(mockEvent.mock.calls[0][0]).toBe('keydown')
        expect(mockEvent.mock.calls[1][0]).toBe('keyup')
      })
    })

    describe('attachMapEvents', (): void => {
      let component: ShallowWrapper
      let instance: Gameboard
      beforeEach((): void => {
        component = shallowComponent(defaultProps)
        instance = component.instance() as Gameboard
        // @ts-ignore
        instance.mapCanvas = {
          addEventListener: jest.fn()
        }
        // @ts-ignore
        instance.game = {
          currentMap: {
            
            // @ts-ignore
            mapCanvas: null,
            onDoubleClick: {
              // @ts-ignore
              bind: jest.fn()
            },
            onMouseDown: {
              // @ts-ignore
              bind: jest.fn()
            },
            onMouseMove: {
              // @ts-ignore
              bind: jest.fn()
            },     
            onMouseUp: {
              // @ts-ignore
              bind: jest.fn()
            },
            onScroll: {
              // @ts-ignore
              bind: jest.fn()
            }
          }
        }
        // @ts-ignore
        instance.mainMapContainer = {
          // @ts-ignore
          current: {
            addEventListener: jest.fn()
          }
        }
      })

      it('should add eventListeners to mapCanvas', () => {
        instance.attachMapEvents()
        expect(instance.mapCanvas.addEventListener).toHaveBeenCalledWith('mousemove', undefined, false)
        expect(instance.mapCanvas.addEventListener).toHaveBeenCalledWith('mousedown', undefined, false)
        expect(instance.mapCanvas.addEventListener).toHaveBeenCalledWith('mouseup', undefined, false)
        expect(instance.mapCanvas.addEventListener).toHaveBeenCalledWith('dblclick', undefined, false)
      })

      it('should add scroll listener to mapcontainer if it is the current', () => {
        instance.attachMapEvents()
        // @ts-ignore
        expect(instance.mainMapContainer.current.addEventListener)
          .toHaveBeenCalledWith('scroll', undefined, true)
      })
    })

    describe('removeMapEvents', (): void => {
      let component: ShallowWrapper
      let instance: Gameboard
      beforeEach((): void => {
        component = shallowComponent(defaultProps)
        instance = component.instance() as Gameboard
        // @ts-ignore
        instance.mapCanvas = {
          removeEventListener: jest.fn()
        }
        // @ts-ignore
        instance.game = {
          currentMap: {
            // @ts-ignore
            mapCanvas: null
          }
        }
        // @ts-ignore
        instance.mainMapContainer = {
          // @ts-ignore
          current: {
            removeEventListener: jest.fn()
          }
        }
      })

      it('should remove eventListeners from mapCanvas', () => {
        instance.removeMapEvents()
        expect(instance.mapCanvas.removeEventListener).toHaveBeenCalledWith('mousemove', undefined, false)
        expect(instance.mapCanvas.removeEventListener).toHaveBeenCalledWith('mousedown', undefined, false)
        expect(instance.mapCanvas.removeEventListener).toHaveBeenCalledWith('mouseup', undefined, false)
        expect(instance.mapCanvas.removeEventListener).toHaveBeenCalledWith('dblclick', undefined, false)
      })

      it('should remove scroll listener from mapcontainer if it is the current', () => {
        instance.removeMapEvents()
        // @ts-ignore
        expect(instance.mainMapContainer.current.removeEventListener)
          .toHaveBeenCalledWith('scroll', undefined, true)
      })
    })
  })
})
