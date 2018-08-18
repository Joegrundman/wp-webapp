import * as React from 'react';
import MainMap, { IMapOpts } from '../../atom/mainMap/MainMap';
import { urlMapEur, urlMapPac } from '../../constants/ui-constants';
import { getGame } from '../../wp/Game';
import { initialize } from '../../wp/init/init';
import locals from './Game.css';

interface IGameState {
  currentMap: string;
  game: any;
  mapCanvas: HTMLCanvasElement | null;
  mapCtx: CanvasRenderingContext2D | null;
}

class Game extends React.Component<{}, IGameState> {
  public mainMapContainer: React.RefObject<HTMLDivElement>;

   constructor(props: {}) {
    super(props);
    this.state = {
      currentMap: urlMapEur,
      game: null,
      mapCanvas: null,
      mapCtx: null,
    }

    this.mainMapContainer = React.createRef();
  }

  public componentDidMount() {
    this.setState({
      game: getGame(),
    })
  }

  public attachMapEvents() {
    if(!this.state.mapCanvas) {
      return;
    }
		if (this.state.mapCanvas.addEventListener) {
      console.log('attach event listener to', this.state.game)
			this.state.mapCanvas.addEventListener('mousemove', this.state.game.currentMap.onMouseMove.bind(this.state.game.currentMap), false);
      this.state.mapCanvas.addEventListener('mousedown', this.state.game.currentMap.onMouseDown.bind(this.state.game.currentMap), false);
      this.state.mapCanvas.addEventListener('mouseup', this.state.game.currentMap.onMouseUp.bind(this.state.game.currentMap), false);
      if(this.mainMapContainer.current) {
        this.mainMapContainer.current.addEventListener('scroll', this.state.game.currentMap.onScroll.bind(this.state.game.currentMap), true)
      }
		}
	}

  public getMapContext = (mapCanvas: HTMLCanvasElement, mapCtx: CanvasRenderingContext2D, opts: IMapOpts) => {
    this.setState({
      mapCanvas, mapCtx
    },
     () => {

      if(this.state.mapCtx && this.state.mapCanvas) {

        /**
         * Initialize the wp game instance and start the scripts
         */
        initialize(this.state.mapCtx, this.state.mapCanvas, opts);
        this.setState({
          game: getGame(),
        },
         () => {
          this.attachMapEvents();
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
          <div ref={this.mainMapContainer} className={locals.mapContainer}>
            <MainMap game={this.state.game} getMapContext={this.getMapContext} url={map}/>
          </div>
      </div>
    )
  }
};

export default Game;
