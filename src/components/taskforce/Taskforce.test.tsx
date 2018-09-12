import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import Taskforce from './Taskforce'

describe('<Taskforce />', (): void => {
  describe('@render', (): void => {
    it('should render as expected with default props', () => {
      const component: ShallowWrapper = shallow(<Taskforce />)
      expect(component).toMatchSnapshot()
    })
  })

  describe('methods', (): void => {
    describe('changeCountryBack', (): void => {
      it('should move to the previous country', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentCountry: 3 })
        instance.changeCountryBack()
        expect(instance.state.currentCountry).toBe(2)
      })

      it('should cycle the currentCountry to the end of the list if at zero', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentCountry:  0})
        instance.changeCountryBack()
        expect(instance.state.currentCountry).toBe(6)
      })
    })

    describe('changeCountryForward', (): void => {
      it('should increment the currentCountry', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentCountry: 5 })
        instance.changeCountryForward()
        expect(instance.state.currentCountry).toBe(6)
      })

      it('should cycle the currentCountry to the start of the list if at the end', () => {
        const component: ShallowWrapper = shallow(<Taskforce />)
        const instance = component.instance() as Taskforce
        instance.setState({ currentCountry:  6})
        instance.changeCountryForward()
        expect(instance.state.currentCountry).toBe(0)
      })
    })
  })
})