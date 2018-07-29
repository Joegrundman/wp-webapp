'use strict';
import {
    attritionUnitTypes,
    damageableUnitTypes,
    exploitableUnitTypes,
    factorableUnitTypes,
    invertableUnitTypes,
    isolatableUnitTypes,
    sinkableUnitTypes,
    unitPxSize
} from '../../constants/game/unit-constants';
import Country from '../country/Country';
import Stack from '../stack/Stack';
import { IUnitParams } from './i-unit-params';

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
    public hex: object | null;
    public hexIdAtTurnStart: number | null;
    public image: string;
    public owner: Country | null;
    public taskforceOwner: object | null;
    public yard: object | null;
    public holderX: number | null;
    public holderY: number | null;
    public isDamaged: boolean;
    public isHighlighted: boolean;
    public isEliminated: boolean;
    public isSlow: boolean;
    public isSunk: boolean;
    public isInverted: boolean;
    public isExploiting: boolean;
    public isIsolated: boolean;
    public stack: Stack | null;

    constructor (params: IUnitParams) {
        this.id = params.id || -1;
        this.fpg = params.fpg || 0;
        this.type = params.type || '';
        this.name = params.name || '';
        this.size = unitPxSize;
        this.factorable = (factorableUnitTypes.indexOf(this.type) > -1)

        this.strength = params.strength || 0;
        this.movement = params.movement || 0;

        this.location = params.location || 0;

        this.hex = params.hex || null;
        this.hexIdAtTurnStart = null;
        this.image = '';
        this.owner = null;

        this.taskforceOwner = null;
        this.yard = null;
        this.holderX = null;
        this.holderY = null;

        this.isDamaged = false;
        this.isEliminated = false;
        this.isHighlighted = false;
        this.isSlow = !!params.isSlow;
        this.isSunk = !!params.isSunk;
        this.isInverted = !!params.isInverted;
        this.isExploiting = !!params.isExploiting;
        this.isIsolated = !!params.isIsolated;
        this.stack = null;
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
    
    public canSink (): boolean {
        return sinkableUnitTypes.indexOf(this.type.toLowerCase()) > -1;
    }
       
    public breakdownAndCreate (strengthOfNewUnit: number): Unit | undefined {
        if (strengthOfNewUnit >= this.strength) { 
            return
        };
        const oldUnit = this;
        oldUnit.strength -= strengthOfNewUnit;
        const newParams: IUnitParams = {
            fpg: this.fpg,
            id: this.id,
            isDamaged: this.isDamaged,
            isInverted: this.isInverted,
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

    /**
     * checks to see if this.unit is in one of a group of passed stacks
     */
    public findStackThatMatches (stacks: Stack[]) {
        const _this = this
        return stacks.findIndex((stack: Stack) => _this.unitTypeExistsInStack(stack));
    }


    /**
     * searches stacks to find if a unit with the same address is in
     */    
    public findStackWithSameAddress (stacks: Stack[]) {
        const _this = this;
        return stacks.findIndex((stack: Stack) => _this.unitHasSameAddress(stack));
    }

    /**_
     * checks to see if unit is in forcepool
     */
    public inForcepool () {
        return this.location === 1;
    }

    /**
     * checks to see if unit is on map
     */
    public onMap () {
        return this.location === 2;
    }

    /**
     * returns unit to forcepool
     */    
    // public returnToForcepool () {
    //     this.location = 1;
    //     this.fpg = 0;

    //     if (this.factorable) {
    //         for (let i = 0; i < this.owner.units.length; i++) {
    //             const unit: Unit = this.owner.units[i];
    //             if (unit === this) { continue }
    //             if (unit.location !== 1 || unit.fpg !== 0) { continue }
    //             if (unit.canCombineWith(this)) {
    //                 unit.strength += this.strength
    //                 this.owner.removeUnit(this)
    //                 break
    //             }
    //         }
    //     }
    // }

    /**
     * sets the Hex Id At turn start to match the fileloaded position
     * later should be modified to be at turn start
     * this will allow undo moves
     */
    // public setHexIdAtTurnStart() {
    //     this.hexIdAtTurnStart = this.hex.id
    // }

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
