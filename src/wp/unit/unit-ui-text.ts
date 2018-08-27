import Color from 'Misc/Color';
import Unit from './unit';
import { drawShape } from './unit-ui';

export const writeBottomLeftStrength = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.font = 'bold 14px arial';
	ctx.textAlign = "center";
	ctx.fillStyle = unit.owner.foreColor.toRgb();
	ctx.fillText('' + unit.strength, 10, 39, 37);
}

export const writeBottomMiddleStrength = (ctx: CanvasRenderingContext2D, unit: Unit, x: number = 0, y: number = 0) => {
	writeMiddleStrength(ctx, unit, 38 + x, y);
}

export const writeTopMiddleStrength = (ctx: CanvasRenderingContext2D, unit: Unit, x: number = 0, y: number = 0) => {
	writeMiddleStrength(ctx, unit, 16);
}

export const writeMiddleStrength = (ctx: CanvasRenderingContext2D, unit: Unit, x: number = 0, y: number = 0) => {
	ctx.font = "bold 16px arial";
	ctx.textAlign = "center";
	ctx.fillStyle = unit.owner.foreColor.toRgb();
	ctx.fillText('' + unit.strength, 20 + y, x);
}

export const writeTopText = (ctx: CanvasRenderingContext2D, unit: Unit, text: string) => {
	ctx.font = '10px arial';
	ctx.textAlign = "center";
	ctx.fillStyle = unit.owner.foreColor.toRgb();
	ctx.fillText(text, 20, 10, 37);
}

export const writeGenericText = (
	ctx: CanvasRenderingContext2D,
	unit: Unit,
	text: string,
	font: string,
	xMod: number = 21,
	yMod: number = 22,
	color: Color = unit.owner.foreColor
) => {
	ctx.font = font;
	ctx.textAlign = "center";
	ctx.fillStyle = color.toRgb();
	ctx.fillText(text, xMod, yMod, 40);
}

export const writeDesignation = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	if (unit.name) {
		ctx.save();
		ctx.font = '8px verdana';
		ctx.textAlign = "right";
		ctx.fillStyle = unit.owner.foreColor.toRgb();
		ctx.rotate(4.71);
		ctx.fillText(unit.name, -3, 38, 25);
		ctx.restore();
	}
}

export const writeShipType = (ctx: CanvasRenderingContext2D, unit: Unit, text: string) => {
	if (unit.name.length <= 8) {
		ctx.font = 'italic bold 8px tahoma';
	}
	else {
		ctx.font = 'italic bold 7px tahoma';
	}
	ctx.textAlign = "center";
	ctx.fillStyle = unit.owner.foreColor.toRgb();

	// make sure ship name for dds and cas appears on top right for minor country units
	const lightships: string[] = ['dd', 'destroyer', 'cruiser', 'Cruiser'];
	if (!lightships.includes(unit.type)) {
		ctx.fillText(unit.name, 20, 10, 37);
	}

	const col: Color = unit.owner.foreColor;

	ctx.font = 'bold 14px helvetica';
	ctx.textAlign = "left";
	ctx.fillStyle = col.toRgb();
	ctx.fillText('' + unit.strength, 24, 38, 37);

	writeShipCode(ctx, text, col);
}

export const writeStrengthAndMovement = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	let useMove: number;
	if (unit.isPacific && unit.location === 2) {
		switch (unit.type) {
			case "airtransport": case "at": case "air trans":
			case "aaf":
			case "armor": case "arm": useMove = 3; break;
			case "mechanized": case "mech":
			case "chindit":
			case "airborne":
			case "marine":
			case "commando":
			case "partisan": case "px": case "pw": case "pc":
			case "alliedpartisan": case "axispartisan": case "communistpartisan": case "compartisan":
			case "infantry": case "i": useMove = 2; break;
			default: useMove = unit.movement;
		}
	}
	else { useMove = unit.movement; }
	ctx.font = "bold 16px arial";
	ctx.textAlign = "center";
	ctx.fillStyle = unit.owner.foreColor.toRgb();
	let sp = 11;
	let dp = 18;
	let mp = 26;

	if (unit.strength > 9) {
		sp += 1;
		dp += 5;
		mp += 5;
	}

	ctx.fillText('' + unit.strength, sp, 35);
	ctx.fillText("-", dp, 35);
	ctx.fillText('' + useMove, mp, 35);
}

export const writeShipCode = (ctx: CanvasRenderingContext2D, text: string, color: Color) =>  {
	switch (text) {
		case "DD":
			drawD(ctx, color, 10, 34);
			drawD(ctx, color, 17, 34);
			break;
		case "CA":
			drawC(ctx, color, 10, 34);
			drawA(ctx, color, 17, 34);
			break;
		case "BB":
			drawB(ctx, color, 10, 34);
			drawB(ctx, color, 17, 34);
			break;
		case "BC":
			drawB(ctx, color, 10, 34);
			drawC(ctx, color, 17, 34);
			break;
		case "PB":
			drawP(ctx, color, 10, 34);
			drawB(ctx, color, 17, 34);
			break;
		case "CV":
			drawC(ctx, color, 10, 34);
			drawV(ctx, color, 17, 34);
			break;
		case "CVB":
			drawC(ctx, color, 4, 34);
			drawV(ctx, color, 10, 34);
			drawB(ctx, color, 18, 34);
			break;
		case "CVE":
			drawC(ctx, color, 4, 34);
			drawV(ctx, color, 10, 34);
			drawE(ctx, color, 18, 34);
			break;
		case "CVL":
			drawC(ctx, color, 4, 34);
			drawV(ctx, color, 10, 34);
			drawL(ctx, color, 18, 34);
			break;
		default:
			ctx.font = 'bold 9px verdana';
			ctx.textAlign = "right";
			ctx.fillStyle = color.toRgb();
			ctx.fillText(text, 23, 38, 37);
			break;
	}

}

export const drawA = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => {
	drawShape(ctx, 0, 0, 1.3, color, [x + 0], [y + 3.5], [x + 2.5, y - 3.2], [x + 3.5, y - 3.2], [x + 6, y + 3.5], [x + 1], [y + 1.8], [x + 5, y + 1.8]);
}

export const drawB = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => { drawShape(ctx, 0, 0, 1.3, color, [x + 0], [y - 0.5], [x + 0, y - 3.2], [x + 2.8, y - 3.2], [x + 5, y - 2.5, x + 2.8, y - 0.5], [x + 0, y - 0.5], [x + 0], [y - 0.5], [x + 0, y + 3.2], [x + 2.8, y + 3.2], [x + 5.5, y + 1.5, x + 2.8, y - 0.5]); }
export const drawC = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => { drawShape(ctx, 0, 0, 1.3, color, [x + 0], [y - 0], [x + 0, y - 1.5], [x + 1.5, y - 5.2, x + 4.8, y - 1.5], [x + 0], [y + 0], [x + 0, y + 1.5], [x + 1.5, y + 5.2, x + 4.8, y + 1.5]); }
export const drawD = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => { drawShape(ctx, 0, 0, 1.3, color, [x + 0], [y + 0], [x + 0, y - 3.2], [x + 2.5, y - 3.2], [x + 4, y - 3, x + 4.5, y + 0], [x + 0], [y + 0], [x + 0, y + 3.2], [x + 2.5, y + 3.2], [x + 4, y + 3, x + 4.5, y + 0]); }
export const drawE = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => { drawShape(ctx, 0, 0, 1.3, color, [x + 0], [y - 0.5], [x + 0, y - 3.2], [x + 4.8, y - 3.2], [x + 0], [y - 0.5], [x + 3.8, y - 0.5], [x + 0], [y - 0.5], [x + 0, y + 3.2], [x + 4.8, y + 3.2]); }
export const drawL = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => { drawShape(ctx, 0, 0, 1.3, color, [x + 0], [y - 0.5], [x + 0, y - 3.7], [x + 0], [y - 0.5], [x + 0, y + 3.2], [x + 4.8, y + 3.2]); }
export const drawP = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => { drawShape(ctx, 0, 0, 1.3, color, [x + 0], [y - 0.5], [x + 0, y - 3.2], [x + 2.8, y - 3.2], [x + 5, y - 2.5, x + 2.8, y - 0.5], [x + 0, y - 0.5], [x + 0], [y - 0.5], [x + 0, y + 3.2]); }
export const drawV = (ctx: CanvasRenderingContext2D, color: Color, x: number, y: number): void => { drawShape(ctx, 0, 0, 1.3, color, [x + 2.5], [y + 3.5], [x + 0.5, y - 3.5], [x + 3.5], [y + 3.5], [x + 5.5, y - 3.5]); }
