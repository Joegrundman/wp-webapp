import Header from 'Components/header/Header'
import Sidebar from 'Components/sidebar/Sidebar'
import * as React from 'react'
import GameBoard from 'Views/gameboard/Gameboard'
import locals from './App.css'
import{ gameStore } from './appStores'

class App extends React.Component {
  public render(): JSX.Element {
    return (
        <div className={locals.App}>
          <Header />
            <div>
              <Sidebar store={gameStore}/>
              <GameBoard store={gameStore}/>
            </div>        
        </div>
    )
  }
}

export default App
