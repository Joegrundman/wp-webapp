import { observer } from 'mobx-react'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import locals from './DialogPanel.css'

interface IDialogPanelProps {
  store: GameStore
}

@observer
class DialogPanel extends React.Component<IDialogPanelProps> {

  public render (): JSX.Element {
    const { showDialogPanel } = this.props.store
    return (
      <div className={locals.panel} style={{display: showDialogPanel ? '': 'none' }}>
        {this.props.children}
      </div> 
    )
  }
}

export default DialogPanel
