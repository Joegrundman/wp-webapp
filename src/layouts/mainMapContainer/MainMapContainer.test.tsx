import { shallow } from 'enzyme'
import * as React from 'react'
import MainMapContainer from './MainMapContainer'

describe('<MainMapContainer />', () => {
  it('should render as expected', () => {
    const component = shallow(<MainMapContainer />)
    expect(component).toMatchSnapshot()
  })
})