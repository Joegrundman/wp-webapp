import ArrowButton from 'Atoms/arrowbutton/ArrowButton';
import * as React from 'react'
import locals from './Shipyard.css'

interface IShipyardProps {
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
  'Australia',
  'German Captured'
]

class Shipyard extends React.Component<{}, IShipyardProps> {
  constructor(props: any){
    super(props)
    this.state = {
      currentShipyard: 0
    }
  }

  public componentDidMount () {
    // const canvas = document.getElementById('shipyardCanvas') as HTMLCanvasElement
    // const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    // ctx.fillStyle= '#ff0000'
    // ctx.fillRect(20, 20, 40, 40)
  }

  public decrementCurrentShipyard = () => {
    const currentShipyard = this.state.currentShipyard === 0 ?
      shipyards.length -1 :
      this.state.currentShipyard - 1
    
    this.setState({
      currentShipyard
    })
  }

  public incrementCurrentShipyard = () => {
    const currentShipyard = this.state.currentShipyard < shipyards.length - 1 ?
      this.state.currentShipyard + 1 :
      0

    this.setState({
      currentShipyard
    })
  }

  public render (): JSX.Element {

    // const shipyardCanvasStyle = {
    //   height: '40rem',
    //   width: '18rem'
    // }
    return (
      <div>
        <h1 className={locals.header}>Shipyards</h1>
        <div className={locals.subheaderWithArrows}>
          <ArrowButton direction="left" action={this.decrementCurrentShipyard}/>
          <h2 className={locals.subheaderCenterText}>{shipyards[this.state.currentShipyard]}</h2>
          <ArrowButton direction="right" action={this.incrementCurrentShipyard}/>
        </div>
        
        {/* <canvas id="shipyardCanvas" style={shipyardCanvasStyle}/> */}
      </div>
    )
  }
}

export default Shipyard
