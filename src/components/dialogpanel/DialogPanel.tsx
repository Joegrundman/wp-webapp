import { observer } from 'mobx-react'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import Shipyard from '../shipyard/Shipyard'
import Taskforce from '../taskforce/Taskforce'
import locals from './DialogPanel.css'

export interface IDialogPanelProps {
  store: GameStore
}

@observer
class DialogPanel extends React.Component<IDialogPanelProps> {

  public getDialog(): JSX.Element | '' {
    switch(this.props.store.currentActiveDialog) {
      case 'shipyard': return (<Shipyard />)
      case 'taskforce': return (<Taskforce />)
      default: return ''
    }
  }

  public render (): JSX.Element {
    const { showDialogPanel } = this.props.store
    return (
      <div className={locals.panel} style={{display: showDialogPanel ? '': 'none' }}>
        {this.getDialog()}
      </div> 
    )
  }
}

export default DialogPanel
