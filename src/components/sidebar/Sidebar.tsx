import * as React from 'react'
import Sidebuttons from '../sidebuttons/Sidebuttons'
import locals from './Sidebar.css'

class Sidebar extends React.Component {
  public render () {
    return (
      <div className={locals.container} >
        <Sidebuttons />
      </div>
    )
  }
}

export default Sidebar