import * as React from 'react';
import locals from './App.css';

import Game from '../view/game/Game';

import logo from '../assets/logo.svg';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={locals.App}>
        <header className={locals.header}>
          <img src={logo} className={locals.logo} alt="logo" />
          <h1 className={locals.title}>Welcome to React</h1>
        </header>
        <p className={locals.intro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Game />
      </div>
    );
  }
}

export default App;
