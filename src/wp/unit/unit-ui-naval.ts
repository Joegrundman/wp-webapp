import Color from '../misc/Color';
import Unit from './unit';
import * as UI from './unit-ui';
import * as Text from './unit-ui-text';

export const drawIowa = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [2], [22.5], [38, 22.5], [38.5, 22.1], [33, 22.5], [32], [22.5], [25, 21], [15, 21], [9, 22.5], [26], [20.5], [20, 20.5], [23], [19.5], [20, 19.5], [22], [19.5], [22, 17.5], [17], [20.5], [17, 18]);
	UI.drawShape(ctx, 0, 0, 0.7, color, [14.5], [20.5], [14.5, 19], [21.5], [18], [21.5, 16], [16.5], [18], [16.5, 20]);
}

export const drawSDakota = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [2], [22.5], [38, 22.5], [38.3, 22], [3, 22], [21], [21], [21, 15], [20], [21], [20, 16.5], [18], [22], [18, 18], [17], [22], [17, 18.5], [16], [22], [16, 19], [14], [22], [14, 21], [8, 22]);
	UI.drawShape(ctx, 1, 0, 1.5, color, [32], [22], [27, 20.5], [25.5, 20.5], [23.5, 18.5], [23, 18.5], [22, 20.5], [13.5, 22]);
	UI.drawShape(ctx, 0, 0, 0.7, color, [21], [15], [20.5, 12]);
}

export const drawNCarolina = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [2], [22.5], [38, 22.5], [38.2, 21.7], [33, 22.5], [8], [22.5], [14, 21], [26, 21], [33, 22.5], [17], [20], [21, 20], [20], [20], [24, 20], [20], [19], [23, 19], [17.5], [21], [17.5, 17.5], [15.5], [21], [15.5, 17.5], [13], [21], [13, 19], [21], [18], [21, 16]);
	UI.drawShape(ctx, 0, 0, 0.7, color, [21], [16], [20, 15]);
}

export const drawColorado = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [3], [22.5], [36, 22.5], [36.5, 22], [20, 22], [22.5], [16], [22.5, 14]);
	UI.drawShape(ctx, 1, 0, 1.5, color, [33], [22], [27, 20.5], [25, 20.5], [23, 17.5], [22.5, 17.5], [22, 20.5], [16, 22], [12], [22], [13, 21], [12, 21], [8, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.8, color, [19.5], [22], [19.5, 18], [14], [22], [14.5, 14], [16.5], [22], [16.5, 18], [22.5], [18], [22.5, 14]);
}

export const drawPenn = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [3], [22.5], [36.6, 22.5], [36.5, 22], [20, 22], [23.5], [16], [23.5, 14], [21], [22], [21, 18]);
	UI.drawShape(ctx, 1, 0, 1.5, color, [33], [22], [28, 20.5], [26, 20.5], [24, 17.5], [23.5, 17.5], [23, 20.5], [13.5, 22], [13], [22], [14, 21], [13, 21], [9, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [15], [22], [15.5, 13], [17.5], [22], [15.5, 13], [15.5], [17.5], [17.5, 17.5], [23.5], [18], [23.5, 14]);
}

export const drawNMexico = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [3], [22.5], [36.5, 22.5], [36.8, 22], [20, 22], [23.5], [16], [23.5, 14], [21], [22], [21, 17]);
	UI.drawShape(ctx, 1, 0, 1.5, color, [33], [22], [28, 20.5], [26, 20.5], [25, 17.5], [23.5, 17.5], [23, 19.5], [14.5, 22], [13], [22], [14, 21], [13, 21], [9, 22.5], [16.5], [21], [16.5, 19.2], [17, 19], [17, 21]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [17.5], [20], [17.5, 16], [23.5], [18], [23.5, 14]);
}

export const drawNYork = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [3], [22.5], [36, 22.5], [36.5, 22], [20, 22], [23.5], [16], [23.5, 14], [19], [22], [19, 19]);
	UI.drawShape(ctx, 1, 0, 1.5, color, [33], [22], [28, 20.5], [26, 20.5], [24, 17.5], [23.5, 17.5], [23, 20.5], [22.5, 22], [16, 22], [12], [22], [13, 21], [12, 21], [8, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.8, color, [14], [22], [14.5, 14], [20.5], [22], [20.5, 18], [23.5], [18], [23.5, 14]);
}

export const drawVirginia = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [3], [22.5], [36, 22.5], [36.5, 22], [15, 22], [32], [22], [27, 20.5], [25.5, 20.5], [23.5, 18.5], [22, 20.5], [13.5, 22], [21], [21], [21, 16], [20], [21], [20, 16.5], [18], [22], [18, 18], [17], [22], [17, 18.5], [16], [22], [16, 19], [14], [22], [14, 21], [8, 22]);
	UI.drawShape(ctx, 0, 0, 0.7, color, [21], [16], [20.5, 13]);
}

export const drawAlaska = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [3], [22.5], [35.5, 22.5], [36, 22], [15, 22], [32], [22], [27, 21], [25.5, 21], [23.5, 19.5], [23, 19.5], [22, 21], [13.5, 22], [21], [21], [21, 17], [20], [21], [20, 17.5], [18], [22], [18, 19], [17], [22], [17, 19.5], [16], [22], [16, 19.5], [14], [22], [14, 21], [9, 22]);
	UI.drawShape(ctx, 0, 0, 0.7, color, [21], [17], [20.5, 15]);
}

export const drawMidway = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [3], [22], [37.7, 22], [38.2, 21], [3.8, 21], [26], [21], [24, 19], [24, 20], [22, 20], [22, 18], [19, 18], [19, 20], [17, 20], [15, 21]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [20.5], [18], [20.5, 14]);
}

export const drawEssex = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [3], [22], [37, 22], [37.8, 21], [2.5, 21], [29], [21], [24, 21, 21, 18], [20, 18], [20, 19], [17, 20], [15, 21]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [20.5], [18], [20.5, 15]);
}

export const drawIndependence = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [4], [22.5], [36, 22.5], [36, 22], [31.5, 21], [4.5, 21]);
	UI.drawShape(ctx, 1, 0, 1, color, [24.5], [21], [24.5, 16], [24.5, 18], [27.5, 21], [19], [21], [21, 20]);
}

export const drawYorktown = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [3.5], [22.5], [36, 22.5], [36.5, 22], [3, 22], [3, 21.5], [3.8, 21], [37, 21], [15], [21], [16, 19], [21, 18], [22, 21]);
	UI.drawShape(ctx, 1, 0, 0.5, color, [16.5], [18], [16.5, 15], [20.5], [18], [20.5, 16]);
}

export const drawLexington = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [4], [22.5], [36, 22.5], [36.5, 22], [3.5, 22], [3, 21.5], [36.8, 21.5], [19.5], [21], [20, 18.5], [22, 18.5], [24.5, 21], [14], [21], [16, 20], [16.5, 19], [17.5, 21]);
}

export const drawBogue = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [6], [22.5], [34, 22.5], [34.5, 22], [5.5, 22], [6, 21], [34.5, 21], [25], [21], [25, 19], [24, 18.5], [24, 21]);
	UI.drawShape(ctx, 1, 0, 0.5, color, [23.5], [18.5], [23.5, 14]);
}

export const drawGato = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [7.5], [33.5], [36.5, 33.5], [35.5, 34.5], [33.5, 35], [9, 35], [4.5, 34], [18.5], [33.5], [18.5, 32.5], [25, 32.5], [20.5], [31.5], [23.5, 31.5]);
	UI.drawShape(ctx, 1, 0, 0.7, color, [26.5], [33.5], [26.5, 31.8], [22.5], [32], [22.5, 29.5], [20.5], [32], [20.5, 29.5]);
}

export const drawLion = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [2], [22.5], [38.5, 22.5], [30, 22.5], [32], [22.5], [29, 21.5], [24, 21.5], [24, 19.5], [23, 19.5], [22, 20], [20, 19.5], [20, 22.5], [18], [22.5], [14, 21], [8, 22.5], [16.5], [22.5], [16.5, 19]);
	UI.drawShape(ctx, 1, 0, 0.3, color, [16.5], [20], [18.5, 18.5], [13.5], [21.5], [13.5, 16], [20.5], [19], [20.5, 16]);
}

export const drawNelson = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [3], [22], [38, 22], [32], [22], [30, 21.2], [27, 22], [26, 21.2], [22, 21.8], [19, 21], [17, 17.5], [16.5, 17.5], [16, 21], [7, 21], [5, 22], [12.5], [21], [12.5, 18]);
	UI.drawShape(ctx, 1, 0, 1, color, [38.2], [21.5], [3.5, 21.5], [8.5], [17], [8.5, 16], [8.5], [14], [8.5, 13]);
	UI.drawShape(ctx, 1, 0, 0.3, color, [8.5], [20], [8.5, 13]);
}

export const drawKGV = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [3], [22.5], [37, 22.5], [37.2, 22], [30, 22.5], [32], [22.5], [29, 21.5], [24, 21], [24, 19], [23, 19], [22, 20], [20, 19], [20, 22.5], [18], [22.5], [14, 21], [8, 22.5], [16.5], [22.5], [16.5, 18.5]);
	UI.drawShape(ctx, 1, 0, 0.3, color, [16.5], [20], [18.5, 18.5], [13.5], [21.5], [13.5, 15], [20.5], [19], [20.5, 15]);
}

export const drawVanguard = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [3], [22.5], [38, 22.5], [38.2, 22.2], [30, 22.5], [32], [22.5], [30, 21.5], [26, 21], [26, 19.5], [25, 19.5], [24, 20], [23, 19.5], [23, 22], [20, 22], [18, 20], [15, 21], [8, 22.5], [18.5], [22.5], [18.5, 18.5]);
	UI.drawShape(ctx, 1, 0, 0.3, color, [17.5], [21.5], [17.5, 15], [23.5], [19], [23.5, 15]);
}

export const drawRoyalOak = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [3], [22.5], [37.5, 22.5], [37.3, 22], [12, 22], [9, 22.5], [32], [22], [31, 21.5], [23, 20], [23, 18], [21, 18], [19.5, 22], [14, 21], [13, 21], [7, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [15.5], [21], [16.5, 14], [20.5], [22], [20.5, 18], [23.5], [18], [23.5, 13.5]);
	UI.drawShape(ctx, 0, 0, 0.8, color, [16.5], [14], [16.5, 15], [16], [17], [16, 18], [23], [14.5], [24, 14.5], [23.5], [17.5], [24.3, 17.5]);
}

export const drawBarham = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [3], [22.5], [37.5, 22.5], [37.3, 22], [12, 22], [9, 22.5], [33], [22], [31.5, 21], [22, 19], [22, 18], [20.5, 18], [19.5, 22], [14, 21], [13, 21], [7, 22.5], [24.5], [20], [25.5, 16.2], [26, 16.2], [27, 21]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [15.5], [21], [16.5, 14], [20.5], [22], [20.5, 18]);
	UI.drawShape(ctx, 0, 0, 0.8, color, [16.5], [14], [16.5, 15], [16], [17], [16, 18]);
}

export const drawWarspite = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [3], [22.5], [37.5, 22.5], [37.3, 22], [12, 22], [9, 22.5], [33], [22], [31.5, 21], [23, 19], [21, 21.5], [17, 21.5], [13, 21], [7, 22.5], [26], [20], [26, 18], [23, 18], [23, 20], [20, 20], [20, 22]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [15.5], [21], [16.5, 14], [24.5], [18], [24.5, 15]);
	UI.drawShape(ctx, 0, 0, 0.8, color, [16.5], [14], [16.5, 15], [16], [17], [16, 18]);
}

export const drawReknown = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [21.5], [20], [21.5, 18], [18.5], [20], [18.5, 18], [3], [22.5], [38, 22.5], [38.5, 21.7], [33], [22], [28, 21], [27, 20.5], [26, 20.5], [26, 19], [24.5, 18.5], [24.5, 20], [18, 21], [15, 22], [9], [22], [14.5, 21]);
	UI.drawShape(ctx, 0, 0, 0.4, color, [24.5], [18], [24.5, 15], [14.5], [21], [14.5, 16]);
}

export const drawArkRoyal = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [5], [22], [36, 22], [4], [21], [37, 21], [19], [20], [24, 20], [20], [19], [23, 19]);
	UI.drawShape(ctx, 1, 0, 0.7, color, [5], [21], [3, 21], [20], [18], [22, 18], [22.5], [21], [22.5, 15]);
}

export const drawCourageous = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [6], [22], [35, 22], [4], [21], [36, 21], [19], [20], [25, 20], [20], [19], [24, 19]);
	UI.drawShape(ctx, 1, 0, 0.7, color, [6], [22], [4, 22], [35], [22], [37, 22], [24], [19], [25, 19], [21], [18], [22, 18], [23.5], [19], [23.5, 16]);
}

export const drawRuler = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [11], [22], [35, 22], [35.3, 21], [11, 21], [19], [20], [26, 20], [21], [19.5], [26, 19.5], [21], [18.5], [23, 18.5]);
	UI.drawShape(ctx, 1, 0, 1, color, [11], [22.6], [6, 22.5], [35], [20.5], [6, 20.5], [8.5], [22.5], [8.5, 20.5], [23.5], [19], [23.5, 16]);
}

export const drawTClass = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1, color, [4.5], [33.5], [37, 33.5], [36.5, 34.5], [35, 35], [33, 35], [32, 35.3], [11.5, 35.3], [5, 34.5], [6.5, 33.5], [19.5], [33.5], [19.5, 31.5], [22.5, 31.5], [22.5, 32.5], [24, 32.5], [24, 33.5], [16.5], [33.5], [16.5, 32.8], [22.5], [32], [22.5, 30.5], [20.5], [32], [20.5, 30.5]);
	UI.drawShape(ctx, 1, 0, 0.8, color, [20.5], [32], [20.5, 28.5], [36], [32.8], [32, 32.8], [31, 33]);
}

export const drawHClass = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [2], [22.5], [38.5, 22.5], [39, 22.4], [25, 22.5], [30.5], [21.5], [32, 22.5], [26.8], [21.5], [29.3, 21.5], [27.5], [21.2], [30.5, 21.2], [28], [22.5], [25.5, 19.5], [19.5, 22.5], [23.5], [20.5], [23.5, 17], [21], [22], [20.5, 18.5], [18], [22], [17.5, 18.5], [10.5], [21.5], [8, 22.5], [11.5], [21.5], [18.5, 21.5], [14], [20.8], [11.5, 21.9], [16], [20.5], [14.5, 21.5], [18.2], [20.5], [16.5, 21.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [23.5], [17], [23.5, 15.5], [22.5], [17.5], [24.5, 17.5]);
}

export const drawBismarck = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [3], [22.5], [38, 22.5], [38.3, 22], [30, 22.5], [30.8], [21], [33.5, 21.8], [27.3], [21.2], [29.8, 21.2], [27.3], [21.2], [29.8, 21.2], [27.5], [20.7], [30.5, 20.7], [28], [22.5], [25.5, 19.5], [19.5, 22.5], [23.5], [20.5], [23.5, 17], [21], [22], [20.5, 18.5], [10.5], [21.5], [8, 22.5], [11.5], [21.5], [18.5, 21.5], [14], [20.5], [11.5, 21.5], [16], [20.5], [14.5, 21.5], [18.2], [20.5], [16.5, 21.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [23.5], [17], [23.5, 15.5], [22.5], [17.5], [24.5, 17.5]);
}

export const drawScharnhorst = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [2], [22.5], [38, 22.5], [38.8, 22], [30, 22.5], [11], [21.5], [26.5, 21.5], [29.8], [21.3], [32.5, 21.5], [26.5], [21], [29, 21], [26.5], [20.8], [29.5, 20.8], [26], [20.5], [22, 20.5], [26], [19.8], [24.5, 19.8], [22.5], [20.5], [22.5, 17], [18], [20.8], [20.5, 20.8], [19.5], [21], [19.5, 17.5], [10.5], [21.2], [8, 21.5], [11.5], [20.5], [13.5, 20.5], [15], [21.5], [15, 19.2]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [21.5], [17.5], [23.5, 17.5], [22.5], [17], [22.5, 15.5]);
}

export const drawDeutschland = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [4], [22.5], [37, 22.5], [37.5, 21.3], [9, 22.2], [17], [21.2], [27.5, 20.5], [14], [21.5], [27.5, 21.5], [14], [20.8], [16, 20.8], [10.5], [21.5], [13.5, 21.5], [10], [21.5], [13.5, 20.8], [28], [20.5], [31, 21.2], [23.5], [20.5], [23.5, 17], [22.5], [17.5], [24.5, 17.5], [22.5], [18.5], [24, 18.5], [20], [21.5], [20, 18], [19.5], [21.5], [19, 18]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [23.5], [17], [23.5, 15.5]);
}

export const drawGZeppelin = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [4.5], [22], [36, 22], [5], [21], [37, 21], [17], [21], [19, 18], [20.5, 18], [20.5, 19.5], [23, 19.5], [25, 21]);
	UI.drawShape(ctx, 0, 0, 0.7, color, [36], [22], [37, 22], [37], [21], [38, 21], [5], [21], [4, 21], [5], [22], [4, 22], [17], [20], [16, 20]);
	UI.drawShape(ctx, 0, 0, 0.3, color, [20.5], [18], [20.5, 15]);
}

export const drawType7 = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1, color, [5.5], [33.5], [35.5, 33.5], [34.5, 34.5], [32.5, 34.5], [30.5, 35.1], [14, 35.1], [12, 34.5], [8.5, 34.5], [7.5, 33.5], [19.5], [33.5], [20.5, 32], [23, 32], [23, 33.5], [25.5], [33.5], [25.5, 32.7], [16.5], [33.5], [16.5, 32.8]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [21.5], [32], [21.5, 29.5]);
}

export const drawType23 = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1, color, [5], [17.5], [37.2, 17.5], [37, 18.5], [36.5, 18.8], [34.5, 19.1], [6, 19.1], [5.5, 18.5], [4.5, 18.5], [5, 17.5], [18], [17.5], [20, 15.5], [24.5, 15.5], [24.5, 17.5]);
	UI.drawShape(ctx, 0, 0, 0.7, color, [22.5], [16], [22.5, 13.5]);
}

export const drawVeneto = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [3], [22.5], [37, 22.5], [37.3, 22], [12, 22], [11], [22], [15, 21], [16], [21], [29, 21], [34.5], [22], [29.5, 21], [27.5, 20.5], [24.5, 20.5], [24.5], [22], [23.5, 17], [23, 20.5], [19, 20.5], [17.5], [21], [17.5, 18.5], [19.5], [20], [19.5, 18.5], [21.5], [20], [21.5, 18.5]);
	UI.drawShape(ctx, 1, 0, 0.4, color, [22.5], [17], [22.5, 15]);
}

export const drawDuillio = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [3], [22.5], [36.5, 22.5], [36.8, 22], [12, 22], [31], [22], [28, 21], [26, 21], [24], [22], [24, 17], [23.5, 17], [24.5, 19], [21.5, 21], [14, 21], [8, 22], [20.5], [21], [20.5, 18], [18.5], [21], [18.5, 18]);
	UI.drawShape(ctx, 1, 0, 0.4, color, [22.5], [17], [22.5, 14], [14.5], [21], [14.5, 17.5]);
}

export const drawBorgia = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [4], [22.5], [37, 22.5], [37.2, 21.7], [20, 22.2], [9, 22.2], [29], [21], [34, 21.9], [22], [21.5], [23, 20], [28, 21.9], [20.5], [22], [20.5, 18], [16.5], [22], [16.5, 19], [15], [22], [14.5, 20.5], [10, 22], [9], [21.5], [7, 22]);
	UI.drawShape(ctx, 1, 0, 0.4, color, [20.8], [19], [21.5, 15], [16.8], [19], [17.5, 16]);
}

export const drawYamato = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [2], [22.5], [38, 22.5], [38.3, 21.9], [30, 22.5], [14], [21], [23.5, 21], [22], [21], [22, 17], [19], [21], [18.5, 17.5]);
	UI.drawShape(ctx, 1, 0, 1, color, [24.5], [22], [24.5, 20], [12.5], [22], [12.5, 20.5], [14.5], [21], [14.5, 19.5], [25.5], [21.7], [27, 21.7], [25], [20.7], [27.5, 20.7], [28], [21], [31, 22], [11], [21], [8, 22], [23], [21], [23, 19], [21.5], [17], [21.5, 16]);
}

export const drawNagato = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [3], [22.5], [38, 22.5], [39, 22], [14, 22], [12, 22.5], [29], [21], [16, 21], [35], [22], [32.5, 21.5], [29, 21], [14], [22.5], [13.5, 21], [12, 21], [7, 22.5], [26], [20], [26, 17], [23.5], [20], [23.5, 17], [19.5], [20], [19.5, 17.5], [16.5], [21], [16.5, 19.5]);
	UI.drawShape(ctx, 1, 0, 1, color, [27], [20], [27, 18.5], [28], [20], [28, 19]);
	UI.drawShape(ctx, 1, 0, 0.5, color, [16], [21], [17, 15], [25.5], [17], [25.5, 14]);
}

export const drawFuso = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.5, color, [3], [22.5], [38, 22.5], [38.2, 22], [14, 22], [10, 22.5], [33], [22], [30, 21], [29, 21], [26, 20], [25.5, 17], [25.5, 21], [21, 21], [19.5, 19], [19.5, 17], [19.5, 20.5], [14, 21], [14, 17.5], [13.5], [21], [8, 22]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [14.5], [21], [14.5, 16], [26.5], [20], [26.5, 14.5], [26, 14], [26, 16]);
}

export const drawKongo = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [3], [22.5], [38, 22.5], [38.2, 22], [23, 22], [19, 22.5], [33], [22], [30, 21], [29, 21], [29], [22], [29, 20.5], [27, 21], [25.5, 17], [24.5, 20], [22, 20], [21.5, 18.5], [21.5, 21], [16.5, 21], [16.5, 22], [14.5], [22], [14.5, 21.5], [12, 22]);
	UI.drawShape(ctx, 0, 0, 1, color, [16.5], [22], [16.5, 18.5], [18.5], [22], [18.5, 18]);
}

export const drawShinano = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [3.5], [22], [38, 22], [7], [21], [38.5, 21], [16], [21], [18, 19], [18.5, 17], [19, 17], [19, 18.5], [21, 18.5], [23, 21]);
	UI.drawShape(ctx, 1, 0, 1, color, [3.5], [22.5], [38, 22.5]);
	UI.drawShape(ctx, 1, 0, 0.5, color, [3], [20.5], [38, 20.5], [4.5], [22.5], [4.5, 20.5], [20.5], [18.5], [20.5, 14]);
}

export const drawTaiho = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [4], [22], [38, 22], [10], [21], [38.5, 21], [4.5], [22], [4.5, 20.5], [18], [21], [20, 19.5], [20.5, 18], [21, 18], [21, 19], [22.5, 19], [24, 21]);
	UI.drawShape(ctx, 0, 0, 1, color, [4], [22.5], [37.5, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [4], [20.5], [36.5, 20.5], [7.5], [22], [7.5, 20.5], [22.5], [18.5], [22.5, 15.5]);
}

export const drawSoryu = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.7, color, [7], [22], [35, 22], [7], [21], [35, 21], [19], [21], [20, 19], [21, 19], [22, 21]);
	UI.drawShape(ctx, 0, 0, 1, color, [3], [22.5], [39, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [3], [20.5], [38, 20.5], [4.5], [22.5], [4.5, 20.5], [36.5], [22.5], [36.5, 20.5], [18.5], [20], [18.5, 16.5]);
}

export const drawKaga = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.7, color, [10], [22], [33, 22], [10], [21], [33, 21], [10], [20], [33, 20], [24.5], [20], [25.5, 18], [26, 18], [26.5, 20]);
	UI.drawShape(ctx, 0, 0, 1, color, [3], [22.5], [38, 22.5], [7], [22.5], [10, 21.5], [33], [21.5], [38, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [3], [19.5], [38, 19.5], [4.5], [22.5], [4.5, 19.5], [7.5], [22.5], [7.5, 19.5], [37.5], [22.5], [37.5, 19.5], [34.5], [22.5], [34.5, 19.5]);
}

export const drawAkagi = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [11], [22], [33, 22], [33, 20], [11, 20], [11, 22], [19.5], [20], [20.5, 18], [21, 18], [21.5, 20]);
	UI.drawShape(ctx, 0, 0, 1, color, [3], [22.5], [38, 22.5], [3], [22.5], [11, 21.5], [33], [22], [38.5, 22]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [3], [19.5], [37.5, 19.5], [4.5], [22.5], [4.5, 19.5], [6.5], [22.5], [6.5, 19.5], [8.5], [22.5], [8.5, 19.5], [37.5], [22.5], [37.5, 19.5], [35.5], [22.5], [35.5, 19.5], [18.5], [20], [18.5, 16.5]);
}

export const drawShokaku = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [3], [22], [38.5, 22], [7], [21], [38, 21], [24], [21], [25, 19], [26, 19], [27, 21]);
	UI.drawShape(ctx, 0, 0, 1, color, [3], [22.5], [38, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [3.5], [20.5], [38, 20.5], [4.5], [22.5], [4.5, 20.5]);
}

export const drawRyujo = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [4], [22], [38, 22], [10], [21], [34, 21], [10], [20], [34, 20], [4.5], [22], [4.5, 20.5]);
	UI.drawShape(ctx, 0, 0, 1, color, [4], [22.5], [37.5, 22.5]);
	UI.drawShape(ctx, 0, 0, 0.5, color, [4], [19.5], [36.5, 19.5], [7.5], [22], [7.5, 20.5], [35.5], [22], [35.5, 20.5]);
}


export const drawSoyuz = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [2], [22.5], [38.5, 22.5], [38.5, 22], [24, 22], [34], [22], [29, 21], [26.5], [22], [26.5, 18], [24.5], [22], [24.5, 17.5], [19.5], [22], [19.5, 17], [23], [21.5], [21, 21.5], [18], [21.5], [15, 21.5], [12], [21.5], [9, 21.5]);
	UI.drawShape(ctx, 1, 0, 0.3, color, [26.5], [18], [26.5, 15], [13.5], [22], [13.5, 16]);
}

export const drawGangut = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.7, color, [4], [22.5], [37, 22.5], [37.3, 22], [26, 21], [8, 22]);
	UI.drawShape(ctx, 1, 0, 1.5, color, [27], [22], [27, 17], [26], [22], [26, 17], [27], [21], [29, 21], [25], [21], [25, 19], [20], [22], [20, 17.5], [14], [22], [14, 18], [13], [22], [13, 19], [12], [22], [12, 20]);
	UI.drawShape(ctx, 1, 0, 0.7, color, [24], [19], [22.5, 17.5], [27.5], [17], [27.5, 15], [14.5], [18], [14.5, 16], [14], [18.5], [17, 18.5]);
}

export const drawJBart = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.4, color, [3], [22.5], [38, 22.5], [38.3, 22], [10, 22], [11], [22], [12, 21.5], [16, 21], [16.5, 18.5], [17, 18.5], [17.5, 22], [21, 22], [20.5, 17], [21, 17], [22, 20.5], [23, 20.5], [27, 22], [27], [22], [29, 21], [34, 22]);
	UI.drawShape(ctx, 1, 0, 0.4, color, [17.5], [18.5], [17.5, 16]);
}

export const drawDunkerque = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 0, 0, 1.4, color, [4], [22.5], [37.5, 22.5], [37.8, 22], [10, 22], [8, 22.5], [11], [22], [12, 21.5], [14, 21], [17.5, 21.5], [21, 22], [20.5, 17.5], [21, 17.5], [22, 20.5], [23, 20.5], [27, 22], [27], [22], [29, 21], [34, 22], [13.5], [22], [13.5, 18.5], [17.5], [22], [17.5, 18.5]);
}

export const drawBretagne = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.3, color, [3], [22.5], [38, 22.5], [38, 22], [8, 22], [6, 22.5], [9], [22], [10.5, 21.5], [16, 21], [25, 20.5], [25, 17.5], [25.5, 17.5], [25.5, 18.5], [27, 18.5], [27.5, 20.5], [31, 20.5], [35, 22], [19.5], [21], [19.5, 17.5], [26.5], [14], [26.5, 15]);
	UI.drawShape(ctx, 1, 0, 0.4, color, [15.5], [21], [15.5, 15], [26.5], [18.5], [26.5, 13.5]);
}

export const drawYavuz = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1.5, color, [3], [22.5], [38, 22.5], [38, 22], [8, 22], [6, 22.5], [9], [22], [12.5, 21], [14, 21], [17, 22], [21, 22], [24, 22], [25, 18.5], [25.5, 18.5], [25.5, 20], [35, 22], [19.5], [22], [19.5, 18.5]);
	UI.drawShape(ctx, 1, 0, 0.4, color, [26.5], [18.5], [26.5, 14.5]);
}

export const drawCA = (ctx: CanvasRenderingContext2D, unit: Unit, x: number, y: number, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1, color, [x + 3], [y + 12.5], [x + 28.5, y + 12.5], [x + 29, y + 11.5], [x + 6, y + 12.5], [x + 25], [y + 11.5], [x + 23, y + 10.9], [x + 20, y + 10.5], [x + 19.5, y + 11.5], [x + 22.5], [y + 10.5], [x + 21, y + 9.5], [x + 20, y + 9.5], [x + 19.5, y + 11.5], [x + 16], [y + 12.5], [x + 16, y + 9.5], [x + 16.9], [y + 12.5], [x + 12.5, y + 10.5], [x + 7, y + 12.5]);
	UI.drawShape(ctx, 0, 0, 0.4, color, [x + 19.5], [y + 11.5], [x + 19.5, y + 6], [x + 12.5], [y + 11.5], [x + 12.5, y + 7]);
}

export const drawDD = (ctx: CanvasRenderingContext2D, unit: Unit, x: number, y: number, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1, color, [x + 3], [y + 22.5], [x + 24, y + 22.5], [x + 24.5, y + 21.5], [x + 6, y + 22.5], [x + 22], [y + 21.5], [x + 16, y + 20.2], [x + 14, y + 22.5], [x + 17], [y + 21.5], [x + 16, y + 19.5], [x + 16.5, y + 21.5], [x + 17.5], [y + 21.5], [x + 17.5, y + 19], [x + 12], [y + 22], [x + 12, y + 19.5]);
	UI.drawShape(ctx, 0, 0, 0.8, color, [x + 10], [y + 21.9], [x + 7, y + 21.9]);
	UI.drawShape(ctx, 0, 0, 0.4, color, [x + 16.5], [y + 21], [x + 16.5, y + 16.8]);
}

export const drawDE = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	UI.drawShape(ctx, 1, 0, 1, color, [5], [20.5], [34.7, 20.5], [35.5], [19.5], [15, 19.5], [29], [18.5], [22.5, 18.5], [23.5], [19.5], [23.5, 16], [24.5, 16], [26.5, 18.5], [21.5], [19.5], [21.5, 16], [17.5], [19.5], [17.5, 16.5], [20.5], [18.2], [22.5, 18.2], [9], [19.8], [13.5, 19.8], [10], [19.2], [11.5, 19.2], [30], [18.8], [32.5, 18.8], [27.5], [18.9], [27.5, 17.5]);
	UI.drawShape(ctx, 1, 0, 0.5, color, [23.5], [16], [22.8, 12], [35.5], [19.5], [36, 18]);
}

// end ship images

export const drawAdvSub = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	UI.drawColorRect(ctx, 3, 3, 36, 20, "purple");
	Text.writeBottomMiddleStrength(ctx, unit, 0, 1);
	const color = new Color(255, 255, 255);
	Text.writeGenericText(ctx, unit, "AdvSub", 'bold 8px verdana', 21, 11, color);
	drawType23(ctx, unit, color);
}

export const drawAsw = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	switch (unit.owner.name.toLowerCase()) {
		case "britain": case "america": case "us": case "united states": case "unitedstates": UI.drawSharedAlliedBase(ctx, unit); break;
		default: break;
	}
	UI.drawColorRect(ctx, 3, 3, 36, 20, "blue");
	Text.writeBottomMiddleStrength(ctx, unit, 0, 1);
	const color = new Color(255, 255, 255);
	Text.writeGenericText(ctx, unit, "ASW", 'bold 8px verdana', 21, 11, color);
	drawDE(ctx, unit, color);
}

export const drawBattleship = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	const owner = unit.owner.name.toLowerCase()
	const bbcode = getBBCode(unit);
	const black = new Color(40, 40, 40);
	let color: Color;
	Text.writeShipType(ctx, unit, bbcode);
	if (unit.isSlow) { UI.drawNavalColorBox(ctx, "orange"); color = black; }
	else { color = unit.owner.foreColor; }
	if (unit.isSunk) { UI.drawSunk(ctx, unit); color = black; }
	switch (owner) {
		case "america": case "unitedstates": case "united states": case "us": selectUsBB(ctx, unit, color); break;
		case "britain": selectGbBB(ctx, unit, color); break;
		case "france": case "vichy": case "free french": selectFrBB(ctx, unit, color); break;
		case "germany": selectGeBB(ctx, unit, color); break;
		case "italy": selectItBB(ctx, unit, color); break;
		case "japan": selectJaBB(ctx, unit, color); break;
		case "russia": selectRuBB(ctx, unit, color); break;
		case "turkey": drawYavuz(ctx, unit, color); break;
		default: selectItBB(ctx, unit, color); break;
	}
}

export const getBBCode = (unit: Unit) => {
	let bbcode: string;
	const stren = unit.strength;
	const owner = unit.owner.name.toLowerCase();
	if (((owner === "britain") || (owner === "japan")) && !(unit.isSlow) && ((stren === 3) || (stren === 2))) { bbcode = "BC"; }
	else if ((owner === "germany") && (stren === 3)) { bbcode = "BC"; }
	else if (((owner === "italy") || (owner === "turkey") || (owner === "us")) && (stren === 2)) { bbcode = "BC"; }
	else if ((owner === "germany") && (stren === 2)) { bbcode = "PB"; }
	else { bbcode = "BB"; }
	return bbcode;
}

export const selectUsBB = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	const name = unit.name;
	switch (unit.strength) {
		case 5: drawIowa(ctx, unit, color); break;
		case 4: switch (name) {
			case "Alabama": case "Indiana": case "Mass": case "Mass.": case "S.Dakota": drawSDakota(ctx, unit, color); break;
			default: drawNCarolina(ctx, unit, color); break;
		}; break;
		case 3: switch (name) {
			case "Texas": case "New York": drawNYork(ctx, unit, color); break;
			case "Maryland": case "Colorado": case "Tennessee": drawColorado(ctx, unit, color); break;
			case "Pennslvnia": case "Arizona": case "Oklahoma": drawPenn(ctx, unit, color); break;
			case "New Mexico": case "Idaho": case "Mississippi": drawNMexico(ctx, unit, color); break;
			default: drawVirginia(ctx, unit, color); break;
		}; break;
		default: drawAlaska(ctx, unit, color); break;
	}
}

export const selectGbBB = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	const name = unit.name
	switch (unit.strength) {
		case 5: drawLion(ctx, unit, color); break;
		case 4: switch (name) {
			case "Nelson": case "Rodney": drawNelson(ctx, unit, color); break;
			case "Vanguard": drawVanguard(ctx, unit, color); break;
			default: drawKGV(ctx, unit, color); break;
		}; break;
		case 3: switch (name) {
			case "Revenge": case "Royal Oak": case "R.Sovereign": case "Resolution": drawRoyalOak(ctx, unit, color); break;
			case "Malaya": case "Barham": drawBarham(ctx, unit, color); break;
			case "Warspite": case "Valiant": case "Q.Elizabeth": case "Ramilles": drawWarspite(ctx, unit, color); break;
			default: drawReknown(ctx, unit, color); break;
		}; break;
		default: drawReknown(ctx, unit, color); break;
	}
}

export const selectFrBB = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	const slow = unit.isSlow;
	switch (unit.strength) {
		case 4: drawJBart(ctx, unit, color); break;
		case 3: switch (slow) {
			case slow: drawBretagne(ctx, unit, color); break;
			default: drawDunkerque(ctx, unit, color); break;
		}; break;
		default: drawDunkerque(ctx, unit, color); break;
	}
}

export const selectGeBB = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	switch (unit.strength) {
		case 5: drawHClass(ctx, unit, color); break;
		case 4: drawBismarck(ctx, unit, color); break;
		case 3: drawScharnhorst(ctx, unit, color); break;
		default: drawDeutschland(ctx, unit, color); break;
	}
}

export const selectItBB = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	switch (unit.strength) {
		case 4: drawVeneto(ctx, unit, color); break;
		case 3: drawDuillio(ctx, unit, color); break;
		default: drawBorgia(ctx, unit, color); break;
	}
}

export const selectJaBB = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	const name = unit.name
	switch (unit.strength) {
		case 5: drawYamato(ctx, unit, color); break;
		case 4: drawNagato(ctx, unit, color); break;
		case 3: switch (name) {
			case "Kongo": case "Kirishima": drawKongo(ctx, unit, color); break;
			default: drawFuso(ctx, unit, color); break;
		}; break;
		default: drawFuso(ctx, unit, color); break;
	}
}

export const selectRuBB = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	const slow = unit.isSlow
	switch (unit.strength) {
		case 2: if (slow) { drawGangut(ctx, unit, color); } break;
		default: drawSoyuz(ctx, unit, color); break;
	}
}

export const drawCruiser = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	Text.writeShipType(ctx, unit, "CA");
	Text.writeGenericText(ctx, unit, unit.name, "bold 7px verdana", 31, 8);
	if (unit.isSunk) {
		UI.drawSunk(ctx, unit);
		const color = new Color(40, 40, 40);
		drawCA(ctx, unit, 0, 7, color);
		drawCA(ctx, unit, 6, 10, color);
	}
	else {
		const color = unit.owner.foreColor
		const owner = unit.owner.name.toLowerCase()
		if ((owner === "germany") || (owner === "japan")) {
			drawCA(ctx, unit, 0, 0, color);
			drawCA(ctx, unit, 4, 10, color);
		}
		drawCA(ctx, unit, 0, 0, color);
		drawCA(ctx, unit, 4, 10, color);
	}
}

export const drawCarrier = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	let color: Color;
	const cvCode: string = getCVCode(unit);
	const black = new Color(40, 40, 40);
	Text.writeShipType(ctx, unit, cvCode);
	if (unit.isSunk) { UI.drawSunk(ctx, unit); color = black; }
	else {
		UI.drawNavalColorBox(ctx, "yellow");
		color = black;
	}
	switch (unit.owner.name.toLowerCase()) {
		case "america": case "unitedstates": case "united states": case "us": { selectUsCV(ctx, unit, color); break; }
		case "britain": { selectGbCV(ctx, unit, color); break; }
		case "germany": { drawGZeppelin(ctx, unit, color); break; }
		case "italy": { drawIndependence(ctx, unit, color); break; }
		case "japan": { selectJaCV(ctx, unit, color); break; }
		default: { selectUsCV(ctx, unit, color); break; }
	}
}

export const getCVCode = (unit: Unit) => {
	let cvCode: string;
	switch (unit.strength) {
		case 4: { cvCode = "CVB"; break; }
		case 3: { cvCode = "CV"; break; }
		case 2: { cvCode = "CVL"; break; }
		default: { cvCode = "CV"; break; }
	}
	return cvCode;
}

export const selectUsCV = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	const name = unit.name
	switch (unit.strength) {
		case 4: drawMidway(ctx, unit, color); break;
		case 3: switch (name) {
			case "Lexington": case "Saratoga": drawLexington(ctx, unit, color); break;
			case "Yorktown": case "Enterprise": case "Hornet": drawYorktown(ctx, unit, color); break;
			default: drawEssex(ctx, unit, color); break;
		}; break;
		case 2: drawIndependence(ctx, unit, color); break;
		default: drawIndependence(ctx, unit, color); break;
	}
}

export const selectGbCV = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	switch (unit.name) {
		case "Ark Royal": drawArkRoyal(ctx, unit, color); break;
		default: drawCourageous(ctx, unit, color); break;
	}
}

export const selectJaCV = (ctx: CanvasRenderingContext2D, unit: Unit, color: Color) => {
	const name = unit.name
	switch (unit.strength) {
		case 4: drawShinano(ctx, unit, color); break;
		case 3: switch (name) {
			case "Akagi": drawAkagi(ctx, unit, color); break;
			case "Kaga": drawKaga(ctx, unit, color); break;
			case "Taiho": drawTaiho(ctx, unit, color); break;
			case "Shokaku": case "Zuikaku": drawShokaku(ctx, unit, color); break;
			default: drawSoryu(ctx, unit, color); break;
		}; break;
		case 2: switch (name) {
			case "Hiyo": case "Junyo": drawTaiho(ctx, unit, color); break;
			default: drawRyujo(ctx, unit, color); break;
		}; break;
		default: drawRyujo(ctx, unit, color); break;
	}
}

export const drawCve = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	if (unit.isSunk) { UI.drawSunk(ctx, unit); }
	else { UI.drawNavalColorBox(ctx, "purple"); }
	const color = new Color(30, 30, 30);
	Text.writeShipType(ctx, unit, "CVE");
	if (unit.owner.name.toLowerCase() === "britain") { drawRuler(ctx, unit, color); }
	else { drawBogue(ctx, unit, color); }
}

export const drawDestroyer = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	let color = unit.owner.foreColor
	const owner = unit.owner.name.toLowerCase()
	if (unit.isSunk) {
		UI.drawSunk(ctx, unit);
		color = new Color(30, 30, 30);
		drawDD(ctx, unit, 0, -2, color);
		drawDD(ctx, unit, 6, 0, color);
		drawDD(ctx, unit, 14, -3, color);
	}
	else {
		drawDD(ctx, unit, 0, 2, color);
		drawDD(ctx, unit, 2, -12, color);
		drawDD(ctx, unit, 14, -5, color);
		if ((owner === "germany") || (owner === "japan")) {
			drawDD(ctx, unit, 0, 2, color);
			drawDD(ctx, unit, 2, -12, color);
			drawDD(ctx, unit, 14, -5, color);
		}
	}
	Text.writeGenericText(ctx, unit, unit.name, "bold 7px verdana", 31, 8);
	Text.writeShipType(ctx, unit, "DD");
}

export const drawSub = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	let text = "Sub";
	const owner = unit.owner.name.toLowerCase()
	UI.drawColorRect(ctx, 2, 19, 37, 19, "blue");
	const color = new Color(255, 255, 255);
	if (owner === "germany") { text = "U-Boat"; }
	Text.writeGenericText(ctx, unit, text, 'bold 8px verdana', 20, 27, color);
	switch (owner) {
		case "america": case "us": case "united states": case "unitedstates": drawGato(ctx, unit, color); break;
		case "britain": drawTClass(ctx, unit, color); break;
		default: drawType7(ctx, unit, color); break;
	}
	Text.writeTopMiddleStrength(ctx, unit);
}

export const drawTaskForce = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	if(unit.owner.flagImage) { ctx.drawImage(unit.owner.flagImage, 6.5, 4); }
	UI.drawFlagOutline(ctx)
	Text.writeGenericText(ctx, unit, "TF" + unit.name, "bold 15px arial", 21, 37);
}

export const drawTransport = (ctx: CanvasRenderingContext2D, unit: Unit) => {
	switch (unit.owner.name.toLowerCase()) {
		case "america": case "us": case "united states": case "unitedstates": case "britain": UI.drawSharedAlliedBase(ctx, unit); break;
		default: break;
	}
	Text.writeGenericText(ctx, unit, "Transport", "bold 7px verdana", 21, 10);
	Text.writeBottomMiddleStrength(ctx, unit);
	UI.drawShape(ctx, 1, 0, 1, unit.owner.foreColor, [5], [22.5], [36, 22.5], [37, 18.5], [30, 19], [28, 20], [17, 20], [16.5, 16], [11.5, 16], [11.5, 18], [8.5, 18], [8.5, 20], [4.5, 19.5], [5, 22], [14], [16], [13.5, 13]);
}
