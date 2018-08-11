import Color from '../misc/Color';
import Unit from './unit';
import * as UI from './unit-ui';
import * as UiText from './unit-ui-text';

export const white: Color = new Color(255, 255, 255);
export const black: Color = new Color(30, 30, 30);
export const darkBlack: Color = new Color(20, 20, 20);
export const red: Color = new Color(225, 80, 30);
export const offWhite: Color = new Color(245, 245, 245);
export const darkgray: Color = new Color(68, 81, 130);
export const verylightgray: Color = new Color(220, 220, 220);
export const lightgray: Color = new Color(180, 180, 180);
export const gray: Color = new Color(155, 155, 155);
export const darkGray: Color = new Color(100, 100, 100);
export const midGray: Color = new Color(170, 170, 170);
export const blue: Color = new Color(158, 191, 210);
export const blue2 = new Color(140, 200, 235);

export const drawAirbase = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color: Color = unit.owner.foreColor
	const owner: string = unit.owner.name.toLowerCase()
	if ((owner === "japan") ||
	(owner === "nationalist china") ||
	(owner === "natchina")) {
		UI.drawEllipse(ctx, 7, 6.5, 27, 27, color, 1.8);
	}
	else { UI.drawEllipse(ctx, 7, 6.5, 27, 27, white, 1.8); }
	UI.drawShape(ctx, 0, 0, 1.8, color, [10.5], [21], [30.5, 21], [13.5], [25.5], [26.5, 13.5]);
}

export const drawAtomicAttack = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	UiText.writeGenericText(ctx, unit, "Atomic", "bold 8px tahoma", 0, 27, black);
	UiText.writeGenericText(ctx, unit, "Attack", "bold 8px tahoma", 0, 35, black);
	UI.drawShape(ctx, 0, 20, 1.5, black, [4], [18], [20, 18], [7], [18], [7, 16], [10], [18], [10, 15], [13], [18], [13, 16]);
	ctx.fillStyle = red.toRgb();
	UI.fillEllipse(ctx, 10, 3, 20, 8, red, 0);
	UI.drawShape(ctx, 1, 0, 0, red, [19], [10], [17, 15], [23, 15], [21, 10]);
}

export const drawBeachDefense = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const bc = unit.owner.backColor
	unit.owner.backColor = new Color(250, 233, 137);
	UI.drawBase(ctx, unit);
	UI.drawShape(ctx, 0, 0, 5, offWhite, [0], [30], [5, 32], [10, 33], [13, 33], [15, 31], [22, 30], [25, 28], [27, 27], [32, 28], [41, 30]);
	UI.drawShape(ctx, 1, 0, 1, blue, [0], [30], [5, 32], [10, 33], [13, 33], [15, 31], [22, 30], [25, 28], [27, 27], [32, 28], [41, 30], [41, 41], [0, 41], [0, 30]);
	UI.drawShape(ctx, 0, 20, 1.3, darkgray, [4.5], [14.5], [8.5, 21.5], [4.5], [21.5], [8.5, 14.5], [13.5], [14.5], [17.5, 21.5], [13.5], [21.5], [17.5, 14.5]);
	UI.drawShape(ctx, 0, 0, 1.3, darkgray, [8], [7], [4.5, 12], [20], [7], [20, 13], [32], [7], [35.5, 12]);
	ctx.fillStyle = lightgray.toRgb();
	UI.fillEllipse(ctx, 5, 4, 6, 6, lightgray, 0.5);
	UI.fillEllipse(ctx, 17, 4, 6, 6, lightgray, 0.5);
	UI.fillEllipse(ctx, 29, 4, 6, 6, lightgray, 0.5);
	UI.drawEllipse(ctx, 5, 4, 6, 6, darkgray, 0.8);
	UI.drawEllipse(ctx, 17, 4, 6, 6, darkgray, 0.8);
	UI.drawEllipse(ctx, 29, 4, 6, 6, darkgray, 0.8);
	unit.owner.backColor = bc
}

export const drawBreakthrough = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	UiText.writeGenericText(ctx, unit, "Break", "bold 8px tahoma", 20, 27, black);
	UiText.writeGenericText(ctx, unit, "Through", "bold 8px tahoma", 20, 35, black);
	UI.drawShape(ctx, 0, 20, 1.5, black, [4], [15], [14, 15], [16, 13, 12, 11]);
	UI.drawShape(ctx, 1, 20, 0.1, red, [20], [20], [16, 20], [18, 8], [15, 8], [20, 3]);
}

export const drawBridgehead = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	const bhBlue = new Color(140, 200, 235);
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.fillStyle = bhBlue.toRgb();
	ctx.arc(20.5, 20.5, 13, 0, 3.14, false);
	ctx.fill();
	UI.drawEllipse(ctx, 7.5, 7.5, 26, 26, darkBlack, 1.3);
	UiText.writeGenericText(ctx, unit, "BH", "bold 13px helvetica", 0, 26, darkBlack);
}

export const drawDamage =  (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	UI.drawShape(ctx, 1, 0, 1.4, darkBlack, [12], [21], [15, 18.5], [15, 21], [17], [21], [20, 18.5], [20, 21], [22], [21], [25, 18.5], [25, 21], [28], [21], [28, 11], [32], [21], [32, 11]);
	ctx.fillStyle = black.toRgb();
	ctx.fillRect(9, 20, 26, 5);
	UI.drawShape(ctx, 1, 20, 0.1, red, [5], [14], [11, 14], [8, 8], [5, 14]);
	UI.drawShape(ctx, 1, 20, 0.1, red, [13], [14], [19, 14], [16, 8], [13, 14]);
	UiText.writeGenericText(ctx, unit, "Damaged", "bold 7px tahoma", 0, 35, darkBlack);
}

export const drawDone = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	UiText.writeGenericText(ctx, unit, "DONE", "bold 8px tahoma", 0, 21, darkBlack);
}

export const drawExploit = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	UiText.writeGenericText(ctx, unit, "Exploit", "bold 8px tahoma", 0, 36, black);
	UI.drawShape(ctx, 0, 20, 1.5, black, [4], [25], [14, 25], [16, 23, 12, 21]);
	UI.drawShape(ctx, 0, 0, 3, red, [19], [26], [20, 14, 11, 11], [20], [26], [20, 6], [21], [26], [22, 12, 32, 15]);
	UI.drawShape(ctx, 1, 0, 0.1, red, [20], [3], [23.5, 9], [16.5, 9], [20, 3]);
	UI.drawShape(ctx, 1, 0, 0.1, red, [6], [9.5], [13, 7.5], [11, 14.5], [6, 9.5]);
	UI.drawShape(ctx, 1, 0, 0.1, red, [36], [14.5], [30, 18], [30, 11], [36, 14.5]);
}

export const drawFireStorm = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	UiText.writeGenericText(ctx, unit, "Fire", "bold 8px tahoma", 0, 27, black);
	UiText.writeGenericText(ctx, unit, "Storm", "bold 8px tahoma", 0, 35, black);
	UI.drawShape(ctx, 0, 20, 1.5, black, [4], [18], [20, 18], [7], [18], [7, 16], [10], [18], [10, 15], [13], [18], [13, 16], [17], [18], [17, 16], [20], [18], [20, 15]);
	UI.drawShape(ctx, 1, 20, 0.1, red, [5], [14], [11, 14], [8, 8], [5, 14]);
	UI.drawShape(ctx, 1, 20, 0.1, red, [13], [14], [19, 14], [16, 8], [13, 14]);
}

export const drawFlak = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	if (['america', 'us', 'united states', 'unitedstates', 'britain'].includes(unit.owner.name.toLowerCase())) {
		UI.drawSharedAlliedBase(ctx, unit);
	}

	UI.drawShape(ctx, 0, 0, 1.3, color, [15], [21], [28, 21], [25], [19], [17, 13]);
	UI.drawShape(ctx, 1, 0, 1.3, color, [19], [21], [19, 18], [22, 15], [23, 21]);
	UI.drawShape(ctx, 0, 0, 1, color, [25.5], [18.5], [11.6, 7.5]);
	UiText.writeBottomMiddleStrength(ctx, unit);
}

export const drawFortress = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	ctx.fillStyle = darkBlack.toRgb();
	UI.fillEllipse(ctx, 8.5, 16.5, 7, 7, darkBlack, 0.5);
	UI.fillEllipse(ctx, 13, 8, 7, 7, darkBlack, 0.5);
	UI.fillEllipse(ctx, 13, 24.5, 7, 7, darkBlack, 0.5);
	UI.fillEllipse(ctx, 26.5, 16.5, 7, 7, darkBlack, 0.5);
	UI.fillEllipse(ctx, 22, 8, 7, 7, darkBlack, 0.5);
	UI.fillEllipse(ctx, 22, 24.5, 7, 7, darkBlack, 0.5);
	UI.drawShape(ctx, 0, 21, 1, darkBlack, [7.5], [19.5], [4.5, 19.5], [14.5], [9], [12.5, 5], [14.5], [30], [12.5, 34]);
}

export const drawGrant = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	ctx.fillStyle = gray.toRgb();
	ctx.fillRect(3, 3, 35, 35);
	UiText.writeGenericText(ctx, unit, "Grant", "bold 11px tahoma", 0, 15, white);
	UiText.writeGenericText(ctx, unit, '' + unit.strength, "bold 12px tahoma", 0, 30, white);
}

export const drawIc = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 0, 1.4, unit.owner.foreColor, [12], [17], [15, 14.5], [15, 17], [17], [17], [20, 14.5], [20, 17], [22], [17], [25, 14.5], [25, 17], [28], [17], [28, 7], [32], [17], [32, 7]);
	ctx.fillStyle = unit.owner.foreColor.toRgb();
	ctx.fillRect(9, 16, 26, 5);
	UiText.writeBottomMiddleStrength(ctx, unit);
}

export const drawInformation = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.lineWidth = 3;
	ctx.strokeStyle = UI.getHighlightColor(unit.owner.backColor).toRgb();
	ctx.strokeRect(2, 2, unit.size - 6, unit.size - 6);
	ctx.lineWidth = 0;
	if(unit.owner.flagImage) { ctx.drawImage(unit.owner.flagImage, 6.5, 4); }
	UI.drawFlagOutline(ctx);
	UiText.writeGenericText(ctx, unit, unit.name, "bold 8px verdana", 21, 35);
}

export const drawIsolation = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	const fc = unit.owner.foreColor
	unit.owner.foreColor = black
	UI.drawShape(ctx, 0, 0, 1, black, [14.5], [14.5], [25.5, 14.5], [25.5, 21.5], [14.5, 21.5], [14.5, 14.5], [25.5, 21.5], [14.5], [21.5], [25.5, 14.5]);
	UI.drawEllipse(ctx, 9, 11.5, 22, 13, red, 1.5);
	UiText.writeGenericText(ctx, unit, "Isolation", "bold 8px tahoma", 21, 10);
	UiText.writeBottomMiddleStrength(ctx, unit);
	unit.owner.foreColor = fc
}

export const drawLent = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const owner: string = unit.owner.name.toLowerCase();
	const ic: Color = unit.owner.innerColor;
	if (owner === "spain") { unit.owner.innerColor = new Color(140, 140, 140); }
	else if (owner === "vichy") { unit.owner.innerColor = new Color(100, 100, 100) }
	else { unit.owner.innerColor = new Color(151, 184, 108); }
	UI.drawShield(ctx, unit);
	unit.owner.innerColor = ic;
}

export const drawOil = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	ctx.fillStyle = darkGray.toRgb(); // dark background
	ctx.fillRect(4, 4, 34, 34);
	const oilCanGradient1: CanvasGradient = ctx.createLinearGradient(20, 10, 30, 10); // back can
	oilCanGradient1.addColorStop(0, darkBlack.toRgb());
	oilCanGradient1.addColorStop(0.7, verylightgray.toRgb());
	oilCanGradient1.addColorStop(1, darkBlack.toRgb());
	// oil can 1
	ctx.fillStyle = oilCanGradient1;
	ctx.strokeStyle = black.toRgb();
	ctx.lineWidth = 0.5;
	ctx.beginPath();
	ctx.moveTo(19, 9);
	ctx.lineTo(30, 9);
	ctx.lineTo(30, 24.5);
	ctx.quadraticCurveTo(25, 26, 19, 24.5);
	ctx.lineTo(19, 9);
	ctx.fill();
	ctx.moveTo(30, 12.5);
	ctx.quadraticCurveTo(25, 14.5, 19, 12.5); // ribs
	ctx.moveTo(30, 16.5);
	ctx.quadraticCurveTo(25, 18.5, 19, 16.5);
	ctx.moveTo(30, 20.5);
	ctx.quadraticCurveTo(25, 22.5, 19, 20.5);
	ctx.stroke();
	ctx.fillStyle = midGray.toRgb(); // lid
	UI.fillEllipse(ctx, 19.5, 9, 10, 1.5, darkBlack, 1);
	ctx.fillStyle = darkBlack.toRgb(); // spout
	UI.fillEllipse(ctx, 22, 9.8, 1, 1, darkBlack, 1);
	// oil can 2
	const oilCanGradient2: CanvasGradient = ctx.createLinearGradient(8, 13, 21, 13); // front can
	oilCanGradient2.addColorStop(0, darkBlack.toRgb());
	oilCanGradient2.addColorStop(0.7, verylightgray.toRgb());
	oilCanGradient2.addColorStop(1, darkBlack.toRgb());
	ctx.fillStyle = oilCanGradient2;
	ctx.strokeStyle = black.toRgb();
	ctx.lineWidth = 0.5;
	ctx.beginPath();
	ctx.moveTo(8, 13);
	ctx.lineTo(22, 13);
	ctx.lineTo(22, 30.5);
	ctx.quadraticCurveTo(15, 32.5, 8, 30.5);
	ctx.lineTo(8, 13);
	ctx.fill();
	ctx.moveTo(22, 17.5);
	ctx.quadraticCurveTo(15, 19.5, 8, 17.5); // ribs
	ctx.moveTo(22, 21.5);
	ctx.quadraticCurveTo(15, 23.5, 8, 21.5);
	ctx.moveTo(22, 25.5);
	ctx.quadraticCurveTo(15, 27.5, 8, 25.5);
	ctx.stroke();
	ctx.fillStyle = midGray.toRgb(); // lid
	UI.fillEllipse(ctx, 8.5, 13, 12, 2, darkBlack, 1);
	ctx.fillStyle = darkBlack.toRgb(); // spout
	UI.fillEllipse(ctx, 12, 13.8, 1, 1, darkBlack, 1.5);
	ctx.font = "bold 14px helvetica"; // text
	ctx.textAlign = "center";
	ctx.fillStyle = white.toRgb();
	ctx.fillText('' + unit.strength, 32, 35);
}

export const drawOilEffect = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.fillStyle = unit.owner.innerColor.toRgb();
	ctx.fillRect(5, 4, 32, 24);
	UiText.writeGenericText(ctx, unit, "oil", "bold 8px verdana", 0, 14);
	UiText.writeGenericText(ctx, unit, "effect", "bold 8px verdana", 0, 22);
	UiText.writeGenericText(ctx, unit, unit.name, "bold 8px verdana", 21, 36);
}

export const drawOilPlant = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const owncol = unit.owner.foreColor;
	ctx.fillStyle = owncol.toRgb();
	ctx.fillRect(5, 23, 32, 3);
	ctx.fillRect(11, 19, 8, 4);
	UI.drawShape(ctx, 1, 0, 1.8, owncol, [8], [23], [8, 10], [22], [23], [22, 7], [26], [23], [26, 15], [28, 15], [33, 20], [36, 20], [36, 23]);
	UI.drawShape(ctx, 0, 0, 1, owncol, [26.5], [15], [26.5, 9], [29.5], [17], [29.5, 13], [32.5], [20], [32.5, 14], [34.5], [20], [34.5, 17]);
	UiText.writeGenericText(ctx, unit, "Oil Plant", "bold 8px tahoma", 21, 37);
}

export const 	drawPartialSupply = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	const fc = unit.owner.foreColor;
	unit.owner.foreColor = black
	UI.drawShape(ctx, 0, 0, 1, black, [14.5], [24.5], [25.5, 24.5], [25.5, 31.5], [14.5, 31.5], [14.5, 24.5], [25.5, 31.5], [14.5], [31.5], [25.5, 24.5]);
	UI.drawEllipse(ctx, 9, 21.5, 22, 13, red, 1.5);
	UI.drawShape(ctx, 0, 20, 3, white, [15], [22], [18, 22], [10.5], [23], [10.5, 26], [15], [34], [18, 34], [10.5], [33], [10.5, 30]);
	UiText.writeGenericText(ctx, unit, "Partial", "bold 8px tahoma", 0, 10, black);
	UiText.writeGenericText(ctx, unit, "Supply", "bold 8px tahoma", 0, 17, black);
	unit.owner.foreColor = fc;
}

export const drawPort = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	ctx.lineWidth = 1; // blue sea
	ctx.beginPath();
	ctx.fillStyle = blue2.toRgb();
	ctx.arc(20.5, 20.5, 13, 0, 3.14);
	ctx.fill();
	ctx.lineWidth = 1; // waves
	ctx.beginPath();
	ctx.fillStyle = white.toRgb();
	ctx.arc(13, 18.5, 4, 0, 3.14);
	ctx.fill();
	ctx.arc(20.5, 18.5, 4, 0, 3.14);
	ctx.fill();
	ctx.arc(28, 18.5, 4, 0, 3.14);
	ctx.fill();
	UI.drawEllipse(ctx, 19, 10.5, 3, 3, black, 1.2); // anchorring
	UI.drawShape(ctx, 0, 20.5, 1, black, [20.5], [13], [20.5, 30], [20.5], [15.5], [14.5, 15.5], [20.5, 16], [20.5], [30], [13.5, 30, 13.5, 25], [16, 28]);
	UI.drawEllipse(ctx, 7.5, 7.5, 26, 26, black, 1.3); // circle
}

export const drawRailhead = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	UI.drawEllipse(ctx, 5, 5, 30, 30, red, 1.5); // circle
	ctx.fillStyle = black.toRgb();
	ctx.fillRect(12, 17, 17, 7);
	UI.fillEllipse(ctx, 14, 23, 3, 3, black, 0.5); // wheels
	UI.fillEllipse(ctx, 18, 23, 3, 3, black, 0.5);
	UI.fillEllipse(ctx, 22, 23, 3, 3, black, 0.5);
	UI.fillEllipse(ctx, 26, 23, 3, 3, black, 0.5);
	UI.fillEllipse(ctx, 25, 18, 5, 5, black, 0.5); // nose
	UI.fillEllipse(ctx, 18, 16, 3, 3, black, 0.5); // boiler stuff
	UI.fillEllipse(ctx, 10.5, 22, 3, 3, black, 0.5); // under cabin
	UI.drawShape(ctx, 1, 0, 0.001, black, [14], [18], [14, 16], [8, 16], [8, 18], [12, 18], [14], [19], [9, 19], [9, 23], [14, 23]);
	UI.drawShape(ctx, 0, 0, 1, black, [30], [20.5], [32, 20.5], [28], [24], [30.5, 24], [31, 26], [27], [18.5], [27, 14.5], [27], [18.5], [27, 14.5], [23], [18.5], [23, 15.5], [16], [18.5], [16, 15.5], [9.5], [16], [9.5, 19]);
}

export const drawRocket = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 13, 20.5, 1, unit.owner.foreColor, [20.5], [5.5], [20.5, 35], [20.5], [6], [19, 10, 18.5, 20], [18.5, 28], [16.5, 30], [16.5, 35], [17.5, 35], [20.5, 33]);
}

export const drawSpyRing = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.fillStyle = unit.owner.innerColor.toRgb();
	UI.fillEllipse(ctx, 10.5, 6, 20, 20, unit.owner.innerColor, 1);
	UiText.writeGenericText(ctx, unit, "spy", "bold 8px verdana", 21, 14);
	UiText.writeGenericText(ctx, unit, "ring", "bold 8px verdana", 21, 22);
	UiText.writeGenericText(ctx, unit, unit.name, "bold 8px verdana", 21, 36);
}

export const drawTurn = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawWhiteBase(ctx, unit);
	const orange = new Color(229, 111, 50);
	const yellow = new Color(220, 187, 82);
	const turnCircleGradient: CanvasGradient = ctx.createRadialGradient(20.5, 20.5, 0, 20.5, 20.5, 12);
	turnCircleGradient.addColorStop(0.5, yellow.toRgb());
	turnCircleGradient.addColorStop(1, orange.toRgb());
	ctx.fillStyle = turnCircleGradient;
	UI.drawEllipse(ctx, 4, 4, 33, 33, orange, 1);
	ctx.fill();
	UiText.writeGenericText(ctx, unit, "Turn", "bold 12px arial", 21, 24, black);
}
