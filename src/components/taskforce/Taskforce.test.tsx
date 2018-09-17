import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import Taskforce from './Taskforce'


jest.mock('Wp/Game', () => ({
  getGame: jest.fn(() => ({
    setSelectedTaskforce: jest.fn()
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

describe('<Taskforce />', (): void => {
  describe('@render', (): void => {
    it('should render as expected with default props', () => {
      const component: ShallowWrapper = shallow(<Taskforce />)
      expect(component).toMatchSnapshot()
    })
  })

  describe('methods', (): void => {
    describe('changeTaskforceOwnerBack', (): void => {
      it('should move to the previous country', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentTaskforceOwner: 3 })
        instance.changeTaskforceOwnerBack()
        expect(instance.state.currentTaskforceOwner).toBe(2)
      })

      it('should cycle the currentTaskforceOwner to the end of the list if at zero', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentTaskforceOwner:  0})
        instance.changeTaskforceOwnerBack()
        expect(instance.state.currentTaskforceOwner).toBe(6)
      })
    })

    describe('changeTaskforceOwnerForward', (): void => {
      it('should increment the currentTaskforceOwner', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentTaskforceOwner: 5 })
        instance.changeTaskforceOwnerForward()
        expect(instance.state.currentTaskforceOwner).toBe(6)
      })

      it('should cycle the currentTaskforceOwner to the start of the list if at the end', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentTaskforceOwner:  6})
        instance.changeTaskforceOwnerForward()
        expect(instance.state.currentTaskforceOwner).toBe(0)
      })
    })
  })
})