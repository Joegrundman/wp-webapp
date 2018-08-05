'use strict';
import Hex from '../Hex/hex';
import Stack from '../stack/Stack';
import Unit from '../unit/unit';

interface IDialog {
    unitHolder: {
        findStackContaining: (unit: Unit) => Stack;
    }
    removeUnitFrom: (dialog: IDialog, unit: Unit) => void;
}

const ctrlPressed = (): boolean => false;

class Map {

    public theater: string;
    public width: number;
    public height: number;
    public currentX: number;
    public currentY: number;
    public id: number;
    public dragging: boolean;
    public hexes: Hex[];
    public currentHex: Hex | null;
    public getHex: (hexId: number) => Hex;

    constructor (theater: string, id: number) {
        this.theater = theater
        this.width = 0
        this.height = 0
        this.currentX = 0
        this.currentY = 0
        this.id = id
        this.dragging = false
        this.hexes = []
        this.currentHex = null

        this.getHex = function (hexId: number) {
            return this.hexes[hexId]
        }
    }
    
    public createHexes (id: number) {
        this.hexes = []
        let i = 1;
        for (let x = 0; x < 51; x++) {
            for (let y = 0; y < 40; y++) {
                if ((id === 0) && (x === 50 && (y % 2 > 0))){ i++; continue; }
                this.hexes[i] = new Hex(i, this, x, y);
                i++;
            }
        }
    }
    
    public placeUnitFrom (dialog: IDialog, unit: Unit, hex: Hex) {
        game.selectedUnit = null
        const stack: Stack = dialog.unitHolder.findStackContaining(unit)

        if (unit.type.toLowerCase() === "cruiser") {
            if (!ctrlPressed() && unit.strength > 2) {
                unit = unit.breakdownAndCreate(2);
            }
            else if (ctrlPressed() && unit.strength > 6) {
                unit = unit.breakdownAndCreate(6);
            }
            else {
                stack.removeUnit(unit);
            }
        }
        else if (unit.factorable && !ctrlPressed() && unit.strength > 1) {
            unit = unit.breakdownAndCreate(1);
        }
        else if (unit.factorable && ctrlPressed() && unit.strength > 5) {
            unit = unit.breakdownAndCreate(5);
        }
        else {
            stack.removeUnit(unit);
        }
        
        hex.addOrCombineUnit(unit);
        hex.clear();
        hex.draw();
        dialog.removeUnitFrom(dialog, unit) 
        
        game.setSelectedUnit(stack.getTopUnit());
        dialog.draw();
    }
    
    public displayCoordinates () {
        var coord = "&nbsp;(" + this.currentX + ", " + this.currentY + ")";
        if (this.currentHex) coord += ": " + this.currentHex.toString();

        var mapDiv = $("#mapDiv");
        var hexReport = "";
        if (this.currentHex) { hexReport = " id: " + this.currentHex.id + " x: " + this.currentHex.coordinate.x + " y: " + this.currentHex.coordinate.y; }
        coord += " map[" + mapDiv.width() + ", " + mapDiv.height() + "]" + hexReport;
        $("#mousePosition").html(coord);
    }
    
    public displayMapUnitsInHexInfo (force) {
        if (this.currentHex) {
		if (!window.hexInfo) window.hexInfo = new WP.HexInfo();
            hexInfo.updateFor(this.currentHex, force);
        }
    }
    
    public getHexAt (point) {
        for (var x = 0; x < this.hexes.length; x++) {
            var hex = this.hexes[x];
            if (!hex || !hex.pixelPoint) continue;
            if (point.x > hex.pixelPoint.x) {
                if (point.x < hex.pixelPoint.x + hex.width) {
                    if (point.y > hex.pixelPoint.y + (hex.size / 4)) {
                        if (point.y < hex.pixelPoint.y + (hex.size * 1.6)) {
                            return hex;
                        }
                    }
                }
            }
        }
        return null;
    }
    
    public getHexFromId (id) {
        var res = null
        this.hexes.forEach(h => { if (h.id == id) {res = h}})
        if (res == null){alert('map.getHexById - invalid hex:' + id)}
        return res
    }
    
    public handleHexClick () {
        if (game.hexControlDialogIsOpen) { hexControl.handleHexClick(this.currentHex); return; }
        var unit = game.selectedUnit;
        if (unit && unit.location == 1 && this.currentHex) {
            this.placeUnitFrom(forcepool, unit, this.currentHex);
        }
        if (unit && unit.location == 3 && this.currentHex) {
            this.placeUnitFrom(shipyard, unit, this.currentHex);
        }
        if (unit && unit.location == 4 && this.currentHex) {
            this.placeUnitFrom(taskforce, unit, this.currentHex);
        }
        else {
            this.selectUnit();
            if (game.selectedUnit) {
                this.dragging = true;
            }
        }

    }
    
    public moveUnitTo (unit, hex) {
        if (unit.hex == hex) return;

        if (unit.hex) {
                var oldHex = unit.hex;
                oldHex.removeUnit(game.selectedUnit);
                //setTimeout(function () {
                oldHex.clear();
                oldHex.draw();
                //}, 0)
             }
            hex.addUnit(unit);
            hex.clear();
            hex.draw();
    }
    
    public onDoubleClick () {
       	var unit = game.selectedUnit;
        if (unit && unit.location == 1 && map.currentHex) {
            return;
        }
        game.setSelectedUnit(null);
        var map = game.currentMap;
        if (map.currentHex) {
            if (map.currentHex.units && map.currentHex.units.length > 1) {
                map.currentHex.rotateUnits();
                map.currentHex.draw();
                hexInfo.units = null;
                map.displayMapUnitsInHexInfo(true);
            }
        }
    }
    
    public onMouseMove (e) {
        var map = game.currentMap;
        map.setCurrentHex(e);
        map.displayMapUnitsInHexInfo(false);
        map.displayCoordinates();

        if (game.selectedUnit && map.dragging && map.currentHex) {
            if (map.currentHex != game.selectedUnit.hex) {
                map.moveUnitTo(game.selectedUnit, map.currentHex);
            }
        }
    }
    
    public onMouseDown () {
        var map = game.currentMap;
        if (game.state == 0) {
            map.handleHexClick();
        }
        else if (game.state == 1) {
            attrition.handleHexClick();
        }        
    }
    
    public onMouseUp () {
        var map = game.currentMap;
    	map.dragging = false;
    }
    
    public setCurrentHex (e) {
        var point = getPoint('mapCanvas', e);
        point.x += $("#mapDiv").scrollLeft();
        point.y += $("#mapDiv").scrollTop();

        this.currentX = point.x;
        this.currentY = point.y;
        this.currentHex = this.getHexAt(point);       
    }
    
    public selectUnit () {
        var unit = null;
        if (this.currentHex) { unit = this.currentHex.getTopUnit(); }
        game.setSelectedUnit(unit);
    }
    
    public drawBackground () {
        var mapImage = new Image()
        var map = this
        
        mapImage.crossOrigin = "Anonymous"

        mapImage.onload = function() {
            var mapDiv = $("#mapDiv")
            var menuDiv = $("#menuDiv")

            // mapDiv.hide()
            // menuDiv.hide()
            map.width = mapImage.width
            map.height = mapImage.height

            WP.Canvas.resizeCanvas(mapCanvas, map)
            WP.Canvas.resizeCanvas(backgroundCanvas, map)

            backgroundCtx.drawImage(mapImage, 0, 0, map.width, map.height)

            if(WP.Misc.Ui.isiPad() || WP.Misc.Ui.isiPod()) {
                    mapCtx.drawImage(mapImage, 0, 0, mapDiv.width(), mapDiv.height(), 0, 0, mapDiv.width(), mapDiv.height())
            } else {
            $('#mapBackgroundDiv').css("background-image", "url(" + url + ")")
        }

        map.drawHexes()
        mapNav.refresh()

        var mapBackgroundDiv = $("#mapBackgroundDiv")
        mapBackgroundDiv.height(mapImage.height)
        mapBackgroundDiv.width(mapImage.width)

        mapDiv.show()

        scrollDivRight(getCookie("rightscroll"))
        scrollDivDown(getCookie("downscroll"))
        }
        // this line assumes the main maps are in the Content/Maps folder, and not from cdn
        //var url = "/Content/Maps/WP" + this.theater + (game.zoomLevel *10) + ".jpg"
        var url = ''
        if (this.theater == 'euro') {
            url = "http://res.cloudinary.com/druzhkwmt/image/upload/v1456179368/b3oj0apypmsiu1zsypwl.jpg"
        } else {
            url = "http://res.cloudinary.com/druzhkwmt/image/upload/v1456179470/evnyvf9x1ehyxt3ksrkp.jpg"
        }
        
        mapImage.src = url
    }
    
    public drawHexes () {
       this.hexes.forEach(h => h.draw())
    }
    
    public draw () {
        this.setZoom()
        this.drawBackground()  
    }
    
    public setZoom () {
        this.hexes.forEach(h => h.setZoom(h))
    }
    
    public redrawHexesContainingUnits (units) {
        this.hexes.forEach(h =>{
            h.units.forEach(hu => {
                if (units.some(un => un == hu)){
                    h.clear()
                    h.draw()
                }
            })
        })
    }
    
}

export default Map;