import showShipyardImg from 'Assets/Buttons/shipyards.png'
import Sidebutton from 'Atoms/sidebutton/Sidebutton'
import * as React from 'react'
import GameStore from 'Stores/GameStore'

interface ISidebarProps {
  store: GameStore
}

const ShowShipyardBtn: React.SFC<ISidebarProps> = ({ store }): JSX.Element => {

  const handleAction = (): void => {
    store.toggleTheater()
  }

  return (
  <div>
    <Sidebutton image={showShipyardImg} action={handleAction}/>
  </div>
)}

export default ShowShipyardBtn
