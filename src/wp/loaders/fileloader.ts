import CodebreakingResult from 'Codebreaking/CodebreakingResult'
import Country from 'Country/Country'
import ForcepoolGroup from 'ForcepoolGroup/ForcepoolGrouping'
import Game from 'Game/game'
import Hex from 'Hex/hex'
import Map from 'Map/Map'
import Shipyard from 'Shipyard/shipyard'
import ShipyardUnit from 'Shipyard/shipyard-unit'
import Taskforce from 'Taskforce/taskforce'
import TaskforceUnit from 'Taskforce/taskforce-unit'
import { IUnitParams } from 'Unit/i-unit-params'
import Unit from 'Unit/unit'
import { loadCodebreaking } from'./commonloader'
import {
  ICodebreakingResult,
  ICountryData,
  IFLMapData,
  IFLShipyardData,
  IFLTaskforceData,
  IForcepoolGroupData,
  IGameDetails,
  IShipyardUnitData,
  ITaskforceUnitData,
  IUnitData
} from './interfaces'

const loadForcepoolGroup = (fpgs: IForcepoolGroupData[], country: Country): void => {
  fpgs.forEach((fpg: IForcepoolGroupData): void => {
    const id: number = parseInt(fpg.id, 10)
    const name: string = fpg.name
    const group: ForcepoolGroup = new ForcepoolGroup(id, name)
    country.addForcepoolGrouping(group)
  })
}

const loadUnits = (units: IUnitData[], country: Country, game: Game): void => {
  units.forEach((u: IUnitData): void => {
    let hex: Hex | null = null
    let mapId: number | null = null
    if (u.hex) {
      const unitHex: number[] = u.hex.split('/')
        .map((a: string): number => parseInt(a, 10))
      mapId = unitHex[0]
      const hexId: number = unitHex[1]
      const map: Map = game.maps[mapId]
      hex = map.getHex(hexId)
    }
    const params: IUnitParams = {
      fpg: parseInt(u.fpg, 10),
      hex,
      id: parseInt(u.id, 10),
      isDamaged: u.damaged === "1",
      isExploiting: u.exploiting === "1",
      isInverted: u.inverted === "1",
      isIsolated: u.isolated === "1",
      isPacific: mapId === 1,
      isSlow: u.slow === "1",
      isSunk: u.sunk === "1",
      location: u.loc ? parseInt(u.loc, 10): null,
      movement: u.moves ? parseInt(u.moves, 10) : undefined,
      name: u.name,
      strength: parseInt(u.strength, 10),
      type: u.type,
    }
    const unit: Unit = new Unit(params)
    country.addUnit(unit)
    if (hex) {
      game.addUnitToHex(unit, hex)
    }
  })
}

const loadCountries = (countries: ICountryData[], game: Game): void => {
  countries.forEach((cty: ICountryData): void => {
    const id: number = parseInt(cty.id, 10)
    const country: Country = game.getCountry(id)
    country.coalition = cty.coalition ? parseInt(cty.coalition, 10) : null
    if (cty.ally) {
      country.ally = game.getCountry(parseInt(cty.ally, 10))
    }
    if (cty.codebreaking) {
      loadCodebreaking(cty.codebreaking, country)
    }

    if(cty.units) {
      const unitData: IUnitData[] = cty.units
      loadUnits(unitData, country, game)
    }

    if(cty.groupings) {
      const fpgs: IForcepoolGroupData[] = cty.groupings
      loadForcepoolGroup(fpgs, country)
    }
  })
}

const loadCodebreakingResults = (codebreakingResults: ICodebreakingResult[], game: Game): void => {
  codebreakingResults.forEach((cbr: ICodebreakingResult): void => {
    const codebreakingResult: CodebreakingResult = new CodebreakingResult()
    codebreakingResult.readFrom(cbr.value)
    game.addCodebreakingResult(CodebreakingResult)
  })
}

const loadGameDetails = (gameDetails: IGameDetails, game: Game): void => {
  const year: number = parseInt(gameDetails.startingYear, 10)
  const season: string = gameDetails.startingSeason
  const currentPhaseId: number = parseInt(gameDetails.currentPhaseId, 10)
  game.currentYear = year
  game.currentSeason = season
  game.currentPhaseId = currentPhaseId
  game.setCurrentDate(currentPhaseId, year, season)
};

const loadHexes = (map: Map, hexList: string, game: Game): void => {
  const hexes: string[] = hexList
    .split('/')
    .filter((x:string): boolean => x !== '')

  hexes.forEach((hexData: string, i: number): void => {
    const hexDetails: number[] = hexData
      .split('^')
      .map((d: string): number => parseInt(d.replace(/[io]/, ''), 10))

    const hex: Hex = map.getHex(hexDetails[0])
    const owner: Country = game.getCountry(hexDetails[1])
    hex.owner = owner
  }) 
}

const loadMaps = (mapsData: IFLMapData[], game: Game): void => {
  mapsData.forEach((m: IFLMapData): void => {
    const id: number = +m.id
    const map: Map = game.maps[id];
    loadHexes(map, m.hexes, game);
  })
}

const loadShipyardUnits = (shipyardUnits: IShipyardUnitData[], shipyard: Shipyard, game: Game): void => {
  shipyardUnits.forEach((syu: IShipyardUnitData): void => {
    const id: number = parseInt(syu.id, 10)
    const x: number = parseInt(syu.x, 10)
    const y: number = parseInt(syu.y, 10)
    const shipyardUnit: ShipyardUnit = new ShipyardUnit(id, x, y);
        shipyard.addShipyardUnit(shipyardUnit)
  })
}

const loadShipyards = (shipyards: IFLShipyardData[], game: Game): void => {
  shipyards.forEach((sy: IFLShipyardData): void => {
    const shipyard: Shipyard = game.getShipyardFromName(sy.name)
    shipyard.rate = parseInt(sy.rate, 10)
    if(sy.units) {
      loadShipyardUnits(sy.units, shipyard, game);
    }
  })
}

const loadTaskforceUnits = (taskforceUnits: ITaskforceUnitData[], taskforce: Taskforce, game: Game): void => {
  taskforceUnits.forEach((tfu: ITaskforceUnitData): void => {
    const id: number = parseInt(tfu.id, 10)
    const x: number = parseInt(tfu.x, 10)
    const y: number = parseInt(tfu.y, 10)
    const taskforceUnit: TaskforceUnit = new TaskforceUnit(id, x, y)
        taskforce.addTaskforceUnit(taskforceUnit)
  })
}

const loadTaskforces = (taskforces: IFLTaskforceData[], game: Game): void => {
  taskforces.forEach((tf: IFLTaskforceData): void => {
    const taskforce: Taskforce = game.getTaskforceFromOwner(tf.owner);
    if (tf.units) {
      loadTaskforceUnits(tf.units, taskforce, game);
    }
  })
}

export default ((gamefile: any, game: Game): void => {
  const gameDetails: IGameDetails = {
    currentPhaseId: gamefile.currentPhaseId ? gamefile.currentPhaseId : '0',
    startingSeason: gamefile.startingSeason,
    startingYear: gamefile.startingYear,
  }
  const codebreakingResults: ICodebreakingResult[] = gamefile.codebreakingHistory
  const countries: ICountryData[] = gamefile.countries
  const maps: IFLMapData[] = gamefile.maps
  const shipyards: IFLShipyardData[] = gamefile.shipyards
  const taskforces: IFLTaskforceData[] = gamefile.taskforces

  loadGameDetails(gameDetails, game)
  loadCodebreakingResults(codebreakingResults, game)
  loadCountries(countries, game)
  loadMaps(maps, game)
  loadShipyards(shipyards, game)
  loadTaskforces(taskforces, game)
})
