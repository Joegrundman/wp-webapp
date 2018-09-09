import showTaskforceImg from 'Assets/Buttons/taskForces.png'
import Sidebutton from 'Atoms/sidebutton/Sidebutton'
import * as React from 'react'
import GameStore from 'Stores/GameStore'

interface ISidebarProps {
  store: GameStore
}

const ShowTaskforceBtn: React.SFC<ISidebarProps> = ({ store }): JSX.Element => {

  const handleAction = (): void => {
  store.handleDialogButton('taskforce')

  }

  return (
  <div>
    <Sidebutton image={showTaskforceImg} action={handleAction}/>
  </div>
)}

export default ShowTaskforceBtn
