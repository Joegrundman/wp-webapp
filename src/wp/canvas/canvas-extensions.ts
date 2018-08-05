import Unit from '../unit/unit';

const loadCanvasExtensions = () => {
	CanvasRenderingContext2D.prototype.drawUnits = function (units: Unit[], x: number, y: number, hideUnits: boolean = false, zoomLevel: number = 1) {
		if (hideUnits || !units || units.length < 1) { return; }
	
		const adjust = (value: number): number => value * zoomLevel;

		// 7 units
		const count: number = units.length;
		let start = 0;
		if (count > 5) {
			start = units.length - 5; // start is 2
		}
	
		const size: number = units[0].size;
		let stagger: number = adjust(10);
		const displayed: number = count - start;
		if (displayed > 1) {
			let height: number = ((displayed - 1) * stagger) + size;

			while (height > adjust(50)) {
				stagger -= 1;
				height = ((displayed - 1) * stagger) + size;
			}
	
			x += (stagger / 2);
			y += (stagger / 2);
			if (displayed > 2) { y++; }
		}
	
		let i: number = start;
		while (i < count) {
			units[i++].draw(this, x, y);
			x -= stagger;
			y -= stagger;
		}
	}
	
	CanvasRenderingContext2D.prototype.roundRect = function (sx: number, sy: number, ex: number, ey: number, r: number) {
		const r2d = Math.PI / 180;
		if ((ex - sx) - (2 * r) < 0) { r = ((ex - sx) / 2); } // ensure that the radius isn't too large for x
		if ((ey - sy) - (2 * r) < 0) { r = ((ey - sy) / 2); } // ensure that the radius isn't too large for y
		sx = Math.floor(sx);
		sy = Math.floor(sy);
		ex = Math.floor(ex);
		ey = Math.floor(ey);
		r = Math.floor(r);
		if (r < 0) { r = 0 };
		this.beginPath();
		this.moveTo(sx + r, sy);
		this.lineTo(ex - r, sy);
		this.arc(ex - r, sy + r, r, r2d * 270, r2d * 360, false);
		this.lineTo(ex, ey - r);
		this.arc(ex - r, ey - r, r, r2d * 0, r2d * 90, false);
		this.lineTo(sx + r, ey);
		this.arc(sx + r, ey - r, r, r2d * 90, r2d * 180, false);
		this.lineTo(sx, sy + r);
		this.arc(sx + r, sy + r, r, r2d * 180, r2d * 270, false);
		this.closePath();
	}
	
	CanvasRenderingContext2D.prototype.shadow = function (sx, sy, ex, ey, r) {
		const r2d: number = Math.PI / 180;
		if ((ex - sx) - (2 * r) < 0) { r = ((ex - sx) / 2); } // ensure that the radius isn't too large for x
		if ((ey - sy) - (2 * r) < 0) { r = ((ey - sy) / 2); } // ensure that the radius isn't too large for y
		sx = Math.floor(sx);
		sy = Math.floor(sy);
		ex = Math.floor(ex);
		ey = Math.floor(ey);
		r = Math.floor(r);
		this.beginPath();
		this.moveTo(ex - r, sy);
		this.arc(ex - r, sy + r, r, r2d * 270, r2d * 360, false);
		this.lineTo(ex, ey - r);
		this.arc(ex - r, ey - r, r, r2d * 0, r2d * 90, false);
		this.lineTo(sx + r, ey);
		this.arc(sx + r, ey - r, r, r2d * 90, r2d * 180, false);
		this.closePath();
	}	
};

export default loadCanvasExtensions;
