import Header from 'Components/header/Header'
import * as React from 'react'
import GameBoard from 'Views/gameboard/Gameboard'
import locals from './App.css'

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={locals.App}>
        <Header />
        <GameBoard />
      </div>
    );
  }
}

export default App
