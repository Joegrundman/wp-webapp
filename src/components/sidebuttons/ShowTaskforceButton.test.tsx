import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import ShowTaskforceButton from './ShowTaskforceButton'

describe('<ShowTaskforceButton />', (): void => {
  const store: GameStore = new GameStore()

  it('should render as expected', () => {
    const component: ShallowWrapper = shallow(<ShowTaskforceButton store={store} />)
    expect(component).toMatchSnapshot()
  })

  it('should have an action that updates the store by setting the correct dialog', (): void => {
    store.handleDialogButton = jest.fn()

    const component: ShallowWrapper = shallow(<ShowTaskforceButton store={store} />)
    const action = component
      .find('Sidebutton').first().prop('action')
    // @ts-ignore
    action()

    expect(store.handleDialogButton).toHaveBeenCalledWith('taskforce')
  })
})
