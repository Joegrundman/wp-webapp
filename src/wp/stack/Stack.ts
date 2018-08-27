import Unit from 'Unit/unit'

/**
 * A unit stack is an array of units that will be drawn one on top of the other
 */
class Stack {

    private _x: number;
    private _y: number;
    private _units: Unit[];

    constructor() {
        this._x = 0
        this._y = 0
        this._units = []
    }

    get x (): number {
        return this._x;
    }

    set x (x: number) {
        this._x = x;
    }

    get y (): number {
        return this._y;
    }

    set y (y: number) {
        this._y = y;
    }

    get units (): Unit[] {
        return this._units;
    }

    /**
     * gets the top unit from the unit stack
     */
    public getTopUnit (): Unit | null {
        if (!this._units.length) { return null } 
        return this._units[this._units.length - 1]
    }

    /**
     * removes unit from the unit stack
     */    
    public removeUnit (targetUnit: Unit) {
        this._units = this._units.filter((unit: Unit): boolean => unit !== targetUnit);
    }
    /**
     * adds unit to the unit stack
     */     
    public addUnit (unit: Unit) {
        if (!unit) { return };
        this._units.push(unit);
        unit.stack = this;
    }

    /**
     * rotates units in the unit stack
     */ 
    public rotateUnits () {
        if(this._units.length < 2) { return }
        const unit: Unit = this._units.shift() as Unit;
        this.addUnit(unit);
    }
}

export default Stack;
