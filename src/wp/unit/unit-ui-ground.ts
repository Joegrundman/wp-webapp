import Color from 'Misc/Color';
import Unit from './unit';
import * as UI from './unit-ui';
import * as Misc from './unit-ui-misc';
import * as Text from './unit-ui-text';

export const drawAirborne = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	drawInfantry(ctx, unit);
	UI.drawShape(ctx, 0, 18.5, 0.8, unit.owner.foreColor, [18.5], [17.5], [16, 10, 9, 14]);
}

export const drawArmor = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	if (unit.isLent) { Misc.drawLent(ctx, unit); }
	UI.drawShape(ctx, 0, 0, 1, unit.owner.foreColor, [12.5], [8.5], [24.5, 8.5], [29, 12.5, 24.5, 16.5], [12.5, 16.5], [8, 12.5, 12.5, 8.5]);
	Text.writeStrengthAndMovement(ctx, unit);
	Text.writeDesignation(ctx, unit);
}

export const drawChindit = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	Text.writeStrengthAndMovement(ctx, unit);
	Text.writeDesignation(ctx, unit);
	UI.drawShape(ctx, 1, 0, 0.8, unit.owner.foreColor, [9.5], [12], [11.5, 12.8], [17.5, 14], [21.5, 14.5], [27, 12.5], [21.5, 14], [19.5, 14], [15.2, 10.2, 9.5, 12]);
}

export const drawCommando = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	Text.writeStrengthAndMovement(ctx, unit);
	Text.writeDesignation(ctx, unit);
	UI.drawShape(ctx, 0, 0, 1, unit.owner.foreColor, [10], [9], [29, 18], [27], [9], [8, 18], [14], [8.5], [10.5, 8.5], [10.5, 12], [23], [8.5], [26.5, 8.5], [26.5, 12]);
}

export const drawInfantry = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	if (unit.isLent) { Misc.drawLent(ctx, unit); }
	Text.writeStrengthAndMovement(ctx, unit);
	Text.writeDesignation(ctx, unit);
	UI.drawShape(ctx, 0, 0, 0.8, unit.owner.lineColor, [8], [7], [29, 18], [29], [7], [8, 18]);
}

export const drawMarine = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	Text.writeStrengthAndMovement(ctx, unit);
	Text.writeDesignation(ctx, unit);
	UI.drawShape(ctx, 0, 0, 1, unit.owner.foreColor, [18.5], [16], [18.5, 10]);
	UI.drawShape(ctx, 0, 18.5, 1, unit.owner.foreColor, [18.5], [11.5], [16, 11.5], [13], [13], [15, 17, 18.5, 16.5], [13], [13], [15, 17, 18.5, 15]);
	UI.drawEllipse(ctx, 17.5, 8.5, 2, 2, unit.owner.foreColor, 0.8);
}

export const drawMechanized = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	drawInfantry(ctx, unit);
	UI.fillEllipse(ctx, 11, 19, 3, 3, unit.owner.foreColor, 1);
	UI.fillEllipse(ctx, 23, 19, 3, 3, unit.owner.foreColor, 1);
}

export const drawPartisan = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	Text.writeStrengthAndMovement(ctx, unit);
	Text.writeDesignation(ctx, unit);
	Text.writeGenericText(ctx, unit, "P", "bold 10px arial", 19, 16)
}

export const drawCommunistPartisan = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const ic = unit.owner.innerColor;
	unit.owner.innerColor = new Color(244, 81, 43); // red shield
	drawPartisan(ctx, unit);
	unit.owner.innerColor = ic;
}

export const drawAlliedPartisan = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const ic = unit.owner.innerColor;
	if (unit.owner.name.toLowerCase() === "britain") { unit.owner.innerColor = new Color(146, 183, 98) } // green shield
	else { unit.owner.innerColor = new Color(216, 203, 159) }; // tan shield
	drawPartisan(ctx, unit);
	unit.owner.innerColor = ic;
}

export const drawAxisPartisan = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const ic = unit.owner.innerColor
	unit.owner.innerColor = new Color(235, 235, 145); // white
	const blackboxColor = new Color(40, 40, 40)
	drawPartisan(ctx, unit);
	ctx.fillStyle = blackboxColor.toRgb();
	ctx.fillRect(9, 8, 19, 9);
	Text.writeGenericText(ctx, unit, "P", "bold 10px arial", 19, 16, unit.owner.innerColor)
	unit.owner.innerColor = ic
}

export const drawReplacement = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawShield(ctx, unit);
	Text.writeBottomMiddleStrength(ctx, unit);
	Text.writeDesignation(ctx, unit);
}
