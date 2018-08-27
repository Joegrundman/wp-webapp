import * as React from 'react'
import locals from './MainMapContainer.css'

class MainMapContainer extends React.Component {
  public render (): JSX.Element {
    return (
      <div className={locals.container}>
      {this.props.children}
    </div>
    )
  }
}

export default MainMapContainer