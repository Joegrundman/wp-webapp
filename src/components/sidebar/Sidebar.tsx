import * as React from 'react'
import locals from './Sidebar.css'

class Sidebar extends React.Component {
  public render () {
    return (
      <div className={locals.container} >
        {this.props.children}
      </div>
    )
  }
}

export default Sidebar