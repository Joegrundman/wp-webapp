import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import DialogPanel, { IDialogPanelProps } from './DialogPanel'

describe('<DialogPanel />', () => {

 let mockGame: GameStore | null
 let defaultProps: IDialogPanelProps | null

  beforeEach(() => {
    mockGame = {
      currentActiveDialog: '' ,     
      showDialogPanel: '',
      theater: 'eur',
    }
    defaultProps = {
      store: mockGame
     }
  })

  it('should render as expected with defaultProps', () => {
    const component: ShallowWrapper = shallow(<DialogPanel {...defaultProps}/>)
    expect(component).toMatchSnapshot()
  })
})
