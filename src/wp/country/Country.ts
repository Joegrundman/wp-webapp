'use strict';
import Color from '../misc/Color';
import Unit from '../unit/unit';
import getCountryColors, { ICountryColors } from './country-colors';
import ForcepoolGrouping from './ForcepoolGrouping';

/**
 *  WP.Country class holds all the information of a country -testing compile by jsdoc.conf.json and using opts and now also using npm to run the script
 */

class Country {
    public id: number;
    public name: string;
    public ally: number | null;
    public colonyOf: object | null;
    public coalition: number | null;
    public isOrganization: boolean;
    public isMajorPower: boolean;
    public partOf: object | null;
    public pacific: boolean;
    public backColor: Color;
    public foreColor: Color;
    public innerColor: Color;
    public lineColor: Color;
    public shadow: Color;
    public flagImage: string;
    public forcepoolGroupings: ForcepoolGrouping[];
    public colonies: object;
    public units: Unit[];
    public codebreaking: object | null;

    constructor (id: number = -1, name: string = "unknown") {
        const colors: ICountryColors = getCountryColors(name);
        this.id = id;
        this.name = name;
        this.ally = null;
        this.colonyOf = null;
        this.coalition = null;
        this.isOrganization = false;
        this.isMajorPower = false;
        this.partOf = null;
        this.pacific = false;

        this.backColor = colors.back;
        this.foreColor = colors.fore;
        this.innerColor = colors.inner;
        this.lineColor = colors.line;
        this.shadow = colors.shadow;
        this.flagImage = '';

        this.forcepoolGroupings = [];
        this.colonies = []
        this.units = []
        this.codebreaking = null;
    }


   /**
    * adds a colony to the colonies array property
    */
    // addColony (colony) {
    //     colony.colonyOf = this
    //     this.colonies.push(colony)
    //     colony.colonyOf = this
    // }
   /**
    * adds a forcepoolGrouping to the forcepoolGroupings array property
    */    
    public addForcepoolGrouping (grouping: ForcepoolGrouping) {
        this.forcepoolGroupings.push(grouping)
    }
   
    public addUnit (unit: Unit) {
        this.units.push(unit)
        unit.owner = this
    }

    public getUnit (id: number): Unit | undefined {
        return this.units.find((unit: Unit) => unit.id === id);
    }

    public removeUnit (unit: Unit) {
         this.units = this.units.filter((u: Unit) => u !== unit);
    }
    
    /**
     * converts the country name and id to a string
     */
    public toString () {
        return `${this.name} (${this.id})`;
    }
	
};

export default Country;
