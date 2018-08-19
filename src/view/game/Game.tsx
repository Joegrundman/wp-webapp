import * as React from 'react'
import MainMap, { IMapOpts } from '../../components/mainMap/MainMap'
import { urlMapEur, urlMapPac } from '../../constants/ui-constants'
import { handleKeyboardEvent, handleKeyupEvent }from '../../wp/Eventing/eventing-keyboard'
import { getGame } from '../../wp/Game'
import Game from '../../wp/Game/game'
import { initialize } from '../../wp/init/init'
import locals from './Game.css'

interface IGameState {
  theater: string
  mapCanvas: HTMLCanvasElement | null
  mapCtx: CanvasRenderingContext2D | null
  initialized: boolean
}

class GameBoard extends React.Component<{}, IGameState> {
  public mainMapContainer: React.RefObject<HTMLDivElement>

   constructor(props: {}) {
    super(props)
    this.state = {
      initialized: false,
      mapCanvas: null,
      mapCtx: null,
      theater: urlMapEur,
    }

    this.mainMapContainer = React.createRef()
  }

  public attachKeyboardEvents() {
    window.addEventListener('keydown', (e: KeyboardEvent) => handleKeyboardEvent(e.keyCode))
    window.addEventListener('keyup', (e: KeyboardEvent) => handleKeyupEvent())
  }

  public attachMapEvents() {
    const game: Game = getGame()

		if (this.state.mapCanvas && this.state.mapCanvas.addEventListener) {
			this.state.mapCanvas.addEventListener('mousemove', game.currentMap.onMouseMove.bind(game.currentMap), false)
      this.state.mapCanvas.addEventListener('mousedown', game.currentMap.onMouseDown.bind(game.currentMap), false)
      this.state.mapCanvas.addEventListener('mouseup', game.currentMap.onMouseUp.bind(game.currentMap), false)
      this.state.mapCanvas.addEventListener('dblclick', game.currentMap.onDoubleClick.bind(game.currentMap), false)
      if(this.mainMapContainer.current) {
        this.mainMapContainer.current.addEventListener('scroll', game.currentMap.onScroll.bind(game.currentMap), true)
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
        if (!this.state.initialized) {
          initialize(this.state.mapCtx, this.state.mapCanvas, opts)
          this.attachMapEvents()
          this.attachKeyboardEvents()
          this.setState({
            initialized: true
          })}
        else {
          getGame().switchTheaters()
        }  
      }
    })
  }

  public toggleMap = () => {
    const isEur = this.state.theater === urlMapEur
    const theater = isEur ? urlMapPac : urlMapEur
    
    this.setState({
      theater
    })
  }

  public render(): JSX.Element {

    const map: string = this.state.theater;

    return (
      <div className={locals.main}>
        <button onClick={this.toggleMap}>toggle map</button>
          <div ref={this.mainMapContainer} className={locals.mapContainer}>
            <MainMap getMapContext={this.getMapContext} url={map}/>
          </div>
      </div>
    )
  }
};

export default GameBoard
