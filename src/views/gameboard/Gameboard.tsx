import MainMap, { IMapOpts } from 'Components/mainMap/MainMap'
import Game from 'Game/game'
import { initialize } from 'Init/init'
import { observer } from 'mobx-react'
import * as React from 'react'
import GameStore from 'Stores/GameStore'
import { handleKeyboardEvent, handleKeyupEvent } from 'Wp/Eventing/eventing-keyboard'
import { getGame } from 'Wp/Game'
import locals from './Gameboard.css'

interface IGameState {
  initialized: boolean
  windowWidth: number
  windowHeight: number
}

interface IGameProps {
  store: GameStore
}

@observer
class GameBoard extends React.Component<IGameProps, IGameState> {
  public mainMapContainer: React.RefObject<HTMLDivElement>
  public game: Game | null
  public mapCanvas: HTMLCanvasElement | null
  public mapCtx: CanvasRenderingContext2D | null
  public doubleClickListener: EventListenerOrEventListenerObject | null
  public mouseDownListener: EventListenerOrEventListenerObject | null
  public mouseMoveListener: EventListenerOrEventListenerObject | null
  public mouseUpListener: EventListenerOrEventListenerObject | null
  public scrollListener: EventListenerOrEventListenerObject | null
  
  constructor(props: IGameProps) {
    super(props)

    this.state = {
      initialized: false,
      windowHeight: 0,
      windowWidth: 0,
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
    
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  public componentDidMount(): void {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  public attachKeyboardEvents(): void {
    window.addEventListener('keydown', (e: KeyboardEvent): void => handleKeyboardEvent(e.keyCode))
    window.addEventListener('keyup', (e: KeyboardEvent): void => handleKeyupEvent())
  }

  public attachMapEvents(): void {

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

  public getMapContext = (
    mapCanvas: HTMLCanvasElement,
    mapCtx: CanvasRenderingContext2D,
    opts: IMapOpts): void => {
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
  
  public toggleTheater = (): void => {
    this.props.store.toggleTheater()
  }

  public updateWindowDimensions(): void {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  public render(): JSX.Element {

    return (
      <div className={locals.main}>
        <div ref={this.mainMapContainer} 
          style={{
            height: `${this.state.windowHeight - 120}px`,
            width: `${this.state.windowWidth - 60}px`
          }}
          className={locals.mapContainer}>
          <MainMap getMapContext={this.getMapContext} url={this.props.store.theater} />
        </div>
      </div>
    )
  }
}

export default GameBoard
