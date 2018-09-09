import Unit from 'Unit/unit';
import { getGame } from 'Wp/Game';
import Holder from '../UnitHolder/unitholder';
import ShipyardUnit from './shipyard-unit';

class Shipyard {

    public id: number;
    public name: string;
    public owner: string
    public rate: number;
    public unitHolder: object;
    public shipyardUnits: ShipyardUnit[];
    public dragging: boolean;
    public currentSquareX: number;
    public currentSquareY: number;
    public syContext: CanvasRenderingContext2D | null

    constructor (id: number, name: string, owner: string, rate: number) {
 
     	this.id = id;
        this.name = name;
        this.owner = owner;
        this.rate = rate;
        this.unitHolder = {};
        this.shipyardUnits = [];
        this.currentSquareX = -1;
        this.currentSquareY = -1;
        this.dragging = false;
        this.syContext = null;
    }
  
    public addShipyardUnit (shipyardUnit: ShipyardUnit) {
        this.shipyardUnits.push(shipyardUnit)
    }
   
    public removeUnitFrom (unit: ShipyardUnit) {
        this.shipyardUnits = this.shipyardUnits.filter(syunit => syunit !== unit);
    }

    public updateShipyardUnitAddress (unit: Unit) {
        // const shipyard: Shipyard = game.getShipyardFromUnit(unit.id);

        for (const shipyardUnit of this.shipyardUnits) {
            if(unit.holderX && unit.holderY && shipyardUnit.id === unit.id) {
                shipyardUnit.x = unit.holderX;
                shipyardUnit.y = unit.holderY;
            }
        }
        
    }
    /**
     * Upon selecting a shipyard, this function draws a new flag and updates details
     * @param {number} id -  the id of the shipyard
     */    
    // public handleShipyardSelected (id) {
    //     var shipyard = game.getShipyards(id);
    //     var ctyName = shipyard.owner;
    //     var cty = game.getCountryFromName(ctyName);
    //     var rate = shipyard.rate;
    //     var capacity;
    //     if (((shipyard.name == "Atlantic") || (shipyard.name == "Pacific")) && (rate <= 5)) { capacity = 10; }
    //     else { capacity = rate * 2; }
    //     $("#syCountryFlag").attr("src", WP.Country.UI.getFlagUrl(cty));
    //     $("#syRate").html(rate);
    //     $("#syCapacity").html(capacity);
    //     shipyard.draw();
    // }

    public changeRateUp () {
        // var shipyard = game.getShipyards(id);
        this.rate++;
        // shipyard.handleShipyardSelected(id);
    }
     
    public changeRateDown () {
        // var shipyard = game.getShipyards(id);
        this.rate--;
        // shipyard.handleShipyardSelected(id);        
    }
    /**
     * Upon clicking the mouse button, this function finds the unit in the shipyard display under the mouse cursor
     * @param {object} e -  the mouse event object
     */     
    // public onMouseDown (e) {
    //     var point = getPoint('shipyardCanvas', e);
    //     var stack = shipyard.unitHolder.findStackFor(point.x, point.y);
    //     if (stack) {
    //         game.setSelectedUnit(stack.getTopUnit());
    //         shipyard.unitHolder.drawStack(stack);
    //         shipyard.dragging = true;
    //     }
    //     else {
    //         game.setSelectedUnit(null);
    //     }
    // }
    /**
     * Upon double clicking the mouse, this function rotates the units in the stack under the mouse cursor
     */     
    // public onDoubleClick () {
    //     var unit = game.selectedUnit;
    //     var stack = shipyard.unitHolder.findStackContaining(unit);
    //     if (!stack) { return; }
    //     game.setSelectedUnit(null);
    //     if (stack.units.length > 1) {
    //         stack.rotateUnits();
    //         shipyard.unitHolder.drawStack(stack);
    //     }        
    // }
    /**
     * Upon moving the mouse, this function drags the currently selected unit
     * @param {object} e - the mouse event object
     */     
    // public onMouseMove (e) {
    //     shipyard.setCurrentSquare(e);
    //     if (game.selectedUnit  && shipyard.dragging == true) {
    //         var unit = game.selectedUnit;
    //         if ((shipyard.currentSquareX != unit.holderX) || (shipyard.currentSquareY != unit.holderY)) {
    //             shipyard.moveUnit(unit);
    //         }
    //     }
    // }
    /**
     * Upon letting go of the mouse button, this function stops dragging the currently selected unit
     */     
    public onMouseUp () {
        this.dragging = false
    }
    /**
     * Upon moving the mouse, this function finds the shipyard square currently under the cursor
     * @param {object} e - the mouse event object
     */   
    // public setCurrentSquare (e) {
    //     var point = getPoint('shipyardCanvas', e);
    //     this.currentSquareX = Math.floor((point.x - 10) / 66);
    //     this.currentSquareY = Math.floor((point.y - 30) / 66);
    //     if (this.currentSquareY < 0) this.currentSquareY = 0;
    //     if (this.currentSquareX < 0) this.currentSquareX = 0;
    //     if ((this.currentSquareX < 1) && (this.currentSquareY < 5)) this.currentSquareX = 1;        
    // }
    /**
     *  Updates the unit address to match its location after being dragged
     * @param {object} unit - the unit that has been moved
     */    
    // public moveUnit (unit) {
    //     var stack = shipyard.unitHolder.findStackContaining(unit);
    //     stack.removeUnit(unit);
    //     unit.holderX = shipyard.currentSquareX;
    //     unit.holderY = shipyard.currentSquareY;
    //     shipyard.updateShipyardUnitAddress(unit);
    //     shipyard.unitHolder.drawShipyard();
    // }
    /**
     * Draws the units onto the shipyard display
     */    
    public draw () {
        const units: Unit[] = []
        //   var holder = WP.UnitHolder.unitHolderBuilder(shipyardCtx, $("#syDetails"));
        if(!this.syContext) { return }

        const holder: Holder = new Holder(this.syContext);
    
        this.shipyardUnits.forEach(syUnit => {
            const unit: Unit | null = getGame().getUnitForShipyard(syUnit.id, syUnit.x, syUnit.y)
            if (unit){ units.push(unit) }
        })
        
        holder.units = units;
        holder.drawShipyard();
        this.unitHolder = holder;
    }
}

export default Shipyard;







// WP.Shipyard = function () {
// 	this.id = null;
// 	this.name = null;
// 	this.owner = null;
// 	this.rate = null;
// 	this.unitHolder = null;
// 	this.shipyardUnits = new Array();
// 	this.currentSquareX = null;
// 	this.currentSquareY = null;
// 	this.dragging = false;
// }

// WP.Shipyard.Util = {

// 	shipyardBuilder: function (id, name, owner, rate) {
// 		var shipyard = new WP.Shipyard();
// 		shipyard.id = id;
// 		shipyard.name = name;
// 		shipyard.owner = owner;
// 		shipyard.rate = rate;
// 		return shipyard;
// 	}
    
// }

// WP.Shipyard.prototype.addShipyardUnit = function (shipyardUnit) {
// 	this.shipyardUnits.push(shipyardUnit);
// 	//shipyardUnit.owner = this;
// }

// // WP.Shipyard.prototype.removeUnitFromShipyard = function (shipyard, unit) {
// // 	shipyard = game.getShipyardFromUnit(unit.id);
// // 	var j = 0;
// // 	while (j < shipyard.shipyardUnits.length) {
// // 		if (shipyard.shipyardUnits[j].id == unit.id) {
// // 			shipyard.shipyardUnits.splice(j, 1);
// // 		}
// // 		else {
// // 			j++;
// // 		}
// // 	}

// // }

// WP.Shipyard.prototype.removeUnitFrom = function (shipyard, unit) {
// 	shipyard = game.getShipyardFromUnit(unit.id);
// 	var j = 0;
// 	while (j < shipyard.shipyardUnits.length) {
// 		if (shipyard.shipyardUnits[j].id == unit.id) {
// 			shipyard.shipyardUnits.splice(j, 1);
// 		}
// 		else {
// 			j++;
// 		}
// 	}

// }

// WP.Shipyard.prototype.updateShipyardUnitAddress = function (unit) {
// 	var shipyard = game.getShipyardFromUnit(unit.id);
// 	for (var i = 0; i < shipyard.shipyardUnits.length; i++) {
// 		if (shipyard.shipyardUnits[i].id == unit.id) {
// 			shipyard.shipyardUnits[i].x = unit.holderX;
// 			shipyard.shipyardUnits[i].y = unit.holderY;
// 		}
// 	}
//     // var syUnits = game.getShipyardFromUnit(unit.id).shipyardUnits
//     // syUnits.forEach(su => {
//     //     if (su.id == unit.id) {
//     //         su.x = unit.holderX
//     //         su.y = unit.holderY
//     //     }
//     // })
// }


// WP.ShipyardUnit = function () {
// 	this.id = null;
// 	this.x = null;
// 	this.y = null;
// }

// WP.ShipyardUnit.Util = {

// 	shipyardUnitBuilder: function (id, x, y) {
// 		var shipyardUnit = new WP.ShipyardUnit();
// 		shipyardUnit.id = id;
// 		shipyardUnit.x = x;
// 		shipyardUnit.y = y;
// 		return shipyardUnit;
// 	}

// }
