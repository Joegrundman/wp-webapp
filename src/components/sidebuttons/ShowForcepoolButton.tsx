import showForcepoolImg from 'Assets/Buttons/forcepool.png'
import Sidebutton from 'Atoms/sidebutton/Sidebutton'
import * as React from 'react'
import GameStore from 'Stores/GameStore'

interface ISidebarProps {
  store: GameStore
}

const ShowForcepoolBtn: React.SFC<ISidebarProps> = ({ store }): JSX.Element => {

  const handleAction = (): void => {
    store.handleDialogButton('forcepool')   
  }

  return (
  <div>
    <Sidebutton image={showForcepoolImg} action={handleAction}/>
  </div>
)}

export default ShowForcepoolBtn
