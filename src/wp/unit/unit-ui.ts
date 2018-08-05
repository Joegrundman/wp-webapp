'use strict';
import { unitArc } from '../../constants/game/unit-constants';
import Color from '../misc/Color';
import Unit from './unit';

export const drawBase = (ctx: CanvasRenderingContext2D, unit: Unit): void => {
	const bgCol: Color = unit.owner ?
		unit.owner.backColor :
		new Color(240, 240, 240);
	ctx.lineWidth = 0;
	ctx.fillStyle = getShadowColor(bgCol).toRgb();
	drawRoundRect(ctx, 0, 0, unit.size + 1, unit.size + 1, unitArc);
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = bgCol.toRgb();
	ctx.strokeStyle = ctx.fillStyle;
	drawRoundRect(ctx, 1, 1, 0.5, 0.5, unitArc);
	ctx.fill();
	ctx.stroke();
	const name: string = unit.owner ? unit.owner.name.toLowerCase() : ''; 
	if (['vlasov', 'wang', 'indian nat. army'].includes(name)) {
		drawGradientBackground(ctx, unit);
	}
}

export const drawColorRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string) => {
	const blackLineColor: Color = new Color(0, 0, 0);
	const boxColor: Color = color === 'blue' ?
		new Color(11, 128, 244) : // blue
			color === 'yellow' ?
				new Color(238, 237, 41) : // yellow
				new Color(150, 87, 180) // purple

	ctx.lineWidth = 1;
	ctx.strokeStyle = blackLineColor.toRgb();
	ctx.strokeRect(x, y, w, h);
	ctx.fillStyle = boxColor.toRgb();
	ctx.fillRect(x, y, w, h);
}

export const drawDamaged = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const burningShip: HTMLImageElement = new Image();
	burningShip.src = 'assets/units/burning_ship.gif';
	ctx.drawImage(burningShip, 0, 11);
}

export const drawEllipse = (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h: number,
	color: Color,
	linewidth: number
) => {
	const kappa: number = 0.5522848; 
	const ox: number = (w / 2) * kappa; // control point offset horizontal
	const oy: number = (h / 2) * kappa; // control point offset vertical
	const xe: number = x + w;           // x-end
	const ye: number = y + h;           // y-end
	const xm: number = x + w / 2;       // x-middle
	const ym: number = y + h / 2;       // y-middle
	ctx.lineWidth = linewidth;
	ctx.strokeStyle = color.toRgb();
	ctx.beginPath();
	ctx.moveTo(x, ym);
	ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
	ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
	ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
	ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
	ctx.closePath();
	ctx.stroke();
}

export const drawEliminated = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.lineWidth = 1;
	for (let i = 7; i < 40; i += 7) {
		ctx.strokeStyle = new Color(150, 107, 180).toRgb();
		ctx.beginPath();
		ctx.moveTo(2, 40- i);
		ctx.lineTo(i, 38);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(38, i);
		ctx.lineTo(40 - i, 2);
		ctx.closePath();
		ctx.stroke();
	}
}

export const drawExploiting = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	drawShape(ctx, 1, 0, 1, unit.owner.foreColor, [12.5], [8.5], [24.5, 8.5], [29, 12.5, 24.5, 16.5], [12.5, 16.5], [8, 12.5, 12.5, 8.5]);
}

export const drawFlagOutline = (ctx: CanvasRenderingContext2D) => {
	ctx.lineWidth = 1;
	ctx.strokeStyle = new Color(10, 10, 10).toRgb();
	ctx.strokeRect(6.5, 3.5, 27, 19);
}

export const drawGradientBackground = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	if(!unit.owner) { return }
	const black: Color = new Color(40, 40, 40);
	const backgrad: CanvasGradient = ctx.createLinearGradient(0, 0, 0, 41);
	backgrad.addColorStop(0, unit.owner.backColor.toRgb());
	backgrad.addColorStop(1, black.toRgb());
	ctx.fillStyle = backgrad;
	ctx.fillRect(0, 0, 41, 41);
}

export const drawHighlight = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const arc: number = Math.floor(unit.size / 14.33);
	ctx.lineWidth = 4;
	if (unit.highlight){
		ctx.strokeStyle = unit.highlight;
	} else {
		ctx.strokeStyle = new Color(193, 215, 193).toRgb();
}
	drawRoundRect(ctx, 2, 2, unit.size - 1.5, unit.size - 1.5, arc);
	ctx.stroke();
}

export const drawInverted = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.lineWidth = 1;
	for (let i = 7; i < 40; i += 7) {
		ctx.strokeStyle = unit.owner.foreColor.toRgb();
		ctx.beginPath();
		ctx.moveTo(2, i);
		ctx.lineTo(i, 2);
		ctx.closePath();
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(38, 40 - i);
		ctx.lineTo(40 - i, 38);
		ctx.closePath();
		ctx.stroke();
	}
}

export const drawIsolated = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.lineWidth = 1;
	ctx.strokeStyle = unit.owner.foreColor.toRgb();
	ctx.beginPath();
	ctx.moveTo(2, 2);
	ctx.lineTo(38, 38);
	ctx.moveTo(2, 38);
	ctx.lineTo(38, 2);
	ctx.closePath();
	ctx.stroke();	
}

export const drawNavalColorBox = (ctx: CanvasRenderingContext2D, color: string) => {
	let useCol: Color;
	if (color === "orange") { useCol = new Color(240, 154, 49); }
	else if (color === "purple") { useCol = new Color(180, 147, 190); }
	else { useCol = new Color(238, 237, 41); } // yellow
	ctx.fillStyle = useCol.toRgb();
	ctx.fillRect(0.5, 12, 39, 13);
}

export const drawRoundRect = (ctx: CanvasRenderingContext2D, sx: number, sy: number, ex: number, ey: number, r: number) => {
	const r2d = Math.PI / 180;
	if ((ex - sx) - (2 * r) < 0) { r = ((ex - sx) / 2); } // ensure that the radius isn't too large for x
	if ((ey - sy) - (2 * r) < 0) { r = ((ey - sy) / 2); } // ensure that the radius isn't too large
	[sx, sy, ex, ey, r] = [sx, sy, ex, ey, r].map((v: number): number => Math.floor(v));
	if (r < 0) { r = 0; }
	ctx.beginPath();
	ctx.moveTo(sx + r, sy);
	ctx.lineTo(ex - r, sy);
	ctx.arc(ex - r, sy + r, r, r2d * 270, r2d * 360, false);
	ctx.lineTo(ex, ey - r);
	ctx.arc(ex - r, ey - r, r, r2d * 0, r2d * 90, false);
	ctx.lineTo(sx + r, ey);
	ctx.arc(sx + r, ey - r, r, r2d * 90, r2d * 180, false);
	ctx.lineTo(sx, sy + r);
	ctx.arc(sx + r, sy + r, r, r2d * 180, r2d * 270, false);
	ctx.closePath();
};

export const getShadowColor = (color: Color) => {
	const mod: number = 30;
	const red: number = Math.max(0, color.red - mod);
	const green: number = Math.max(0, color.green - mod);
	const blue: number = Math.max(0, color.blue - mod);
	return new Color(red, green, blue);
}

export function drawShape (ctx: CanvasRenderingContext2D, doFill: boolean | number, mirror: number, lineWidth: number, color: Color, ...args: number[][]) {
	ctx.lineWidth = lineWidth;
	ctx.beginPath();
	ctx.strokeStyle = color.toRgb();
	drawOutline(ctx, ...args);
	if (mirror) {
		drawReflection(ctx, mirror, ...args);
	}
	if (doFill) { 
		ctx.fillStyle = color.toRgb();
		ctx.fill();
	}
	ctx.stroke();
	ctx.closePath();
}

export const drawSharedAlliedBase = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const tan: Color = new Color(151, 172, 108);
	const olive: Color = new Color(209, 188, 140);
	ctx.fillStyle = tan.toRgb();
	ctx.fill();
	ctx.lineWidth = 0;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(unit.size, unit.size);
	ctx.lineTo(0, unit.size);
	ctx.lineTo(0, 0);
	ctx.fillStyle = olive.toRgb();
	ctx.fill();
	ctx.stroke();
}

export const drawShield = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const x: number = 8;
	const y: number = 7;
	const width: number = Math.floor(unit.size / 1.9);
	const height: number = Math.floor(unit.size / 3.5);
	ctx.lineWidth = 1;
	ctx.strokeStyle = unit.owner.lineColor.toRgb();
	ctx.strokeRect(x, y, width, height);
	ctx.fillStyle = unit.owner.innerColor.toRgb();
	ctx.fillRect(x, y, width, height);
}

export const drawSunk = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const seaCol = new Color(53, 178, 202);
	const skyCol = new Color(210, 240, 255);
	const seabedCol = new Color(130, 205, 210);
	ctx.fillStyle = seaCol.toRgb();
	ctx.fillRect(0.5, 12, 39, 13);
	ctx.fillStyle = seabedCol.toRgb();
	ctx.fillRect(0.5, 21, 39, 4);
	if (unit.hex && unit.hex.isPort) { ctx.fillStyle = skyCol.toRgb(); ctx.fillRect(1, 12, 40, 4); }
}

export const drawUnitTexture = (ctx: CanvasRenderingContext2D) => {
	// dynamic drawing replaces jpeg for more reliable loading
	const dark = "rgba(70, 70, 70, 0.7)"
	const clear = "rgba(10, 10, 10, 0)"
	const light = "rgba(220, 220, 220, .2)"
	
	const unitShading: CanvasGradient = ctx.createRadialGradient(20, 12, 11, 20, 20, 50)
	unitShading.addColorStop(0, clear)
	unitShading.addColorStop(1, dark)
	ctx.fillStyle = unitShading
	ctx.fillRect(0, 0, 42, 42)
	
	const highlight: CanvasGradient = ctx.createRadialGradient(28, 8, 5, 15, 15, 30)
	highlight.addColorStop(0, light)
	highlight.addColorStop(1, clear)
	ctx.fillStyle = highlight
	ctx.fillRect(0, 0, 42, 42)
}

export function	drawOutline (ctx: CanvasRenderingContext2D, ...args: number[][]): void {
	for (let i: number = 0; i < args.length; i++) {
		const coords: number[] = args[i];
		const len: number = coords.length;
		if (len === 1) { ctx.moveTo(coords[0], args[++i][0]); }
		else if (len === 2) { ctx.lineTo(coords[0], coords[1]) }
		else if (len === 4) { ctx.quadraticCurveTo(coords[0], coords[1], coords[2], coords[3]); }
		else if (len === 6) { ctx.bezierCurveTo(coords[0], coords[1], coords[2], coords[3], coords[4], coords[5]); }
	}
}

export function drawReflection (ctx: CanvasRenderingContext2D, mirror: number, ...args: number[][]) {
	mirror = mirror * 2
	for (let i = 0; i < args.length; i++) {
		const coords: number[] = args[i];
		const len: number = coords.length;
		if (len === 1) { ctx.moveTo(mirror - coords[0], args[++i][0]); }
		else if (len === 2) { ctx.lineTo(mirror - coords[0], coords[1]); }
		else if (len === 4) { ctx.quadraticCurveTo(mirror - coords[0], coords[1], mirror - coords[2], coords[3]); }
		else if (len === 6) { ctx.bezierCurveTo(mirror - coords[0], coords[1], mirror - coords[2], coords[3], mirror - coords[4], coords[5]); }
	}
}

export const drawWhiteBase = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const bc: Color = unit.owner.backColor;
	unit.owner.backColor = new Color(245, 245, 245);
	drawBase(ctx, unit);
	unit.owner.backColor = bc;
}

export const fillEllipse = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: Color, linewidth: number) => {
	drawEllipse(ctx, x, y, w, h, color, linewidth)
	ctx.fillStyle = color.toRgb();
	ctx.fill();
}

export const getHighlightColor = (color: Color): Color => {
	const mod = 30;

	let r = color.red + mod;
	let g = color.green + mod;
	let b = color.blue + mod;

	if (r > 255) { r = 255; }
	if (g > 255) { g = 255; }
	if (b > 255) { b = 255; }
	return new Color(r, g, b);
}
