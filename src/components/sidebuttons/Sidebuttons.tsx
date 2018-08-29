import switchTheaterImg from 'Assets/Buttons/switchTheaters.png'
import Sidebutton from 'Atoms/sidebutton/Sidebutton'
import * as React from 'react'

const handleAction = () => {
  console.log('switchtheater')
}

const sidebuttons: React.SFC = () => (
  <div>
    <Sidebutton image={switchTheaterImg} action={handleAction}/>
  </div>
)

export default sidebuttons
