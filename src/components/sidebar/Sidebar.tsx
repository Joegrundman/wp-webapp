import * as React from 'react'
import GameStore from 'Stores/GameStore'
import ShowForcepoolButton from '../sidebuttons/ShowForcepoolButton'
import ShowShipyardButton from '../sidebuttons/ShowShipyardButton'
import ShowTaskforceButton from '../sidebuttons/ShowTaskforceButton'
import SwitchTheaterButton from '../sidebuttons/SwitchTheaterButton'
import locals from './Sidebar.css'

interface ISidebarProps {
  store: GameStore
}
class Sidebar extends React.Component<ISidebarProps> {
  public render () {
    return (
      <div className={locals.container} >
        <SwitchTheaterButton store={this.props.store}/>
        <ShowShipyardButton store={this.props.store}/>
        <ShowTaskforceButton store={this.props.store}/>
        <ShowForcepoolButton store={this.props.store}/>
      </div>
    )
  }
}

export default Sidebar