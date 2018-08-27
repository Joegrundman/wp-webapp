import Color from 'Misc/Color';
import Unit from './unit';
import * as UI from './unit-ui';
import * as Misc from './unit-ui-misc';
import * as UiText from './unit-ui-text';

export const drawAaf = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	if (unit.isLent) { 
		Misc.drawLent(ctx, unit);
	}
	const lc: Color = unit.owner.lineColor
	UI.drawEllipse(ctx, 10.5, 9.5, 8, 6, lc, 1);
	UI.drawEllipse(ctx, 18.5, 9.5, 8, 6, lc, 1);
	UiText.writeStrengthAndMovement(ctx, unit);
	UiText.writeDesignation(ctx, unit);
}

export const drawAas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	UI.drawShape(ctx, 0, 20.5, 1, color, [20.5], [21], [20.5, 13], [20.5], [17.5], [14, 17.5], [20.5], [21.5], [2.5, 20.5], [20.5], [20.5], [10.5, 20.5], [17.5], [22.5], [16.5, 22.5]);
	UI.drawShape(ctx, 0, 20.5, 0.5, color, [14.5], [22], [11.5, 22]);
	UI.fillEllipse(ctx, 18, 16.5, 5, 5, color, 1);
}

export const drawAasAttack = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 0, 0, unit.owner.innerColor, [5], [8], [unit.size - 5, 8], [unit.size / 2, unit.size - 6]);
	drawAas(ctx, unit);
	UiText.writeGenericText(ctx, unit, "ATTACK", "bold 8px verdana", 21, 10);
	UiText.writeBottomMiddleStrength(ctx, unit);
}

export const drawAasCover = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.fillStyle = unit.owner.innerColor.toRgb();
	ctx.fillRect(5, 8, 33, 29);
	drawAas(ctx, unit);
	UiText.writeGenericText(ctx, unit, "COVER", "bold 8px verdana", 21, 10);
	UiText.writeBottomMiddleStrength(ctx, unit);
}

export const drawAasSearch = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	ctx.fillStyle = unit.owner.innerColor.toRgb();
	UI.drawEllipse(ctx, 6.5, 8, 28, 28, unit.owner.innerColor, 1);
	ctx.fill();
	drawAas(ctx, unit);
	UiText.writeGenericText(ctx, unit, "SEARCH", "bold 8px verdana", 21, 10);
	UiText.writeBottomMiddleStrength(ctx, unit);
}

export const drawAirTransport = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const white = new Color(255, 255, 255);
	UI.drawEllipse(ctx, 9.5, 3, 20, 20, white, 1.3);
	if (unit.owner.name.toLowerCase() === "japan") { drawTrans(ctx, unit.owner.foreColor); }
	else { drawTrans(ctx, white); }
	UiText.writeStrengthAndMovement(ctx, unit);
	unit.name = "Air Trans";
	UiText.writeDesignation(ctx, unit);
}

export const drawAvg = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const bc = unit.owner.backColor;
	const fc = unit.owner.foreColor;
	const ic = unit.owner.innerColor;
	const lc = unit.owner.lineColor;
	unit.owner.lineColor = new Color(255, 255, 255);
	unit.owner.backColor = new Color(255, 154, 49);
	unit.owner.foreColor = new Color(40, 40, 40);
	unit.owner.innerColor = new Color(0, 154, 206);

	UI.drawBase(ctx, unit);
	UI.drawShield(ctx, unit);
	if (unit.isLent) { Misc.drawLent(ctx, unit); }
	UI.drawEllipse(ctx, 10.5, 9.5, 8, 6, unit.owner.lineColor, 1);
	UI.drawEllipse(ctx, 18.5, 9.5, 8, 6, unit.owner.lineColor, 1);
	UiText.writeStrengthAndMovement(ctx, unit);
	UiText.writeDesignation(ctx, unit);

	unit.owner.backColor = bc;
	unit.owner.foreColor = fc;
	unit.owner.innerColor = ic;
	unit.owner.lineColor = lc;
}

export const drawPacificBomber = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawColorRect(ctx, 2, 2, 37, 22, "yellow");
	const color = new Color(245, 245, 235);
	UiText.writeGenericText(ctx, unit, "B", 'bold 8px verdana', 7, 20)
	UiText.writeGenericText(ctx, unit, "Pac", 'bold 8px tahoma', 31, 20)
	UiText.writeBottomMiddleStrength(ctx, unit);
	drawUsB29(ctx, unit, color);
}

export const drawBomber = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawColorRect(ctx, 2, 2, 37, 22, "blue");
	const color = new Color(245, 245, 235);
	UiText.writeGenericText(ctx, unit, "B", 'bold 8px verdana', 7, 20, color)
	UiText.writeBottomMiddleStrength(ctx, unit);
	switch (unit.owner.name.toLowerCase()) {
		case "britain": drawGbBom(ctx, unit, color); break;
		case "america": case "unitedstates": case "united states": case "us": drawUsB17(ctx, unit, color); break;
		case "russia": drawRuBom(ctx, unit, color); break;
		default: drawGeBom(ctx, unit, color); break;
	}
}

export const drawInterceptor = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawColorRect(ctx, 2, 2, 37, 22, "blue");
	UiText.writeBottomMiddleStrength(ctx, unit);
	const color = new Color(255, 255, 255);
	UiText.writeGenericText(ctx, unit, "Int", 'bold 8px tahoma', 9, 20, color)
	switch (unit.owner.name.toLowerCase()) {
		case "britain": drawGbInt(ctx, unit, color); break;
		case "america": case "unitedstates": case "united states": case "us": drawUsInt(ctx, unit, color); break;
		case "russia": drawRuInt(ctx, unit, color); break;
		default: drawGeInt(ctx, unit, color); break;
	}
}

export const drawJet = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UiText.writeBottomLeftStrength(ctx, unit);
	UiText.writeGenericText(ctx, unit, "Jet", 'bold 12px arial', 25, 38);
	switch (unit.owner.name.toLowerCase()) {
		case "britain": drawGbJet(ctx, unit); break;
		case "america": case "unitedstates": case "united states": case "us": drawUsJet(ctx, unit); break;
		case "germany": case "japan": drawGeJet(ctx, unit); break;
		default: drawRuJet(ctx, unit); break;
	}
}

export const drawKamikaze = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const fc = unit.owner.foreColor;
	unit.owner.foreColor = new Color(255, 130, 110);
	UI.drawBase(ctx, unit);
	drawJaNas(ctx, unit);
	UiText.writeStrengthAndMovement(ctx, unit);
	unit.owner.foreColor = fc;
}

export const drawEnas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const bc = unit.owner.backColor;
	const fc = unit.owner.foreColor;
	const ic = unit.owner.innerColor;
	unit.owner.backColor = new Color(246, 246, 0);
	unit.owner.foreColor = new Color(40, 40, 40);
	UI.drawBase(ctx, unit);
	drawJaNas(ctx, unit);
	UiText.writeStrengthAndMovement(ctx, unit);
	unit.owner.backColor = bc;
	unit.owner.foreColor = fc;
	unit.owner.innerColor = ic;
}

export const drawNas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UiText.writeStrengthAndMovement(ctx, unit);
	switch (unit.owner.name.toLowerCase()) {
		case "britain": drawGbNas(ctx, unit); break;
		case "america": case "unitedstates": case "united states": case "us": drawUsNas(ctx, unit); break;
		case "germany": drawGeNas(ctx, unit); break;
		case "japan": drawJaNas(ctx, unit); break;
		default: drawItNas(ctx, unit); break;
	}
}

export const drawJetSquadron = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	switch (unit.owner.name.toLowerCase()) {
		case "britain": drawGbJsq(ctx, unit); break;
		case "america": case "unitedstates": case "united states": case "us": drawUsJsq(ctx, unit); break;
		case "germany": case "japan": drawGeJsq(ctx, unit); break;
		default: drawRuJsq(ctx, unit); break;
	}
	UiText.writeBottomMiddleStrength(ctx, unit, 0, 1);
	UiText.writeDesignation(ctx, unit);
}

export const drawGbBom = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [21, 7.5], [15, 8], [6, 9], [4.5, 9.5, 6, 10], [15, 11], [21, 11], [21, 21], [16, 21], [21, 22]);
	UI.drawShape(ctx, 0, 21, 1, color, [21], [3], [21, 2], [21], [22], [21, 23.5], [17.5], [9], [17.5, 4.5], [13.5], [9], [13.5, 5]);
}

export const drawGbInt = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [20.5, 7.5], [13.5, 7.5], [9, 8, 9.5, 8.5], [13, 11.5, 20.5, 11], [21, 19.5], [18, 20.5], [18, 22, 21, 20.5]);
}

export const drawGbNas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor;
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [5], [20, 5], [20, 7], [11, 7], [9.5, 9, 11, 10.5], [17, 10.5], [20, 9], [21, 17.5], [17.5, 18.5], [17, 22, 21, 19]);
	UI.drawShape(ctx, 0, 21, 1.3, color, [21], [4.5], [18.5, 4.5], [21], [4.5], [21, 3]);
	UI.drawShape(ctx, 0, 0, 1.3, unit.owner.backColor, [21], [9], [21, 11.5]);
}

export const drawGbJet = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 21, 1.5, unit.owner.foreColor, [21], [2], [20.2, 5.5], [20, 9.5], [16, 9.5], [11.5, 11], [11.5, 12.5], [20, 15.5], [21, 23.5], [17, 25], [17, 25.5], [21, 26], [16.2], [7.2], [16, 17], [15.8, 7]);
	UI.drawShape(ctx, 0, 0, 1.4, unit.owner.backColor, [21], [5.5], [21, 8.5]);
}

export const drawGbJsq = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 21, 1.3, unit.owner.foreColor, [21], [3.5], [20.8, 5.5], [20, 10], [16.5, 10], [12.5, 11], [12.5, 12.5], [20, 14.5], [21, 20.5], [17.5, 22], [17.5, 22.5], [21, 23], [16.5], [7.5], [16.5, 16]);
	UI.drawShape(ctx, 0, 0, 1.3, unit.owner.backColor, [21], [5.5], [21, 8.5]);
}

export const drawGeBom = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [21, 8], [15, 8], [8, 9], [6.5, 9.5, 8, 10], [15, 11], [21, 11], [21, 19], [16, 20.5], [16, 21], [21, 21.5]);
	UI.drawShape(ctx, 0, 21, 1.8, color, [17], [10], [17, 4]);
}

export const drawGeInt = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [20.3, 8], [10.5, 9], [11, 10], [20.5, 11.5], [21, 19.5], [18, 20], [18, 20.5], [21, 20.5]);
}

export const drawGeNas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [20.3, 8], [9.5, 8.5], [9.5, 9], [20.5, 12], [21, 19.5], [21], [19.5], [17, 19.5]);
	UI.drawShape(ctx, 0, 21, 1, color, [17.5], [8], [17.5, 6.5]);
}

export const drawGeJet = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 21, 1.8, unit.owner.foreColor, [21], [3.5], [20.5, 5], [20, 9], [9.5, 12.2], [9.5, 12.5], [20, 12.5], [21, 20.5], [17, 22], [17, 23, 21, 21.5], [15.5], [7], [15.5, 15]);
}

export const drawGeJsq = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 21, 1.5, unit.owner.foreColor, [21], [5], [20.5, 7], [20, 10], [11.5, 12.2], [11.5, 12.5], [20.5, 12.5], [21, 18.5], [18, 20], [18, 21, 21, 19.5], [16.5], [8], [16.5, 15]);
}

export const drawUsB17 = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [21, 7.5], [7, 9], [5.5, 9.5, 7, 10], [21, 11.5], [21, 19.5], [15, 20.5], [15, 21], [21, 22]);
	UI.drawShape(ctx, 0, 21, 1, color, [21], [3], [21, 2], [21], [22], [21, 23.5], [17.5], [9], [17.5, 4.5], [14.5], [9], [14.5, 5]);
}

export const drawUsB29 = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [21, 8.5], [5, 10.5], [5, 11], [21, 11.5], [21, 20.5], [16, 21.5], [16, 22], [21, 22]);
	UI.drawShape(ctx, 0, 21, 1, color, [21], [3], [21, 2], [21], [22], [21, 23.5], [17.5], [11], [17.5, 6], [13.5], [11], [13.5, 6.5]);
}

export const drawUsInt = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.3, color, [21], [4], [20, 8.5], [10.5, 9.2], [10.5, 12, 20, 11.9, ], [21, 19.5], [16.5, 21], [18.5, 23, 21, 21]);
	UI.drawShape(ctx, 0, 21, 0.4, color, [21], [3.5], [18, 3.5]);
}

export const drawUsNas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [4], [20.5, 4], [20, 8.2], [10, 9], [10, 10], [20, 12], [21, 19], [17, 20.5], [18, 21.5, 21, 20.5]);
	UI.drawShape(ctx, 0, 21, 0.5, color, [21], [3.5], [18, 3.5], [21], [4], [21, 2.5]);
	UI.drawShape(ctx, 0, 0, 1.8, unit.owner.backColor, [21], [8.5], [21, 11.5]);
}

export const drawUsJet = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [21, 5], [19.5, 10], [10, 12.3], [10, 12.5], [20, 14], [21, 20], [17, 22], [17, 22.2], [21, 22.2], [21], [22], [21, 23.5]);
	UI.drawShape(ctx, 1, 21, 0.7, color, [10], [9.5], [10, 15.5], [10], [15.5], [11, 12.5, 10, 9.5]);
	UI.drawShape(ctx, 0, 0, 1.5, unit.owner.backColor, [21], [7.5], [21, 11.5]);
}

export const drawUsJsq = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	UI.drawShape(ctx, 1, 21, 1.5, color, [21], [5], [21, 7], [19.5, 11], [12, 12.3], [12, 12.5], [20, 14], [21, 19], [16, 21], [16, 21.2], [21, 21.2], [21], [21], [21, 22.5]);
	UI.drawShape(ctx, 1, 21, 0.7, color, [11], [10.5], [11, 14.5], [11], [14.5], [12, 12.5, 11, 10.5]);
	UI.drawShape(ctx, 0, 0, 1.5, unit.owner.backColor, [21], [8.5], [21, 11.5]);
}

export const drawRuBom = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [3], [21, 8], [5, 10], [6, 10], [21, 12], [21, 20.5], [17, 20.5], [16.5, 21], [21, 21]);
	UI.drawShape(ctx, 0, 21, 1.8, color, [16.5], [10], [16.5, 5.5]);
}

export const drawRuInt = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 21, 1.5, color, [21], [4], [20, 9], [10, 11], [11, 11], [20, 13], [21, 19], [17.5, 20.5], [18, 21.5, 21, 21.2]);
	UI.drawShape(ctx, 0, 0, 1.5, new Color(11, 128, 244), [21], [9.5], [21, 13.5]);
}

export const drawRuJet = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 21, 1.8, unit.owner.foreColor, [21], [4], [20.5, 4], [19.5, 9], [11, 16], [11.5, 17.5], [19.5, 13], [21, 22], [17, 25], [17, 25.2], [21, 23.5]);
	UI.drawShape(ctx, 0, 0, 1.5, unit.owner.backColor, [21], [7.5], [21, 12]);
}

export const drawRuJsq = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShape(ctx, 1, 21, 1.5, unit.owner.foreColor, [21], [6], [20.5, 6], [20, 10], [13, 16], [13.2, 17], [20, 13], [21, 20], [17.5, 23], [17.5, 23.2], [21, 21.5]);
	UI.drawShape(ctx, 0, 0, 1.5, unit.owner.backColor, [21], [9], [21, 12]);
}

export const drawJaNas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	UI.drawShape(ctx, 1, 21, 1.8, color, [20.5], [4], [20, 6.7], [10, 7.8], [8.5, 8.8, 10, 9.2], [20, 11], [21, 17.5], [16.5, 19.5], [16.5, 19.7], [21, 20]);
	UI.drawShape(ctx, 0, 21, 0.5, color, [21], [3.5], [21, 2.5], [21], [3.5], [16.5, 3.5]);
	UI.drawShape(ctx, 0, 0, 1.3, unit.owner.backColor, [21], [6.5], [21, 11.5]);
}

export const drawItNas = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const color = unit.owner.foreColor
	UI.drawShape(ctx, 1, 21, 1.8, color, [21], [4.5], [20.5, 4.5], [20, 9], [20, 7], [19, 7], [19, 8], [11, 8], [8.2, 9, 11, 10.5], [20, 10.5], [21, 18.5], [17.5, 20.5], [17.5, 22, 21, 21]);
	UI.drawShape(ctx, 0, 21, 0.5, color, [21], [4.5], [21, 3.5], [21], [4.5], [17, 4.5]);
	UI.drawShape(ctx, 0, 0, 1.3, unit.owner.backColor, [21], [10.5], [21, 13]);
}

export const drawTrans = (ctx: CanvasRenderingContext2D, color: Color) => {
	UI.drawShape(ctx, 1, 19.5, 1, color, [19.5], [8.5], [19.5, 11.2], [11.5, 13], [19.5, 14.3], [19.5, 18.5]);
	UI.drawShape(ctx, 0, 19.5, 1, color, [16.5], [11.5], [16.5, 10.5], [19.5], [18.5], [16, 18.5]);
}



