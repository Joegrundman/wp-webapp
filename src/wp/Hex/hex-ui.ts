import adjust from '../misc/adjust';
import Point from '../misc/Point';
import Hex from './hex';

export const setHexZoom = (hex: Hex) => {
	hex.width = hex.size * 1.768; // higher = wider
	const yModifier = hex.size / 1.975; // lower = lower

	let dY = (hex.coordinate.y * adjust(hex.size + yModifier) + adjust(5));
	let dX = (hex.coordinate.x * adjust(hex.width) + adjust(1));

	if (hex.coordinate.y % 2 !== 0) {
		dX += (adjust(hex.width / 2));
	}

	dX = Math.floor(dX);
	dY = Math.floor(dY);
	hex.pixelPoint = new Point(dX, dY);
	setUnitStartPoint(hex);
}

export const setUnitStartPoint  = (hex: Hex) => {
	const dX: number = Math.floor(hex.pixelPoint.x + adjust(15));
	const dY: number = Math.floor(hex.pixelPoint.y + adjust(15));
	hex.unitStartPoint = new Point(dX, dY);
}



