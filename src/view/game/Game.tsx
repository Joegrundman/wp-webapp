import * as React from 'react';
import MainMap from '../../atom/mainMap/MainMap';
import { urlMapEur, urlMapPac } from '../../constants/ui-constants';
import game from '../../wp/Game';
import { initialize } from '../../wp/init/init';
import locals from './Game.css';

interface IGameState {
  currentMap: string;
  game: any;
  mapCtx: CanvasRenderingContext2D | null;
}

class Game extends React.Component<{}, IGameState> {

   constructor(props: {}) {
    super(props);
    this.state = {
      currentMap: urlMapEur,
      game: null,
      mapCtx: null
    }
  }

  public componentDidMount() {
    this.setState({
      game
    })
  }

  public getMapContext = (ctx: CanvasRenderingContext2D | null) => {
    console.log('fetching context') // tslint:disable-line
    this.setState({ mapCtx: ctx }, () => {
      if(this.state.mapCtx) {
        initialize(this.state.mapCtx);
        this.setState({
          game
        });
      }
    });
  }

  public toggleMap = () => {
    const isEur = this.state.currentMap === urlMapEur;
    this.setState({
      currentMap: isEur ? urlMapPac : urlMapEur
    });
  }

  public render(): JSX.Element {

    const map: string = this.state.currentMap;

    return (
      <div className={locals.main}>
        <button onClick={this.toggleMap}>toggle map</button>
        <MainMap getMapContext={this.getMapContext} url={map}/>
      </div>
    )
  }
};

export default Game;
