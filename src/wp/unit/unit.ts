import {
    attritionUnitTypes,
    damageableUnitTypes,
    exploitableUnitTypes,
    factorableUnitTypes,
    invertableUnitTypes,
    isolatableUnitTypes,
    lendableUnitTypes,
    sinkableUnitTypes,
    unitPxSize
} from 'Constants/game/unit-constants';
import Country from 'Country/Country';
import Hex from 'Hex/hex';
import Stack from 'Stack/Stack';
import { IUnitParams } from './i-unit-params';
import drawUnit from './unit-mapping';
import { drawBase } from './unit-ui';
import * as UI from './unit-ui';
import * as Misc from './unit-ui-misc';

const initialCountry: Country = new Country();

class Unit {
    public id: number;
    public fpg: number;
    public type: string;
    public name: string;
    public size: number;
    public factorable: boolean;
    public strength: number;
    public movement: number;
    public location?: number;
    public hex: Hex | null;
    public hexIdAtTurnStart: number | null;
    public image: string;
    public owner: Country;
    public taskforceOwner: object | null;
    public yard: object | null;
    public holderX: number | null;
    public holderY: number | null;
    public isDamaged: boolean;
    public highlight: string | null;
    public isEliminated: boolean;
    public isPacific: boolean | undefined;
    public isSlow: boolean;
    public isSunk: boolean;
    public isInverted: boolean;
    public isExploiting: boolean;
    public isIsolated: boolean;
    public isLent: boolean;
    public isSelected: boolean
    public stack: Stack | null;

    constructor (params: IUnitParams) {
        this.id = params.id || -1;
        this.fpg = params.fpg || 0;
        this.type = params.type || '';
        this.name = params.name || '';
        this.size = unitPxSize;
        this.factorable = (factorableUnitTypes.indexOf(this.type.toLowerCase()) > -1)

        this.strength = params.strength || 0;
        this.movement = params.movement || 0;

        this.location = params.location || 0;

        this.hex = params.hex || null;
        this.hexIdAtTurnStart = null;
        this.image = '';
        this.owner = initialCountry;

        this.taskforceOwner = null;
        this.yard = null;
        this.holderX = null;
        this.holderY = null;

        this.isDamaged = false;
        this.isEliminated = false;
        this.isPacific = params.isPacific;
        this.highlight = null;
        this.isSlow = !!params.isSlow;
        this.isSunk = !!params.isSunk;
        this.isInverted = !!params.isInverted;
        this.isExploiting = !!params.isExploiting;
        this.isIsolated = !!params.isIsolated;
        this.stack = null;
        this.isSelected = false;
    }
    
    public canBeCountedInAttrition (): boolean {
        return attritionUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }

    public canBeDamaged (): boolean {
        return damageableUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }
    
    public canBeInverted (): boolean {
        return invertableUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }

    public canBeIsolated (): boolean {
        return isolatableUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }
    
    public canBeLent (): boolean {
        return lendableUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }

    public canSink (): boolean {
        return sinkableUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }
       
    public breakdownAndCreate (strengthOfNewUnit: number): Unit {
        // if (strengthOfNewUnit >= this.strength) { 
        //     return;
        // }

        const oldUnit = this;
        oldUnit.strength -= strengthOfNewUnit;
        const newParams: IUnitParams = {
            fpg: this.fpg,
            id: this.id,
            isDamaged: this.isDamaged,
            isInverted: this.isInverted,
            isPacific: this.isPacific,
            isSlow: this.isSlow,
            isSunk: this.isSunk,
            movement: this.movement,
            name: this.name,
            strength: strengthOfNewUnit,
            type: this.type
        }
        const  unit: Unit = new Unit(newParams);
        if (oldUnit.owner) {
            oldUnit.owner.addUnit(unit);
        }
        return unit;
    }
  
    public canCombineWith (unit: Unit): boolean {
        if (unit === this) { return false }
        if (!unit.factorable) { return false }
        if (unit.type !== this.type) {
            const transPattern = /^tr$|transport/;
            const bothAreTransports = transPattern.test(unit.type) && transPattern.test(this.type);
            return bothAreTransports;
        }
        if (unit.type === "ASW" || unit.type === "transport" || unit.type === "tr") {
            const alliesPattern = /US|Britain/;
            if(unit.owner && this.owner) {
                const bothAreAllies = alliesPattern.test(unit.owner.name) && alliesPattern.test(this.owner.name)
                return bothAreAllies;
            }
        }
        if (unit.owner !== this.owner) { return false;}
        return true;
    }

    public canExploit (): boolean {
        return exploitableUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }

    public draw (ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.save();
        x = Math.floor(x);
        y = Math.floor(y);
        ctx.translate(x, y);
        drawBase(ctx, this);
        drawUnit(ctx, this);

        if (this.isEliminated) { UI.drawEliminated(ctx, this); }
        else if (this.isInverted) { UI.drawInverted(ctx, this); }
        else if (this.isIsolated) { UI.drawIsolated(ctx, this); }
        if (this.isDamaged) { UI.drawDamaged(ctx, this); }
        if (this.isExploiting) { UI.drawExploiting(ctx, this); }
        if (this.isLent) { Misc.drawLent(ctx, this); }
        UI.drawUnitTexture(ctx);
        if (this.isSelected) {
            UI.drawHighlight(ctx, this);
        }

        ctx.restore();
    }

    public findStackThatMatches (stacks: Stack[]) {
        const _this = this
        return stacks.findIndex((stack: Stack) => _this.unitTypeExistsInStack(stack));
    }
  
    public findStackWithSameAddress (stacks: Stack[]) {
        const _this = this;
        return stacks.findIndex((stack: Stack) => _this.unitHasSameAddress(stack));
    }

    public inForcepool () {
        return this.location === 1;
    }

    public onMap () {
        return this.location === 2;
    }
 
    public returnToForcepool () {
        this.location = 1;
        this.fpg = 0;

        if (this.factorable) {
            for (const unit of this.owner.units) {
                if (unit === this) { continue }
                if (unit.location !== 1 || unit.fpg !== 0) { continue }
                if (unit.canCombineWith(this)) {
                    unit.strength += this.strength
                    this.owner.removeUnit(this)
                    break
                }
            }
        }
    }

    /**
     * sets the Hex Id At turn start to match the fileloaded position
     * later should be modified to be at turn start
     * this will allow undo moves
     */
    public setHexIdAtTurnStart() {
        if(this.hex) {
            this.hexIdAtTurnStart = this.hex.id
        }
    }

    // public setShipyardAddress (yard: object, x: number, y: number) {
    //    this.yard = yard;
	//    this.holderX = x;
	//    this.holderY = y;
    // }
  
    // public setTaskforceAddress (tfOwner: IOwner, x: number, y: number) {
    //     this.taskforceOwner = tfOwner;
    //     this.holderX = x;
    //     this.holderY = y;
    // }
   
    public toString (): string {
        return `${this.type}, name: ${this.name}, strength: ${this.strength}, movement: ${this.movement}, id: ${this.id}`;
    }

    public unitHasSameAddress (stack: Stack): boolean {
        const that = this;
        return stack.units.some((unit: Unit) => (unit.holderX === that.holderX) && (unit.holderY === that.holderY))
    }

    public unitTypeExistsInStack (stack: Stack): boolean {
        const that = this;
        return stack.units.some((unit: Unit): boolean => unit.type === that.type && unit.strength === that.strength);
    }
    
}

export default Unit;
