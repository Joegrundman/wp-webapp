'use strict';
import Country from '../country/Country';
import Hex from '../Hex/hex';
import Map from '../Map/Map';
import Phase from '../Phase/phase';
import Shipyard from '../Shipyard/shipyard';
import ShipyardUnit from '../Shipyard/shipyard-unit';
import Taskforce from '../Taskforce/taskforce';
import Unit from '../unit/unit';

class Game {

    public name: string;
    public mapIndex: number;
    public zoomLevel: number;
    public type: null;
    public countries: Country[];
    public maps: Map[];
    public currentMap: Map;
    public selectedUnit: Unit | null;
    public gameType: string;
    public shipyards: Shipyard[];
    public taskforces: any[];
    public selectedTaskforce: any;
    public state: number;
    public newspaper: string;
    public codebreakingResults: any[];
    public hexControlDialogIsOpen: boolean;
    public currentYear: number;
    public currentSeason: string;
    public currentPhaseId: number;
    public currentCoalition: number | null;
    public currentPhase: number;
    public showUnitTexture: boolean;
    public noSwastikas: boolean;
    public phase: Phase;

    constructor (name: string ) {
        this.name = name
        this.mapIndex = 0
        this.zoomLevel = 1
        this.type = null
        this.countries = []
        this.maps = [
            new Map("euro", 0),
            new Map("pac", 1)
        ]
        this.currentMap = this.maps[0]
        this.selectedUnit = null
        this.gameType = ''
        this.shipyards = []
        this.taskforces = []
        this.selectedTaskforce = null
        this.state = 0;
        this.newspaper = "";
        this.codebreakingResults = [];
        this.hexControlDialogIsOpen = false;
        this.currentYear = 2011;
        this.currentSeason = "Season";
        this.currentPhaseId = 0;
        this.currentCoalition = null;
        this.currentPhase = 0;

        this.showUnitTexture = true;
        this.noSwastikas = true;

        this.maps[0].createHexes(0);
        this.maps[1].createHexes(1);
    }

    public addCountry (country: Country) {
        this.countries.push(country);       
    }
  
    public addCodebreakingResult (result: any) {
        this.codebreakingResults.push(result);
    }

    public addShipyard (shipyard: Shipyard) {
        this.shipyards.push(shipyard);       
    }

    public addTaskforce (taskforce: any) {
        this.taskforces.push(taskforce);        
    }

    public addUnitToHex (unit: Unit, hex: Hex/*hex: string*/) {
        // const hexDetails: string[] = hex.split('/');
        // const map: Map = this.maps[hexDetails[0]];
        // const addHex: Hex = map.getHex(parseInt(hexDetails[1], 10));
        // addHex.addUnit(unit)
        hex.addUnit(unit);
    }

    // public getAllHighlightedUnits () {
    //     var units = []
    //     var i = -1;

    //     for (var ci = 0; ci < this.countries.length; ci++) {
    //         var ctry = this.countries[ci];
    //         for (var ui = 0; ui < ctry.units.length; ui++) {
    //             var unit = ctry.units.length[ui];
    //             if (!unit) continue;
    //             if (unit.highlighted)
    //             units[++i] = unit;
    //         }
    //     }  
    //     return units;
    // }

    public getCountry (id: number): Country {
        return this.countries.find((country: Country) => country.id === id) as Country;
    }

    public getCurrentMapId (): number {
        return this.currentMap.id;     
    }
   
    public getCountryFromName (name: string): Country {
        return this.countries.find((country: Country) => country.name === name) as Country;
    }

    public setCurrentDate (currentPhaseId: number, year: number, season: string) {
        if (!this.phase) { this.phase = new Phase(); }
        this.phase.initPhases();
        // phase.processLoadedPhase(currentPhaseId, year, season);
        // phase.refreshPhase();  
    }

    public getShipyard (id: number): Shipyard {
        return this.shipyards.find((shipyard: Shipyard) => shipyard.id === id) as Shipyard;     
    }
  
    public getShipyardFromName (name: string): Shipyard {
        return this.shipyards.find((shipyard: Shipyard) => shipyard.name === name) as Shipyard;          
    }
 
    public getShipyardFromUnit (unitId: number): Shipyard {
        return this.shipyards.find((shipyard: Shipyard) =>
            shipyard.shipyardUnits.some((unit: ShipyardUnit) => unit.id === unitId)
        ) as Shipyard;     
    
    }

    public getTaskforceFromOwner (owner: string): Taskforce {
        return this.taskforces.find((taskforce: Taskforce) => taskforce.owner === owner);
    }

    /**
     * gets a unit from the shipyard
     * @param {number} id - the unit id
     * @param {number} x - x coordinate of unit (in the shipyard)
     * @param {number} y - y coordinate of unit (in the shipyard)
     * @results {object}  unit
     */
 
    // public getUnitForShipyard (id: number, x: number, y: number): Unit {
    //     let res = null
    //     this.countries.forEach(cty => {
    //         cty.units.forEach(cu => {
    //             if (cu.id === id) {
    //                 cu.holderX = x
    //                 cu.holderY = y
    //                 res = cu
    //             }
    //         })
    //     })

        
    //     return res as Unit     
    // }
 
    // public getTaskforceFromUnit (unitId) {
    //     var res = null
    //     this.taskforces.forEach(tf => {
    //         tf.taskforceUnits.forEach(tfu => {
    //             if (tfu.id == unitId) { res = tf }
    //         })
    //     })
    //     if (res == null) {
    //      alert("Game.getTaskforce from unit: Unknown taskforce with: " + unitId);           
    //     }
    //     return res;   
    // }
    

    // public getTaskforces (id) {
    //     var res = null
    //     this.taskforces.forEach(tf => {
    //         if (tf.id == id) { res = tf }
    //     })
    //     if (res == null){
    //       alert("Game.getTaskforces: Unknown taskforce: " + id);          
    //     }
    //     return res;        
    // }
   
    // public getTaskforceFromOwner (owner) {
    //     var res = null
    //     this.taskforces.forEach(tf => {
    //         if (tf.owner == owner) { res = tf }
    //     })
    //     if (res == null) {
    //      alert("Game.getTaskforce: Unknown taskforce: " + owner);           
    //     }
    //     return res;
    // }

    // public getUnitForTaskforce (id, x, y) {
    //     var res = null
    //     this.countries.forEach(cty => {
    //         cty.units.forEach(cu => {
    //             if (cu.id == id) {
    //                 cu.holderX = x
    //                 cu.holderY = y
    //                 res = cu
    //             }
    //         })
    //     })
    //     if (res == null) {
    //        alert("Game.getUnit forTaskforce: Unknown unit: " + id);           
    //     }
    //     return res        
    // }
 
    // public getUnitFromCountryForGridDialog (id, x, y) {
    //     var res = null
    //     this.countries.forEach(cty => {
    //         cty.units.forEach(cu => {
    //             if (cu.id == id) {
    //                 cu.holderX = x
    //                 cu.holderY = y
    //                 res = cu
    //             }
    //         })
    //     })
    //     return res    
    // }
    /**
     * gets the list of major powers
     * @returns {object}  array of major powers
     */    
    // public getMajorPowers () {
    //     var majors = []
    //     this.countries.forEach(cty => {
    //         if (cty.isMajorPower) { majors.push(cty) }
    //     })
    //     return majors;      
    // }
 
    // public handleSelectUnselectOnBoard (unit) {
    //     if (unit && unit.hex) {
    //         unit.hex.draw();
    //     }        
    // }
    
    // public handleSelectUnselectInDialog (unit, dialog) {
    //     if (!dialog) return;
    //     if (!dialog.unitHolder) return;
    //     var stack = dialog.unitHolder.findStackContaining(unit);
    //     if (stack) {
    //         dialog.unitHolder.drawStack(stack);
    //     }    
    // }
    
    // public setInfoBarButtons () {
    //     $("#infoBarTopLeftWebsiteDiv").hide();
    //     $("#infoBarTopLeftGameDiv").show();        
    // }
     
    // public setSelectedTaskforce (taskforce) {
    //     if (taskforce == this.selectedTaskforce) return;
    //     this.selectedTaskforce = taskforce;     
    // }
    
    public setSelectedUnit (unit: Unit) {
        if (unit === this.selectedUnit) { return; }

        // const oldUnit = this.selectedUnit;
        this.selectedUnit = unit;

        // this.handleSelectUnselectOnBoard(oldUnit);
        // this.handleSelectUnselectInDialog(oldUnit, forcepool);
        // this.handleSelectUnselectInDialog(oldUnit, shipsAtSea);
        // this.handleSelectUnselectInDialog(oldUnit, shipyard);
        // this.handleSelectUnselectInDialog(oldUnit, taskforce);
        // this.handleSelectUnselectInDialog(oldUnit, unitCounter);

        // this.handleSelectUnselectOnBoard(unit);
        // this.handleSelectUnselectInDialog(unit, forcepool);
        // this.handleSelectUnselectInDialog(unit, shipsAtSea);
        // this.handleSelectUnselectInDialog(unit, shipyard);
        // this.handleSelectUnselectInDialog(unit, taskforce);
        // this.handleSelectUnselectInDialog(unit, unitCounter);       
    }
 
    public switchTheaters () {
        // WP.Misc.Ui.closeAllDialogs();
        this.selectedUnit = null;
        this.state = 0;
        if (this.currentMap === this.maps[0]) { this.currentMap = this.maps[1]; }
        else { this.currentMap = this.maps[0];}
        // onWindowResize();        
    }

    // public refreshCurrentTheater () {
    //     WP.Misc.Ui.closeAllDialogs();
    //     game.selectedUnit = null;
    //     game.state = 0;
    //     onWindowResize();
    // }

    /**
     * toggles unit texture on and off
     * @param {boolean}  showTexture 
     */    
    // public toggleShowUnitTexture (showTexture) {
    //     if (showTexture) { game.showUnitTexture = true; }
    //     else { game.showUnitTexture = false; }
    //     game.refreshCurrentTheater();       
    // }
    /**
     * toggles swastikas on and off
     * @param {boolean}  noSwastikas 
     */   
    // public toggleNoSwastikas(noSwastikas) {
    //     if (noSwastikas) { game.noSwastikas = true }
    //     else { game.noSwastikas = false }
    //     game.refreshCurrentTheater();
    // }
    
}

export default Game;