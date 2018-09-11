import * as React from 'react'

export interface IMapOpts {
  rect: DOMRect
}
export interface IMainMapProps {
  url: string
  getMapContext: (mapCanvas: HTMLCanvasElement, mapCtx: CanvasRenderingContext2D | null, opts: any) => void
}

export interface IMainMapState {
  height: number
  width: number
}

class MainMap extends React.PureComponent<IMainMapProps, IMainMapState> {
  public backgroundCanvas: HTMLCanvasElement
  public backgroundCtx: CanvasRenderingContext2D
  public mapCanvas: HTMLCanvasElement 
  public mapCtx: CanvasRenderingContext2D
  public rect: DOMRect
  public image: HTMLImageElement
  public mapCanvasRef: React.RefObject<HTMLCanvasElement>
  public backgroundCanvasRef: React.RefObject<HTMLCanvasElement>

  constructor(props: IMainMapProps) {
    super(props)
    this.state = {
      height: 0,
      width: 0,
    }
  
    this.image = new Image()
    this.mapCanvasRef = React.createRef()
    this.backgroundCanvasRef = React.createRef()
  }

  public componentDidMount(): void {
    this.mapCanvas = document.getElementById('mapCanvas') as HTMLCanvasElement;
    this.rect = this.mapCanvas.getBoundingClientRect() as DOMRect;
    this.backgroundCanvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
    this.mapCtx = this.mapCanvas.getContext('2d') as CanvasRenderingContext2D;
    this.backgroundCtx = this.backgroundCanvas.getContext('2d') as CanvasRenderingContext2D;
    this.updateMap()
  }

  public componentDidUpdate(props: IMainMapProps): void {
    if(this.props.url !== props.url) {
      this.updateMap()
    }
  }

  public onMapLoad = (): void => {
    this.setState({
      height: this.image.height,
      width: this.image.width
    },
    (): void => {

      this.backgroundCtx.drawImage(this.image, 0, 0, this.image.width, this.image.height)

      const opts: IMapOpts = {
        rect: this.rect
      }

      this.props.getMapContext(
        this.mapCanvas as HTMLCanvasElement,
        this.mapCtx as CanvasRenderingContext2D,
        opts
      )
    })
  }

  public updateMap(): void {
    this.image.crossOrigin = 'Anonymous'
    this.image.src = this.props.url
    this.image.onload = this.onMapLoad
  }

  public render(): JSX.Element {
    const { height, width }: { height: number, width: number} = this.state

    const canvasPosition: any = {
      left: 0,
      position: 'absolute',  
      top: 0
    }
    return (
      <div style={{position :"relative" }}>    
        <canvas
          id="backgroundCanvas"
          style={canvasPosition}
          ref={this.backgroundCanvasRef}
          height={height}
          width={width}
        />
        <canvas
          id="mapCanvas"
          style={canvasPosition}
          ref={this.mapCanvasRef}
          height={height}
          width={width}
        >Your browser does not support this application
        </canvas>
      </div>
    );
  }
}

export default MainMap