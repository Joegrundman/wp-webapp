import * as React from 'react';

interface IMainMapProps {
  url: string;
  getMapContext: (ctx: CanvasRenderingContext2D | null) => void;
}

interface IMainMapState {
  height: number;
  width: number;
}

class MainMap extends React.PureComponent<IMainMapProps, IMainMapState> {
  public canvas: HTMLCanvasElement | null;
  public ctx: CanvasRenderingContext2D | null;
  public image: HTMLImageElement;

  constructor(props: IMainMapProps) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    }

    this.canvas = null;
    this.ctx = null;
    this.image = new Image();
  }

  public componentDidMount(): void {
    this.canvas = document.getElementById('mapCanvas') as HTMLCanvasElement;
    if(this.canvas) {
      this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
      this.updateMap();
    }
  }

  public componentDidUpdate() {
    this.updateMap();
  }

  public updateMap(): void {
    const { ctx, image } = this;
    if(!ctx) {
      return
    }
    this.image.onload = () => {
      this.setState({
        height: this.image.height,
        width: this.image.width
      },
      () => {
        ctx.drawImage(image, 0, 0, image.width, image.height)
        if(this.ctx) {
          this.props.getMapContext(this.ctx);
        }
      })
      

    }

    image.src = this.props.url;
    image.crossOrigin = 'anonymous';    
  }

  public render(): JSX.Element {
    const { height, width } = this.state;
    return (
      <canvas id="mapCanvas" height={height} width={width}>Your browser does not support this application</canvas>
    );
  }
}

export default MainMap;