import Country from '../country/Country';
import { toAscii } from '../misc/convert';
import Point from '../misc/Point';
import Unit from '../unit/unit';
import { setHexZoom } from './hex-ui';

class Hex {
    /**
     * Assign the values of letter and number to make up the hex address (eg K23)
     * @static
     * setAttributes
     * @param {Hex} hex- the hex object
     */
    public static setAttributes(hex: Hex) {
        hex.hexLetter = toAscii(hex.coordinate.y);
        hex.hexNumber = (hex.coordinate.x + 16) - Math.floor(hex.coordinate.y / 2);
    }

    public id: number;
    public map: object;
    public hexLetter: string;
    public hexNumber: number;
    public size: number;
    public width: number;
    public owner: Country | null;
    public cityName: string;
    public ports: number;
    public isCapital: boolean;
    public isBeach: boolean;
    public terrain: number;
    public isIsland: boolean;
    public units: Unit[];
    public coordinate: Point;
    public pixelPoint: Point;
    public unitStartPoint: Point;
    public background: ImageData | null;
    public largeBackground: ImageData | null;
    public setZoom: (hex: Hex) => void; 

    constructor (id: number, map: object, x: number, y: number) {
      
        this.id = id;
        this.map = map;
        this.hexLetter = toAscii(y);
        this.hexNumber = (x + 16) - Math.floor(y / 2);
        this.size = 36.45; // 47.3;
        this.width = 0;
        this.owner = null;
        this.cityName = '';
        this.ports = 0;
        this.isCapital = false;
        this.isBeach = false;
        this.terrain = 0;
        this.isIsland = false;
        this.units = new Array();
        this.coordinate = new Point(x, y);
        this.pixelPoint = new Point(x, y);
        this.unitStartPoint = new Point(x, y);
        this.background = null;
        this.largeBackground = null;
        this.setZoom = setHexZoom;

        Hex.setAttributes(this);
    }

    public addUnit (unit: Unit) {
        if (!unit) { return; }
        this.units.push(unit)
        unit.location = 2;
        unit.hex = this;
    }

    public addOrCombineUnit (unit: Unit) {
        for(const thisUnit of this.units) {
            if (unit.canCombineWith(thisUnit)) {
                thisUnit.strength += unit.strength;
                unit.owner.removeUnit(unit);
            }
        }
        this.addUnit(unit);
    }

  
    public combineAllUnits (unit: Unit) {

        this.combineUnit(unit);
    }
      
    public combineUnit (unit: Unit) {
        for (const thisUnit of this.units) {
            if(unit.canCombineWith(thisUnit)) {
                unit.strength += thisUnit.strength;
                unit.owner.removeUnit(thisUnit);
                this.removeUnit(thisUnit);
            }
        }
    }
         
    public getTopUnit (): Unit | null {
        if (!this.units || this.units.length < 1) { return null }
        return this.units[this.units.length - 1]
    }
     
    public removeUnit (unit: Unit) {
        this.units = this.units.filter(un => un !== unit)
        unit.hex = null
    }

    public rotateUnits () {
        if(this.units.length < 2) {
            return;
        }
        const unit: Unit = this.units.shift() as Unit;
        this.addUnit(unit)
    }
 
    public getOwner () {
        return this.owner;
    }

    public toString(): string {
        return this.hexLetter + this.hexNumber.toString();
    }

    public write (ctx: CanvasRenderingContext2D, text: string) {
    	ctx.fillText(text, this.pixelPoint.x + 16, this.pixelPoint.y + 30);     
    }
   
    public clear (ctx: CanvasRenderingContext2D) {
        ctx.clearRect(this.unitStartPoint.x - 10, this.unitStartPoint.y - 9, this.width, (this.size * 1.6) - 1);
    }

    public draw (ctx: CanvasRenderingContext2D) {
        // if (game.hexControlDialogIsOpen) {
        //     this.drawFlagsOnHexes(ctx); return;  
        // }

        if (this.units.length > 0) {
            ctx.drawUnits(this.units, this.unitStartPoint.x, this.unitStartPoint.y);
        }
    }

    public drawFlagsOnHexes (ctx: CanvasRenderingContext2D) {
        if (this.owner && this.owner.flagImage) {
            ctx.drawImage(this.owner.flagImage, this.unitStartPoint.x + 7, this.unitStartPoint.y + 7);
        }
    }

    public getBackground (ctx: CanvasRenderingContext2D): ImageData {
        if (!this.background) {
            this.background = ctx.getImageData(this.unitStartPoint.x - 10, this.unitStartPoint.y - 9, this.width, (this.size * 1.6));
        }

        return this.background;
    }
    
    public getLargeBackground (ctx: CanvasRenderingContext2D): ImageData | null {
        if(this.largeBackground) {
            return this.largeBackground;
        }

		try {
			const x = this.unitStartPoint.x - 17;
			const y = this.unitStartPoint.y - 18;
			const w = this.width + 20;
			const h = (this.size * 1.6) + 30;

            this.largeBackground = ctx.getImageData(x, y, w, h);
            return this.largeBackground;
		}
		catch (err) {
			return null;
		}

    }
     
}

export default Hex;