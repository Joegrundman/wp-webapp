import * as React from 'react'
import GameStore from 'Stores/GameStore'
import ShowShipyardButton from '../sidebuttons/ShowShipyardButton'
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
      </div>
    )
  }
}

export default Sidebar