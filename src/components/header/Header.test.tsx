import { shallow } from 'enzyme'
import * as React from 'react'
import Header from './Header'

describe('Header', () => {
  it('should render as expected', () => {
    const component = shallow(<Header />)
    expect(component).toMatchSnapshot()
  })
})