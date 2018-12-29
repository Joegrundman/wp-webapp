import Loader from 'Components/loader/Loader';
import MainMap, { IMapOpts } from 'Components/mainMap/MainMap';
import Game from 'Game/game';
import { initialize } from 'Init/init';
import { observer } from 'mobx-react';
import * as React from 'react';
import GameStore from 'Stores/GameStore';
import { handleKeyboardEvent, handleKeyupEvent } from 'Wp/Eventing/eventing-keyboard';
import { getGame } from 'Wp/Game';
import locals from './Gameboard.css';

interface IGameState {
  initialized: boolean
  loading: boolean
  windowWidth: number
  windowHeight: number
}

export interface IGameProps {
  store: GameStore
}

@observer
class GameBoard extends React.Component<IGameProps, IGameState> {
  public mainMapContainer: React.RefObject<HTMLDivElement>
  public game: Game
  public mapCanvas: HTMLCanvasElement
  public mapCtx: CanvasRenderingContext2D
  public doubleClickListener: EventListenerOrEventListenerObject
  public mouseDownListener: EventListenerOrEventListenerObject
  public mouseMoveListener: EventListenerOrEventListenerObject
  public mouseUpListener: EventListenerOrEventListenerObject
  public scrollListener: EventListenerOrEventListenerObject
  
  constructor(props: IGameProps) {
    super(props)

    this.state = {
      initialized: false,
      loading: false,
      windowHeight: 0,
      windowWidth: 0,
    }
    this.mainMapContainer = React.createRef()
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
    this.mouseDownListener = this.game.currentMap.onMouseDown.bind(this.game.currentMap)
    this.mouseMoveListener = this.game.currentMap.onMouseMove.bind(this.game.currentMap)
    this.mouseUpListener = this.game.currentMap.onMouseUp.bind(this.game.currentMap)
    this.scrollListener = this.game.currentMap.onScroll.bind(this.game.currentMap)
    this.doubleClickListener = this.game.currentMap.onDoubleClick.bind(this.game.currentMap)

    this.mapCanvas.addEventListener('mousemove', this.mouseMoveListener, true)
    this.mapCanvas.addEventListener('mousedown', this.mouseDownListener, true)
    this.mapCanvas.addEventListener('mouseup', this.mouseUpListener, true)
    this.mapCanvas.addEventListener('dblclick', this.doubleClickListener, true)
    if (this.mainMapContainer.current) {
      this.mainMapContainer.current.addEventListener('scroll', this.scrollListener, true)
    }
  }

  public removeMapEvents(): void {
    this.mapCanvas.removeEventListener('mousemove', this.mouseMoveListener, true)
    this.mapCanvas.removeEventListener('mousedown', this.mouseDownListener, true)
    this.mapCanvas.removeEventListener('mouseup', this.mouseUpListener, true)
    this.mapCanvas.removeEventListener('dblclick', this.doubleClickListener, true)
    if (this.mainMapContainer.current) {
      this.mainMapContainer.current.removeEventListener('scroll', this.scrollListener as EventListenerOrEventListenerObject, true)
    }
    this.game.currentMap.mapCanvas = this.mapCanvas
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
      this.removeMapEvents()
      this.game.switchTheaters()
      this.attachMapEvents()
    }
    // this.setState({ loading: false })
  }
  
  // remove this method
  public toggleTheater = (): void => {
    // this.setState({ loading: true })
    // console.log('togglin theater')
    // this.removeMapEvents()
    this.props.store.toggleTheater()
  }

  public updateWindowDimensions(): void {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  public render(): JSX.Element {

    return (
      <React.Fragment>
        <Loader active={this.state.loading}/>
        <div className={locals.main}>
          <div ref={this.mainMapContainer} 
            style={{
              height: `${this.state.windowHeight - 90}px`,
              width: `${this.state.windowWidth - 60}px`
            }}
            className={locals.mapContainer}>
            <MainMap getMapContext={this.getMapContext} url={this.props.store.theater} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GameBoard
