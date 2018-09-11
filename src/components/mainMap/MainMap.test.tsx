import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import MainMap, { IMainMapProps, IMainMapState } from './MainMap'

describe('<MainMap/>', (): void => {

  jest.spyOn(document, 'getElementById').mockImplementation(() => {
    return {
      getBoundingClientRect: jest.fn(() => ({x: 20, y: 30})),
      getContext: jest.fn(() => ({
        drawImage: jest.fn()
      }))
    }
  })

  const defaultProps = {
    getMapContext: jest.fn(),
    url: 'eur',  
  }
  const shallowComponent = (props: IMainMapProps): ShallowWrapper =>
    shallow(<MainMap {...props}/>)

  describe('@render', (): void => {
    it('should render as expected with defaultProps', (): void => {
      const component: ShallowWrapper = shallowComponent(defaultProps)
      expect(component).toMatchSnapshot();
    })

    it('should render as expected with exact height and width in state', (): void => {
      const component: ShallowWrapper = shallowComponent(defaultProps)
      component.setState({
        height: 300,
        width: 500
      })
      expect(component).toMatchSnapshot();
    })
  })

  describe('@lifecycle', (): void => {
    describe('componentDidUpdate', (): void => {
      it('should call updateMap if the passed in url differs from the current url', (): void => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: MainMap = component.instance() as MainMap
        instance.updateMap = jest.fn()
        instance.componentDidUpdate({ ...defaultProps, url: 'pac' })
        expect(instance.updateMap).toHaveBeenCalled()
      })

      it('should not call updateMap if the passed in url is the same as current url', (): void => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance: MainMap = component.instance() as MainMap
        instance.updateMap = jest.fn()
        instance.componentDidUpdate({ ...defaultProps })
        expect(instance.updateMap).not.toHaveBeenCalled()
      })
    })
  })

  describe('@methods', (): void => {

    describe('onMapLoad', (): void => {
   
      it('should set the image height and width on the state after the image load is successful', (): IMainMapState => {
        
        const component: ShallowWrapper = shallowComponent({ ...defaultProps });
        const instance: MainMap = component.instance() as MainMap
        instance.image = new Image()
        instance.image.height = 40
        instance.image.width = 50
        instance.onMapLoad();
        return expect(instance.state).toEqual({
          height: 40,
          width: 50
        })

      })

      it('should then call getMapContext with the correct payload', () => {
        defaultProps.getMapContext.mockClear()
        const component: ShallowWrapper = shallowComponent({ ...defaultProps });
        const instance: MainMap = component.instance() as MainMap
        instance.image = new Image()
        instance.image.height = 40
        instance.image.width = 50
        instance.mapCanvas  = { height: 40, width: 40 } as HTMLCanvasElement
        instance.mapCtx = { fillStyle: '#000000' } as CanvasRenderingContext2D
        instance.onMapLoad();
        return expect(defaultProps.getMapContext).toHaveBeenCalledWith(
          { height: 40, width: 40 },
          { fillStyle: '#000000'},
          { rect: { x: 20, y: 30 } })      
      })
    })
  })
})
