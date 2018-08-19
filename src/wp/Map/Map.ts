import { IMapOpts } from '../../components/mainMap/MainMap'
import game, { getGame } from '../Game'
import Hex from '../Hex/hex'
import Point from '../misc/Point'
import Stack from '../stack/Stack'
import Unit from '../unit/unit'

interface IDialog {
    unitHolder: {
        findStackContaining: (unit: Unit) => Stack
    }
    removeUnitFrom: (dialog: IDialog, unit: Unit) => void
    draw: () => void
}

const ctrlPressed = (): boolean => false

class Map {
    public mapCtx: CanvasRenderingContext2D
    public mapCanvas: HTMLCanvasElement
    public theater: string
    public width: number
    public height: number
    public currentX: number
    public currentY: number
    public id: number
    public dragging: boolean
    public hexes: Hex[]
    public currentHex: Hex | null | undefined
    public mapOpts: IMapOpts
    public scrollLeft: number
    public scrollTop: number

    constructor (theater: string, id: number, mapCtx: CanvasRenderingContext2D, mapCanvas: HTMLCanvasElement, mapOpts: IMapOpts) {
        this.mapCanvas = mapCanvas
        this.mapCtx = mapCtx
        this.theater = theater
        this.width = 0
        this.height = 0
        this.currentX = 0
        this.currentY = 0
        this.id = id
        this.dragging = false
        this.hexes = []
        this.currentHex = null
        this.mapOpts = mapOpts
        this.setCurrentHex = this.setCurrentHex.bind(this)
        this.scrollLeft = 0
        this.scrollTop = 0
    }
    
    public createHexes (id: number) {
        this.hexes = []
        let i = 1
        for (let x = 0; x < 51; x++) {
            for (let y = 0; y < 40; y++) {
                if ((id === 0) && (x === 50 && (y % 2 > 0))) { i++; continue }
                this.hexes[i] = new Hex(i, this, x, y)
                i++
            }
        }
    }
    
    public placeUnitFrom (dialog: IDialog, unit: Unit, hex: Hex) {
        game.selectedUnit = null
        const stack: Stack = dialog.unitHolder.findStackContaining(unit)

        if (unit.type.toLowerCase() === "cruiser") {
            if (!ctrlPressed() && unit.strength > 2) {
                unit = unit.breakdownAndCreate(2)
            }
            else if (ctrlPressed() && unit.strength > 6) {
                unit = unit.breakdownAndCreate(6)
            }
            else {
                stack.removeUnit(unit)
            }
        }
        else if (unit.factorable && !ctrlPressed() && unit.strength > 1) {
            unit = unit.breakdownAndCreate(1)
        }
        else if (unit.factorable && ctrlPressed() && unit.strength > 5) {
            unit = unit.breakdownAndCreate(5)
        }
        else {
            stack.removeUnit(unit)
        }
        
        hex.addOrCombineUnit(unit)
        // hex.clear();
        // hex.draw();
        dialog.removeUnitFrom(dialog, unit) 
        const topUnit = stack.getTopUnit();
        if(topUnit) {
            getGame().setSelectedUnit(topUnit)
        }
        dialog.draw()
    }

    public getHex (hexId: number): Hex {
        return this.hexes[hexId]
    }

    public getHexFromId (id: number): Hex | undefined {
        return this.hexes.find((hex: Hex) => hex && hex.id === id)
    }
    
    // public displayCoordinates () {
    //     var coord = "&nbsp;(" + this.currentX + ", " + this.currentY + ")";
    //     if (this.currentHex) coord += ": " + this.currentHex.toString();

    //     var mapDiv = $("#mapDiv");
    //     var hexReport = "";
    //     if (this.currentHex) { hexReport = " id: " + this.currentHex.id + " x: " + this.currentHex.coordinate.x + " y: " + this.currentHex.coordinate.y; }
    //     coord += " map[" + mapDiv.width() + ", " + mapDiv.height() + "]" + hexReport;
    //     $("#mousePosition").html(coord);
    // }
    
    public displayMapUnitsInHexInfo (force: any) {
        // if (this.currentHex) {
		// if (!window.hexInfo) window.hexInfo = new WP.HexInfo();
        //     hexInfo.updateFor(this.currentHex, force);
        // }
    }
    
    public getHexAt = (point: Point): Hex | undefined  => {
        return this.hexes.find((hex: Hex, i: number) => 
            hex &&
            point.x > hex.pixelPoint.x &&
            point.x < hex.pixelPoint.x + hex.width &&
            // point.y > hex.pixelPoint.y &&
            // point.y < hex.pixelPoint.y + hex.size)
            point.y > hex.pixelPoint.y + (hex.size / 4) &&
            point.y < hex.pixelPoint.y + (hex.size * 1.6))
    }
    
    
    public handleHexClick () {
        // if (game.hexControlDialogIsOpen) { hexControl.handleHexClick(this.currentHex); return; }
        // const unit = game.selectedUnit;
        // if (unit && unit.location === 1 && this.currentHex) {
        //     this.placeUnitFrom(forcepool, unit, this.currentHex);
        // }
        // if (unit && unit.location === 3 && this.currentHex) {
        //     this.placeUnitFrom(shipyard, unit, this.currentHex);
        // }
        // if (unit && unit.location === 4 && this.currentHex) {
        //     this.placeUnitFrom(taskforce, unit, this.currentHex);
        // }
        // else {
            this.selectUnit()
            if (getGame().selectedUnit) {
                this.dragging = true
            }
        // }

    }
    
    public moveUnitTo (unit: Unit, hex: Hex) {
        if (unit.hex === hex) { return }

        if (unit.hex) {
            const oldHex = unit.hex;
            oldHex.removeUnit(unit);
            oldHex.clear(this.mapCtx)
            oldHex.draw(this.mapCtx)
            }
            hex.addUnit(unit);
            hex.clear(this.mapCtx);
            hex.draw(this.mapCtx);
    }
    
    public onDoubleClick () {
       	const unit = getGame().selectedUnit;
        if (unit && unit.location === 1 && this.currentHex) {
            return
        }
        getGame().setSelectedUnit(null)
        if (this.currentHex && this.currentHex.units && this.currentHex.units.length > 1) {
            this.currentHex.rotateUnits()
            this.currentHex.draw(this.mapCtx)
            // hexInfo.units = null;
        //    this.displayMapUnitsInHexInfo(true);
        }
    }

    public setCurrentHex = (evt: MouseEvent) => {
        const x: number = evt.x + this.scrollLeft
        const y: number = evt.y - this.mapOpts.rect.top + this.scrollTop

        const point: Point = new Point(x, y)
        this.currentHex = this.getHexAt(point) 
    }
    
    public onMouseMove (evt: MouseEvent) {
        this.setCurrentHex(evt)
        // this.displayMapUnitsInHexInfo(false);
        // this.displayCoordinates();
        const selectedUnit = getGame().selectedUnit

        if (selectedUnit && this.dragging && this.currentHex) {
            if (this.currentHex !== selectedUnit.hex) {
                this.moveUnitTo(selectedUnit, this.currentHex);
            }
        }
    }
    
    public onMouseDown () {
        if (getGame().state === 0) {
            this.handleHexClick()
        }
        // else if (game.state === 1) {
        //     attrition.handleHexClick();
        // }        
    }
    
    public onMouseUp () {
        getGame().currentMap.dragging = false
    }
    
    public onScroll (e: Event) {
        const target = e.target as HTMLDivElement
        this.scrollLeft = target.scrollLeft
        this.scrollTop = target.scrollTop
    }

    
    public selectUnit () {
        const unit: Unit | null = this.currentHex ? this.currentHex.getTopUnit() : null
        
        getGame().setSelectedUnit(unit)
        console.log('selectUnit', unit)
    }

    public drawBackground (mapCtx: CanvasRenderingContext2D) {
        this.drawHexes(mapCtx)
    }
    
    // public drawBackground (mapCtx: CanvasRenderingContext2D) {
        // var mapImage = new Image()
        // var map = this
        
        // mapImage.crossOrigin = "Anonymous"

        // mapImage.onload = function() {
        //     var mapDiv = $("#mapDiv")
        //     var menuDiv = $("#menuDiv")

        //     // mapDiv.hide()
        //     // menuDiv.hide()
        //     map.width = mapImage.width
        //     map.height = mapImage.height

        //     WP.Canvas.resizeCanvas(mapCanvas, map)
        //     WP.Canvas.resizeCanvas(backgroundCanvas, map)

        //     backgroundCtx.drawImage(mapImage, 0, 0, map.width, map.height)

        //     if(WP.Misc.Ui.isiPad() || WP.Misc.Ui.isiPod()) {
        //             mapCtx.drawImage(mapImage, 0, 0, mapDiv.width(), mapDiv.height(), 0, 0, mapDiv.width(), mapDiv.height())
        //     } else {
        //     $('#mapBackgroundDiv').css("background-image", "url(" + url + ")")
        // }

        // this.drawHexes(mapCtx)
        // mapNav.refresh()

        // var mapBackgroundDiv = $("#mapBackgroundDiv")
        // mapBackgroundDiv.height(mapImage.height)
        // mapBackgroundDiv.width(mapImage.width)

        // mapDiv.show()

        // scrollDivRight(getCookie("rightscroll"))
        // scrollDivDown(getCookie("downscroll"))
        // }
        // this line assumes the main maps are in the Content/Maps folder, and not from cdn
        // var url = "/Content/Maps/WP" + this.theater + (game.zoomLevel *10) + ".jpg"
        // var url = ''
        // if (this.theater == 'euro') {
        //     url = "http://res.cloudinary.com/druzhkwmt/image/upload/v1456179368/b3oj0apypmsiu1zsypwl.jpg"
        // } else {
        //     url = "http://res.cloudinary.com/druzhkwmt/image/upload/v1456179470/evnyvf9x1ehyxt3ksrkp.jpg"
        // }
        
        // mapImage.src = url
    // }
    
    public drawHexes (ctx: CanvasRenderingContext2D) {
       this.hexes.forEach(h => h.draw(ctx))
    }
    
    public draw (ctx: CanvasRenderingContext2D) {
        this.setZoom()
        this.drawHexes(ctx)  
    }

    public clearAllUnits() {
        this.mapCtx.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
    }
    
    public setZoom () {
        this.hexes.forEach(h => h.setZoom(h))
    }
    
    public redrawHexesContainingUnits (ctx: CanvasRenderingContext2D, units: Unit[]) {
        this.hexes.forEach(hex =>{
            hex.units.forEach(hexUnit => {
                if (units.some(unit => unit === hexUnit)){
                    hex.clear(ctx)
                    hex.draw(ctx)
                }
            })
        })
    }
    
}

export default Map
