import { getRelativePosition } from '../Map/map-mouse';
import Point from './Point';


export default (canvas: HTMLCanvasElement, e: MouseEvent) => {
	if (typeof e === 'undefined') {
    // e = mapCanvas.event
    return new Point(-1, -1);
  };

	const [x, y]: number[] = getRelativePosition(canvas, e.clientX, e.clientY);
  return new Point(x, y);
}
  
  // function getPoint (canvasName, e) {
  //   if (typeof e == 'undefined') e = mapCanvas.event;
  //   var obj = document.getElementById(canvasName);
  //   var relPos = WP.Map.Mouse.Util.getRelativePosition(obj, e.clientX, e.clientY);
  //   var x = relPos[0];
  //   var y = relPos[1];
  //   return new Point(x, y);
  //  }
