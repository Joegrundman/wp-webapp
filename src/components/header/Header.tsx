import * as React from 'react'
import locals from './Header.css'

class Header extends React.Component {
  public render () {
    return (
      <header className={locals.header}>
        <h1 className={locals.title}>Warplanner</h1>
      </header>
    )
  }
}

export default Header