import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import SideButton from './Sidebutton'

describe('<SideButton/>', () => {
  const defaultProps = {
    action: jest.fn(),
    image: 'mockImg',
  }

  it('should render as expected with default props', () => {
    const component: ShallowWrapper = shallow(<SideButton {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  it('should have an action that is triggered when clicked', () => {
    const component: ShallowWrapper = shallow(<SideButton {...defaultProps} />)
    component.find('button').first().simulate('click')
    expect(defaultProps.action).toHaveBeenCalled();
  })
})
