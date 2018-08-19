import * as React from 'react'
import MainMap, { IMapOpts } from '../../components/mainMap/MainMap'
import { urlMapEur, urlMapPac } from '../../constants/ui-constants'
import { handleKeyboardEvent, handleKeyupEvent } from '../../wp/Eventing/eventing-keyboard'
import { getGame } from '../../wp/Game'
import Game from '../../wp/Game/game'
import { initialize } from '../../wp/init/init'
import locals from './Game.css'

interface IGameState {
  theater: string
  initialized: boolean
}

class GameBoard extends React.Component<{}, IGameState> {
  public mainMapContainer: React.RefObject<HTMLDivElement>
  public game: Game | null
  public mapCanvas: HTMLCanvasElement | null
  public mapCtx: CanvasRenderingContext2D | null
  public doubleClickListener: EventListenerOrEventListenerObject | null
  public mouseDownListener: EventListenerOrEventListenerObject | null
  public mouseMoveListener: EventListenerOrEventListenerObject | null
  public mouseUpListener: EventListenerOrEventListenerObject | null
  public scrollListener: EventListenerOrEventListenerObject | null

  constructor(props: {}) {
    super(props)

    this.state = {
      initialized: false,
      theater: urlMapEur,
    }

    this.game = null
    this.mapCanvas = null
    this.mapCtx = null
    this.mainMapContainer = React.createRef()
    this.doubleClickListener = null
    this.mouseDownListener = null
    this.mouseMoveListener = null
    this.mouseUpListener = null
    this.scrollListener = null
  }

  public attachKeyboardEvents() {
    window.addEventListener('keydown', (e: KeyboardEvent) => handleKeyboardEvent(e.keyCode))
    window.addEventListener('keyup', (e: KeyboardEvent) => handleKeyupEvent())
  }

  public attachMapEvents() {

    if (this.game && this.mapCanvas && this.mapCanvas.addEventListener) {
      this.mouseDownListener = this.game.currentMap.onMouseDown.bind(this.game.currentMap) as EventListenerOrEventListenerObject
      this.mouseMoveListener = this.game.currentMap.onMouseMove.bind(this.game.currentMap) as EventListenerOrEventListenerObject
      this.mouseUpListener = this.game.currentMap.onMouseUp.bind(this.game.currentMap) as EventListenerOrEventListenerObject
      this.scrollListener = this.game.currentMap.onScroll.bind(this.game.currentMap) as EventListenerOrEventListenerObject
      this.doubleClickListener = this.game.currentMap.onDoubleClick.bind(this.game.currentMap) as EventListenerOrEventListenerObject

      this.mapCanvas.addEventListener('mousemove', this.mouseMoveListener, false)
      this.mapCanvas.addEventListener('mousedown', this.mouseDownListener, false)
      this.mapCanvas.addEventListener('mouseup', this.mouseUpListener, false)
      this.mapCanvas.addEventListener('dblclick', this.doubleClickListener, false)
      if (this.mainMapContainer.current) {
        this.mainMapContainer.current.addEventListener('scroll', this.scrollListener, true)
      }

    }
  }

  public removeMapEvents(): void {

    if (this.game && this.mapCanvas && this.mapCanvas.removeEventListener) {
      this.mapCanvas.removeEventListener('mousemove', this.mouseMoveListener as EventListenerOrEventListenerObject, false)
      this.mapCanvas.removeEventListener('mousedown', this.mouseDownListener as EventListenerOrEventListenerObject, false)
      this.mapCanvas.removeEventListener('mouseup', this.mouseUpListener as EventListenerOrEventListenerObject, false)
      this.mapCanvas.removeEventListener('dblclick', this.doubleClickListener as EventListenerOrEventListenerObject, false)
      if (this.mainMapContainer.current) {
        this.mainMapContainer.current.removeEventListener('scroll', this.scrollListener as EventListenerOrEventListenerObject, true)
      }
      this.game.currentMap.mapCanvas = this.mapCanvas
    }

  }

  public getMapContext = (mapCanvas: HTMLCanvasElement, mapCtx: CanvasRenderingContext2D, opts: IMapOpts) => {
    this.mapCanvas = mapCanvas
    this.mapCtx = mapCtx

    /**
     * Initialize the wp this.state.game instance and start the scripts
     */
    if (!this.state.initialized) {
      initialize(this.mapCtx, this.mapCanvas, opts)
      this.game = getGame()
      this.attachMapEvents()
      this.attachKeyboardEvents()
      this.setState({
        initialized: true
      })
    }
    else {
      if (this.game) {
        this.game.switchTheaters()
        this.attachMapEvents()
      }
    }
  }

  public toggleMap = () => {
    const isEur = this.state.theater === urlMapEur
    const theater = isEur ? urlMapPac : urlMapEur
    this.removeMapEvents()
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
          <MainMap getMapContext={this.getMapContext} url={map} />
        </div>
      </div>
    )
  }
}

export default GameBoard
