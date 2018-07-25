import * as React from 'react';

import MainMap from '../../atom/mainMap/MainMap';

import { urlMapEur, urlMapPac } from '../../constants/ui-constants';

import locals from './Game.css';

interface IGameState {
  currentMap: string;
}

class Game extends React.Component<{}, IGameState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentMap: urlMapEur
    }
  }

  public toggleMap = () => {
    const isEur = this.state.currentMap === urlMapEur;
    // const isEur = this.state.currentMap === locals.mapEur;
    this.setState({
      currentMap: isEur ? urlMapPac : urlMapEur
    });
  }

  public render(): JSX.Element {

    const map = this.state.currentMap;

    return (
      <div className={locals.main}>
        <button onClick={this.toggleMap}>toggle map</button>
        <MainMap url={map}/>
      </div>
    )
  }
};

export default Game;
