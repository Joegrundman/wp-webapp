import * as React from 'react'

export interface IMapOpts {
  rect: DOMRect
}
interface IMainMapProps {
  url: string
  getMapContext: (mapCanvas: HTMLCanvasElement, mapCtx: CanvasRenderingContext2D | null, opts: any) => void
}

interface IMainMapState {
  height: number
  width: number
}

class MainMap extends React.PureComponent<IMainMapProps, IMainMapState> {
  public backgroundCanvas: HTMLCanvasElement | null
  public backgroundCtx: CanvasRenderingContext2D | null
  public mapCanvas: HTMLCanvasElement | null
  public mapCtx: CanvasRenderingContext2D | null
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

    this.mapCanvas = null
    this.mapCtx = null
    this.backgroundCanvas = null
    this.backgroundCtx = null
    this.image = new Image()
    this.mapCanvasRef = React.createRef()
    this.backgroundCanvasRef = React.createRef()
  }

  public componentDidMount(): void {
    this.mapCanvas = document.getElementById('mapCanvas') as HTMLCanvasElement;
    this.rect = this.mapCanvas.getBoundingClientRect() as DOMRect;
    this.backgroundCanvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
    if(this.mapCanvas) {
      this.mapCtx = this.mapCanvas.getContext('2d') as CanvasRenderingContext2D;
    }
    if(this.backgroundCanvas) {
      this.backgroundCtx = this.backgroundCanvas.getContext('2d') as CanvasRenderingContext2D;
      this.updateMap()
    }
  }

  public componentDidUpdate(props: IMainMapProps) {
    if(this.props.url !== props.url) {
      this.updateMap()
    }
  }

  public updateMap(): void {
    const {
      backgroundCtx,
      mapCanvas,
      mapCtx,
      image } = this;
    if(!backgroundCtx) {
      return
    }
    image.crossOrigin = 'Anonymous'
    image.src = this.props.url;  
    image.onload = () => {
      this.setState({
        height: image.height,
        width: image.width
      },
      () => {
        backgroundCtx.drawImage(image, 0, 0, image.width, image.height)
        if(backgroundCtx) {

          const opts: IMapOpts = {
            rect: this.rect
          }
          this.props.getMapContext(
            mapCanvas as HTMLCanvasElement,
            mapCtx as CanvasRenderingContext2D,
            opts
          )
        }
      })
    }
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
        <canvas id="backgroundCanvas" style={canvasPosition} ref={this.backgroundCanvasRef} height={height} width={width}/>
        <canvas id="mapCanvas" style={canvasPosition} ref={this.mapCanvasRef} height={height} width={width}>Your browser does not support this application</canvas>
      </div>
    );
  }
}

export default MainMap