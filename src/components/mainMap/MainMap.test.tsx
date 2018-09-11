import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import MainMap, { IMainMapProps } from './MainMap'

describe('<MainMap/>', () => {

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

  describe('@render', () => {
    it('should render as expected with defaultProps', () => {
      const component = shallowComponent(defaultProps)
      expect(component).toMatchSnapshot();
    })

    it('should render as expected with exact height and width in state', () => {
      const component = shallowComponent(defaultProps)
      component.setState({
        height: 300,
        width: 500
      })
      expect(component).toMatchSnapshot();
    })
  })

  describe('@lifecycle', () => {
    describe('componentDidUpdate', () => {
      it('should call updateMap if the passed in url differs from the current url', () => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance = component.instance() as MainMap
        instance.updateMap = jest.fn()
        instance.componentDidUpdate({ ...defaultProps, url: 'pac' })
        expect(instance.updateMap).toHaveBeenCalled()
      })

      it('should not call updateMap if the passed in url is the same as current url', () => {
        const component: ShallowWrapper = shallowComponent(defaultProps)
        const instance = component.instance() as MainMap
        instance.updateMap = jest.fn()
        instance.componentDidUpdate({ ...defaultProps })
        expect(instance.updateMap).not.toHaveBeenCalled()
      })
    })
  })
})
