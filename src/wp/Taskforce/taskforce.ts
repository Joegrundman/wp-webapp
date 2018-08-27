import Unit from 'Unit/unit';
import TaskforceUnit from './taskforce-unit';

class Taskforce {

    public id: number;
    public owner: string;
    public size: number;
    public taskforceUnits: TaskforceUnit[];
    public unitHolder: object | null;
    public currentSquareX: number | null;
    public currentSquareY: number | null;
    public dragging: boolean;

    constructor (id: number, owner: string, size: number) {
        this.id = id;
        this.owner = owner;
        this.size = size;
        this.taskforceUnits = new Array();
        this.unitHolder = null;
        this.currentSquareX = null;
        this.currentSquareY = null;
        this.dragging = false;       
    }
    
    public addTaskforceUnit (taskforceUnit: TaskforceUnit) {
        this.taskforceUnits.push(taskforceUnit)
    }
  
    public removeUnitFrom (taskforceUnit: TaskforceUnit) {
        this.taskforceUnits = this.taskforceUnits.filter((tfUnit: TaskforceUnit) => taskforceUnit !== tfUnit)
    }

    public updateTaskforceUnitAddress (unit: Unit) {
        const tfUnit: TaskforceUnit | undefined = this.taskforceUnits.find((tfu: TaskforceUnit)=> tfu.id === unit.id)
        if (tfUnit && unit.holderX && unit.holderY) {
            tfUnit.x = unit.holderX;
            tfUnit.y = unit.holderY;
        }   
    }

    // public draw () {

    //     const units: Unit[] = [];

    //     this.taskforceUnits.forEach((tfu: TaskforceUnit) => {
    //         const unit: Unit = game.getUnitForTaskforce(taskforceUnit.id, taskforceUnit.x, taskforceUnit.y)
    //         units.push(unit);
    //     });
    //     for (var i = 0; i < tf.taskforceUnits.length; i++) {
    //         var taskforceUnit = tf.taskforceUnits[i];
    //         var unit = game.getUnitForTaskforce(taskforceUnit.id, taskforceUnit.x, taskforceUnit.y);
    //         units.push(unit);
    //     }
    //     var holder = WP.UnitHolder.unitHolderBuilder(taskforceCtx, $("#tfDetails"));
    //     holder.units = units;
    //     holder.drawTaskforce();
    //     taskforce.unitHolder = holder;        
    // }
    /**
     * Upon selecting a taskforce owner, this function draws a new flag and updates details
     * @param {object} owner -  the current owner of the taskforce
     */
    // handleTaskforceSelected (owner) {
    //     var taskforce = game.getTaskforceFromOwner(owner);
    //     var cty = game.getCountryFromName(owner);
    //     game.setSelectedTaskforce(taskforce);
    //     $("#tfCountryFlag").attr("src", WP.Country.UI.getFlagUrl(cty));
    //     taskforce.draw();
    // }
    // /**
    //  * Upon clicking the mouse button, this function finds the unit in the taskforce display under the mouse cursor
    //  * @param {object} e -  the mouse event object
    //  */    
    // onMouseDown (e) {
    //     var point = getPoint('taskforceCanvas', e);
    //     var stack = taskforce.unitHolder.findStackFor(point.x, point.y);
    //     if (stack) {
    //         game.setSelectedUnit(stack.getTopUnit());
    //         taskforce.unitHolder.drawStack(stack);
    //         taskforce.dragging = true;
    //     }
    //     else {
    //         game.setSelectedUnit(null);
    //     }       
    // }

    // /**
    //  * Upon double clicking the mouse, this function rotates the units in the stack under the mouse cursor
    //  */ 
    
    // onDoubleClick () {
    //     var unit = game.selectedUnit;
    //     var stack = taskforce.unitHolder.findStackContaining(unit);
    //     if (!stack) { return; }
    //     game.setSelectedUnit(null);
    //     if (stack.units.length > 1) {
    //         stack.rotateUnits();
    //         taskforce.unitHolder.drawStack(stack);
    //     }        
    // }
    // /**
    //  * Upon moving the mouse, this function drags the currently selected unit
    //  * @param {object} e - the mouse event object
    //  */     
    // onMouseMove (e) {
    //     taskforce.setCurrentSquare(e);
    //     if (game.selectedUnit && taskforce.dragging == true) {
    //         var unit = game.selectedUnit;
    //         if ((taskforce.currentSquareX != unit.holderX) || (taskforce.currentSquareY != unit.holderY)) {
    //             taskforce.moveUnit(unit);
    //         }
    //     }        
    // }
    // /**
    //  * Upon letting go of the mouse button, this function stops dragging the currently selected unit
    //  */     
    // onMouseUp () {
    //     taskforce.dragging = false
    // }
    // /**
    //  * Upon moving the mouse, this function finds the taskforce square currently under the cursor
    //  * @param {object} e - the mouse event object
    //  */     
    // setCurrentSquare (e) {
    //     var point = getPoint('taskforceCanvas', e);
    //     this.currentSquareX = Math.floor((point.x - 4) / 58);
    //     this.currentSquareY = Math.floor((point.y - 7) / 58);
    //     if (this.currentSquareY < 0) this.currentSquareY = 0;
    //     if (this.currentSquareX < 0) this.currentSquareX = 0;       
    // }
    // /**
    //  *  Updates the unit address to match its location after being dragged
    //  * @param {object} unit - the unit that has been moved
    //  */     
    // moveUnit (unit) {
    //     var stack = taskforce.unitHolder.findStackContaining(unit);
    //     stack.removeUnit(unit);
    //     unit.holderX = taskforce.currentSquareX;
    //     unit.holderY = taskforce.currentSquareY;
    //     taskforce.updateTaskforceUnitAddress(unit);
    //     taskforce.unitHolder.drawTaskforce();        
    // }
}

export default Taskforce;