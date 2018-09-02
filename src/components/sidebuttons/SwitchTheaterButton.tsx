import switchTheaterImg from 'Assets/Buttons/switchTheaters.png'
import Sidebutton from 'Atoms/sidebutton/Sidebutton'
import * as React from 'react'
import GameStore from 'Stores/GameStore'

interface ISidebarProps {
  store: GameStore
}

const sidebuttons: React.SFC<ISidebarProps> = ({ store }): JSX.Element => {

  const handleAction = (): void => {
    store.toggleTheater()
  }

  return (
  <div>
    <Sidebutton image={switchTheaterImg} action={handleAction}/>
  </div>
)}

export default sidebuttons
