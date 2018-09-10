import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
  it('should render as expected', () => {
    const component: ShallowWrapper = shallow(<Footer/>)
    expect(component).toMatchSnapshot()
  })
})