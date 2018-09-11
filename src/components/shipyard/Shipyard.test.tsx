import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import Shipyard from './Shipyard'

jest.mock('Wp/Game', () => ({
  getGame: jest.fn(() => ({
    setSelectedShipyard: jest.fn()
  }))
}))

jest.spyOn(document, 'getElementById').mockImplementation(() => {
  return {
    getBoundingClientRect: jest.fn(() => ({x: 20, y: 30})),
    getContext: jest.fn(() => ({
      beginPath: jest.fn(),
      closePath: jest.fn(),
      drawImage: jest.fn(),
      fillText: jest.fn(),
      lineTo: jest.fn(),
      moveTo: jest.fn(),
      stroke: jest.fn()
    }))
  }
})

describe('<Shipyard />', (): void => {
  describe('@render', (): void => {
    it('should render as expected with default props', () => {
      const component: ShallowWrapper = shallow(<Shipyard />)
      expect(component).toMatchSnapshot()
    })
  })

  describe('methods', (): void => {
    describe('decrementCurrentShipyard', (): void => {
      it('should decrement the currentShipyard', () => {
        const component: ShallowWrapper = shallow(<Shipyard />)
        const instance = component.instance() as Shipyard
        instance.setState({ currentShipyard: 5 })
        instance.decrementCurrentShipyard()
        expect(instance.state.currentShipyard).toBe(4)
      })

      it('should cycle the currentShipyard to the end of the list if at zero', () => {
        const component: ShallowWrapper = shallow(<Shipyard />)
        const instance = component.instance() as Shipyard
        instance.setState({ currentShipyard:  0})
        instance.decrementCurrentShipyard()
        expect(instance.state.currentShipyard).toBe(12)
      })
    })

    describe('incrementCurrentShipyard', (): void => {
      it('should increment the currentShipyard', () => {
        const component: ShallowWrapper = shallow(<Shipyard />)
        const instance = component.instance() as Shipyard
        instance.setState({ currentShipyard: 5 })
        instance.incrementCurrentShipyard()
        expect(instance.state.currentShipyard).toBe(6)
      })

      it('should cycle the currentShipyard to the start of the list if at the end', () => {
        const component: ShallowWrapper = shallow(<Shipyard />)
        const instance = component.instance() as Shipyard
        instance.setState({ currentShipyard:  12})
        instance.incrementCurrentShipyard()
        expect(instance.state.currentShipyard).toBe(0)
      })
    })
  })

})
