import Hex from 'Hex/hex'
import Map from 'Map/Map'
import Unit from 'Unit/unit'
import { getGame } from '../Game'

type KeyboardEventHandler = (
  unit: Unit | null,
  map: Map,
  hex: Hex | null | undefined
) => void

export let keyPress: number

const handleC: KeyboardEventHandler = (unit, map, hex) => {
  
  if (unit && unit.onMap() && hex) {
    hex.combineAllUnits(unit)
    handlePostKeyboardAction(unit, map, hex)
  }
}

const handleD: KeyboardEventHandler = (unit, map, hex) => {
  if (!unit) { return }
  if (unit.canBeDamaged()) {
    unit.isDamaged = !unit.isDamaged
  }
  handlePostKeyboardAction(unit, map, hex)
}

const handleE: KeyboardEventHandler = (unit, map, hex) => {
  if (!unit) { return }
  unit.isEliminated = !unit.isEliminated
  handlePostKeyboardAction(unit, map, hex)
}

const handleI: KeyboardEventHandler = (unit, map, hex) => {
  if (!unit) { return }
  if (unit.canBeInverted()) {
    unit.isInverted = !unit.isInverted
  }
  if (unit.canBeIsolated()) {
    unit.isIsolated = !unit.isIsolated
  }
  handlePostKeyboardAction(unit, map, hex)
}

const handleL: KeyboardEventHandler = (unit, map, hex) => {
  		if (!unit) { return }
  		if (unit.canBeLent()) {
        unit.isLent = !unit.isLent
      }
  		handlePostKeyboardAction(unit, map, hex)
}

const handleDeleteKey: KeyboardEventHandler = (unit, map, hex) => {
  if (unit && unit.onMap()) {
    if (unit.hex) {
      unit.hex.removeUnit(unit);
    }
    unit.returnToForcepool();
    handlePostKeyboardAction(unit, map, hex);
  }
}

const handleEsc: KeyboardEventHandler = (unit, map) => {
  // WP.Misc.Ui.closeAllDialogs();
  const hex: Hex | null = unit ? unit.hex : null 
  const game = getGame()
  game.state = 0;
  game.selectedUnit = null;
  handlePostKeyboardAction(unit, map, hex);
  map.redrawHexesContainingUnits(game.mapCtx, game.getAllHighlightedUnits());
}

const handleNumberKey = (unit: Unit | null, map: Map) => {
  if (!unit) { return }
  const hex = unit.hex;
  unit = unit.breakdownAndCreate(-(48 - keyPress));
  if (hex) {
    hex.addUnit(unit)
  }
  handlePostKeyboardAction(unit, map, hex);
}

export const handleKeyupEvent = () => {
  keyPress = -1;
}

const handlePostKeyboardAction: KeyboardEventHandler = (unit, map, hex) => {
  const game = getGame()
  game.setSelectedUnit(null)
  if (unit) { unit.isSelected = false }
  const mapCtx = game.mapCtx
  if (hex) {
    hex.clear(mapCtx);
    hex.draw(mapCtx);
    map.displayMapUnitsInHexInfo(true);
    return;
  }
  // if (unit) {
  //   if (forcepool && unit.inForcepool()) {
  //     forcepool.draw();
  //     return;
  //   }
  // }
}

const handleS: KeyboardEventHandler = (unit, map, hex) => {
  if (!unit) { return }
  if (unit.canSink()) {
    unit.isSunk = !unit.isSunk
  }
  handlePostKeyboardAction(unit, map, hex);
}

/**
 * ignores key command to send unit back to turn start hex
 * if not a unit selected, or if unit has no current hex id
 * or if unit has hexIdAtTurnStart property
 */

const handleU: KeyboardEventHandler = (unit, map, hex) => {
  if (!unit || !unit.hex || !unit.hex.id || !unit.hexIdAtTurnStart) { return }
  if (unit.hex.id !== unit.hexIdAtTurnStart) {
    hex = map.getHexFromId(unit.hexIdAtTurnStart)
    if(hex) { map.moveUnitTo(unit, hex) }
  }
  handlePostKeyboardAction(unit, map, hex)
}

const handleX: KeyboardEventHandler = (unit, map, hex) => {
  if (!unit) { return }
  if (unit.canExploit()) { unit.isExploiting = !unit.isExploiting }
  handlePostKeyboardAction(unit, map, hex)
}

export const ctrlPressed = () => {
  return keyPress === 17
}

export const shiftPressed = () => {
  return keyPress === 16
}

export const handleKeyboardEvent = (keyCode: number) => {
  keyPress = keyCode
  const game = getGame()
  const map = game.currentMap
  const unit = game.selectedUnit
  const hex = game.currentMap.currentHex

  switch (keyCode) {
    case 27: // esc
      handleEsc(unit, map, hex)
      break;
    case 46: // delete
      handleDeleteKey(unit, map, hex)
      break;
    case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57:
      handleNumberKey(unit, map)
      break;
    case 67: // c => combine
      handleC(unit, map, hex)
      break;
    case 68: // d => mark damaged
      handleD(unit, map, hex)
      break;
    case 69: // e => mark eliminated
      handleE(unit, map, hex);
      break;
    case 73: // i  => mark inverted or isolated
      handleI(unit, map, hex)
      break;
    case 76: // l => mark lent
      handleL(unit, map, hex)
      break;
    case 83: // s => mark sunk
      handleS(unit, map, hex)
      break;
    case 85: // u => undo
      handleU(unit, map, hex)
      break;
    case 88: // x => mark exploiting
      handleX(unit, map, hex)
      break
    default:
      break
  }
}