import Hex from './hex';

export const drawBorders = (ctx: CanvasRenderingContext2D, hex: Hex) => {
	ctx.beginPath();
	const point = getBorder(hex);
	ctx.moveTo(point[0][0], point[0][1]);
	for (let i: number = 1; i < 6; i++) {

		ctx.lineTo(point[i][0], point[i][1]);
	}
	ctx.lineTo(point[0][0], point[0][1]);
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#ACACB8"; // "#" + Math.floor(Math.random()*16777216).toString(16); //"#ACACB8";
	ctx.stroke();
}

export const getBorder = (hex: Hex): number[][] => {
	const zoomLevel = 1;

	const adjust = (value: number): number => value * zoomLevel;

	const result: number[][] = [];
	const deltaTheta = 2.0 * Math.PI / 6;
	let theta = 0;
	const radius = adjust(hex.size);

	const modX = hex.pixelPoint.x + hex.size;
	const modY = hex.pixelPoint.y + hex.size;
	for (let i = 0; i < 6; i++) {
		const x = (radius * Math.sin(theta)) + modX;
		const y = (radius * Math.cos(theta)) + modY;
		result.push([x, y]);
		theta += deltaTheta
	}
	return result;
}
