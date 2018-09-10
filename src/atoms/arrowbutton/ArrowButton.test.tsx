import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import ArrowButton, { IArrowButtonProps } from './ArrowButton'

describe('<ArrowButton/>', () => {
  const defaultProps: IArrowButtonProps = {
    action: jest.fn(),
    direction: '',
  }

  it('should render as expected with default props', () => {
    const component: ShallowWrapper = shallow(<ArrowButton {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  it('should render as expected with direction right', () => {
    const props: IArrowButtonProps = {...defaultProps, direction: 'right'}
    const component: ShallowWrapper = shallow(<ArrowButton {...props} />)
    expect(component).toMatchSnapshot()
  })

  it('should render as expected with direction left', () => {
    const props: IArrowButtonProps = {...defaultProps, direction: 'left'}
    const component: ShallowWrapper = shallow(<ArrowButton {...props} />)
    expect(component).toMatchSnapshot()
  })

  it('should have an action that is triggered when clicked', () => {
    const component: ShallowWrapper = shallow(<ArrowButton {...defaultProps} />)
    component.find('button').first().simulate('click')
    expect(defaultProps.action).toHaveBeenCalled()
  })
})
