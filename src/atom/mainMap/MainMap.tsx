import * as React from 'react';

interface IMainMapProps {
  url: string;
}

interface IMainMapState {
  height: number;
  width: number;
}

class MainMap extends React.PureComponent<IMainMapProps, IMainMapState> {
  constructor(props: IMainMapProps) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
  }

  public componentDidMount(): void {
    this.updateMap();
  }

  public componentDidUpdate() {
    this.updateMap();
  }

  public updateMap(): void {

    const canvas: HTMLCanvasElement = document.getElementById('mapBgCanvas') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
    const image: HTMLImageElement = new Image();

    image.onload = () => {
      this.setState({
        height: image.height,
        width: image.width
      },
      () => ctx.drawImage(image, 0, 0, image.width, image.height))
    }

    image.src = this.props.url;
    image.crossOrigin = 'anonymous';    
  }

  public render(): JSX.Element {
    const { height, width } = this.state;
    return (
      <canvas id="mapBgCanvas" height={height} width={width}>Your browser does not support this application</canvas>
    );
  }
}

export default MainMap;