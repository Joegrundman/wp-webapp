import ArrowButton from 'Atoms/arrowbutton/ArrowButton';
import * as React from 'react'
import { getGame } from 'Wp/Game'
import locals from './Shipyard.css'

interface IShipyardState {
  currentShipyard: number
}

const shipyards = [
  'Atlantic',
  'Glasgow',
  'Pacific',
  'Tokyo',
  'Kiel',
  'Genoa',
  'Trieste',
  'Lorient',
  'Marseilles',
  'Leningrad',
  'Sevastopol',
  'Canada',
  'Australia'
]

class Shipyard extends React.Component<{}, IShipyardState> {
  public syBgContext: CanvasRenderingContext2D | null
  public syContext: CanvasRenderingContext2D | null

  constructor(props: any){

    super(props)
    this.state = {
      currentShipyard: 0
    }

    this.syBgContext = null
    this.syContext = null
  }

  public componentDidMount (): void {
    const syBgCanvas: HTMLCanvasElement = document.getElementById('shipyardCanvasBackground') as HTMLCanvasElement
    this.syBgContext = syBgCanvas.getContext('2d') as CanvasRenderingContext2D
    const syCanvas: HTMLCanvasElement = document.getElementById('shipyardCanvas') as HTMLCanvasElement
    this.syContext = syCanvas.getContext('2d') as CanvasRenderingContext2D
    this.drawShipyardBackground();
    getGame().setSelectedShipyard(shipyards[this.state.currentShipyard], this.syContext)
  }

  public drawShipyardBackground (): void {
    if(!this.syBgContext) {
      return
    }
    this.syBgContext.strokeStyle= '#cdcdcd'
    this.syBgContext.lineWidth = 1

    for(let i: number = 28.5; i < 330; i += 68 ) {
      this.syBgContext.beginPath()
      this.syBgContext.moveTo(i, 0)
      this.syBgContext.lineTo(i, 368)
      this.syBgContext.closePath()
      this.syBgContext.stroke()
    }

    const seasons: string[] = ['  spring', 'summer', '    fall', '  winter']
    this.syBgContext.font = "15px sans-serif"
    this.syBgContext.fillStyle = '#cdcdcd'

    seasons.forEach((season: string, i: number): void => {
      if(!this.syBgContext) { return }
      this.syBgContext.fillText(season, 36 + (68 * i), 18)
    })

    for (let i: number = 28.5; i < 410; i += 68) {
      this.syBgContext.beginPath()
      this.syBgContext.moveTo(0, i)
      this.syBgContext.lineTo(300, i)
      this.syBgContext.closePath()
      this.syBgContext.stroke()
    }

    const levels: string[] = ['5', '4', '3', '2', '1']
    this.syBgContext.font = "18px sans-serif"
    levels.forEach((level: string, i: number): void => {
      if(!this.syBgContext) { return }
      this.syBgContext.fillText(level, 8, 68 + (68 * i))
    })

    this.syBgContext.font = "15px sans-serif"
    this.syBgContext.fillText('Waiting for repair', 100, 400)
  }

  public decrementCurrentShipyard = () => {
    const currentShipyard = this.state.currentShipyard === 0 ?
      shipyards.length -1 :
      this.state.currentShipyard - 1
    
    this.setState({
      currentShipyard
    },
    () => getGame().setSelectedShipyard(shipyards[this.state.currentShipyard], this.syContext as CanvasRenderingContext2D ))
  }

  public incrementCurrentShipyard = () => {
    const currentShipyard = this.state.currentShipyard < shipyards.length - 1 ?
      this.state.currentShipyard + 1 :
      0

    this.setState({
      currentShipyard
    },
    () => getGame().setSelectedShipyard(shipyards[this.state.currentShipyard], this.syContext as CanvasRenderingContext2D))
  }

  public render (): JSX.Element {

    const shipyardCanvasSize = {
      height: 470,
      width: 300
    }
    return (
      <div>
        <h1 className={locals.header}>Shipyards</h1>
        <div className={locals.subheaderWithArrows}>
          <ArrowButton direction="left" action={this.decrementCurrentShipyard}/>
          <h2 className={locals.subheaderCenterText}>{shipyards[this.state.currentShipyard]}</h2>
          <ArrowButton direction="right" action={this.incrementCurrentShipyard}/>
        </div>
        <div className={locals.canvasContainer} style={{width: shipyardCanvasSize.width}}>
          <canvas
            className={locals.shipyardCanvas}
            id="shipyardCanvasBackground"
            height={shipyardCanvasSize.height}
            width={shipyardCanvasSize.width}/>
          <canvas
            className={locals.shipyardCanvas}
            id="shipyardCanvas"
            height={shipyardCanvasSize.height}
            width={shipyardCanvasSize.width}/>
        </div>

      </div>
    )
  }
}

export default Shipyard
