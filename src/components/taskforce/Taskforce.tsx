import ArrowButton from 'Atoms/arrowbutton/ArrowButton';
import * as React from 'react'
import { getGame } from 'Wp/Game'
import locals from './Taskforce.css'

interface ITaskforceState {
  currentTaskforceOwner: number
}

const taskforceOwners: string[]= [
  'Britain',
  'US',
  'France',
  'Russia',
  'Germany',
  'Italy',
  'Japan'
]

class Taskforce extends React.Component<{}, ITaskforceState> {
  public tfBgContext: CanvasRenderingContext2D
  public tfContext: CanvasRenderingContext2D

  constructor(props: any) {
    super(props)
    this.state = {
      currentTaskforceOwner: 0
    }
  }

  public componentDidMount (): void {
    const tfBgCanvas: HTMLCanvasElement = document.getElementById('taskforceCanvasBackground') as HTMLCanvasElement
    this.tfBgContext = tfBgCanvas.getContext('2d') as CanvasRenderingContext2D
    const tfCanvas: HTMLCanvasElement = document.getElementById('taskforceCanvas') as HTMLCanvasElement
    this.tfContext = tfCanvas.getContext('2d') as CanvasRenderingContext2D
    this.drawTaskforceBackground();
    getGame().setSelectedTaskforce(taskforceOwners[this.state.currentTaskforceOwner], this.tfContext)
  }

  public drawTaskforceBackground (): void {
    const tfLineHeight = 62.5
    const tfNumberCol = 32.5
    const numRows = 12

    this.tfBgContext.strokeStyle= '#cdcdcd'
    this.tfBgContext.lineWidth = 1

    this.tfBgContext.beginPath()
    this.tfBgContext.moveTo(tfNumberCol, 0)
    this.tfBgContext.lineTo(tfNumberCol, numRows * tfLineHeight)
    this.tfBgContext.closePath()
    this.tfBgContext.stroke()

    for (let i: number = 1; i < numRows; i++) {
      
      this.tfBgContext.beginPath()
      this.tfBgContext.moveTo(0, i * tfLineHeight)
      this.tfBgContext.lineTo(500, i * tfLineHeight)
      this.tfBgContext.closePath()
      this.tfBgContext.stroke()
    }

    const taskforces: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    this.tfBgContext.font = "18px sans-serif"
    this.tfBgContext.fillStyle = '#cdcdcd'
    taskforces.forEach((tf: string, i: number): void => {
      this.tfBgContext.fillText(tf, i < 9 ? 10 : 5, 40.5 + (tfLineHeight * i))
    })
  }

  public changeTaskforceOwnerBack = () => {
    const currentTaskforceOwner = this.state.currentTaskforceOwner === 0 ?
    taskforceOwners.length -1 :
    this.state.currentTaskforceOwner - 1
    this.setState({
      currentTaskforceOwner
    },
    (): void => getGame().setSelectedTaskforce(taskforceOwners[this.state.currentTaskforceOwner], this.tfContext as CanvasRenderingContext2D ))
  }

  public changeTaskforceOwnerForward = () => {
    const currentTaskforceOwner = this.state.currentTaskforceOwner < taskforceOwners.length - 1 ?
      this.state.currentTaskforceOwner + 1 :
      0

    this.setState({
      currentTaskforceOwner
    },
    (): void => getGame().setSelectedTaskforce(taskforceOwners[this.state.currentTaskforceOwner], this.tfContext as CanvasRenderingContext2D ))
  }

  public render () {

    const tfContainerSize = {
      height: 470,
      width: 300
    }

    const tfCanvasSize = {
      height: 12 * 62.5,
      width: 500
    }
    return (
      <div>
        <h1 className={locals.header} >Taskforces</h1>
        <div className={locals.subheaderWithArrows}>
          <ArrowButton direction="left" action={this.changeTaskforceOwnerBack}/>
          <h2 className={locals.subheaderCenterText}>{taskforceOwners[this.state.currentTaskforceOwner]}</h2>
          <ArrowButton direction="right" action={this.changeTaskforceOwnerForward}/>
        </div>
        <div className={locals.canvasContainer} style={{height: tfContainerSize.height, width: tfContainerSize.width}}>
          <canvas
            className={locals.taskforceCanvas}
            id="taskforceCanvasBackground"
            height={tfCanvasSize.height}
            width={tfCanvasSize.width}/>
          <canvas
            className={locals.taskforceCanvas}
            id="taskforceCanvas"
            height={tfCanvasSize.height}
            width={tfCanvasSize.width}/>
        </div>
      </div>
    )
  }
}

export default Taskforce
