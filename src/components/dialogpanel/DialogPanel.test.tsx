import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import DialogPanel, { IDialogPanelProps } from './DialogPanel'

describe('<DialogPanel />', () => {

 let mockGame: GameStore
 let defaultProps: IDialogPanelProps

  beforeEach(() => {
    mockGame = new GameStore()
    mockGame.openDialogPanel()
    defaultProps = {
      store: mockGame
     }
  })

  it('should render as expected with defaultProps', () => {
    const component: ShallowWrapper = shallow(<DialogPanel {...defaultProps}/>)
    expect(component).toMatchSnapshot()
  })

  it('should render as expected with currentActiveDialog set to shipyard', () => {
    mockGame.setCurrentActiveDialog('shipyard')
    const component: ShallowWrapper = shallow(<DialogPanel {...defaultProps}/>)
    expect(component).toMatchSnapshot()
  })

  it('should render as expected with showDialogPanel set to false', () => {
    mockGame.closeDialogPanel()
    const component: ShallowWrapper = shallow(<DialogPanel {...defaultProps}/>)
    expect(component).toMatchSnapshot()
  })

  it('should render as expected with currentActiveDialog set to taskforce', () => {
    mockGame.setCurrentActiveDialog('taskforce')
    const component: ShallowWrapper = shallow(<DialogPanel {...defaultProps}/>)
    expect(component).toMatchSnapshot()
  })

})
