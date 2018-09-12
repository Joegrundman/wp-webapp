import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import Sidebar from './Sidebar'

describe('<Sidebar />', (): void => {
  it('should render as expected', () => {
    const component: ShallowWrapper = shallow(<Sidebar store={new GameStore()} />)
    expect(component).toMatchSnapshot()
  })
})
