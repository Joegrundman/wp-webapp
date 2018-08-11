import CodebreakingResult from '../codebreaking/CodebreakingResult';
import Country from '../country/Country';
import ForcepoolGroup from '../country/ForcepoolGrouping';
import Game from '../Game/game';
import Hex from '../Hex/hex';
import Map from '../Map/Map';
import Shipyard from '../Shipyard/shipyard';
import ShipyardUnit from '../Shipyard/shipyard-unit';
import Taskforce from '../Taskforce/taskforce';
import TaskforceUnit from '../Taskforce/taskforce-unit';
import { IUnitParams } from '../unit/i-unit-params';
import Unit from '../unit/unit';
import { ICodebreakingData, loadCodebreaking } from'./commonloader';

export interface IGameDetails {
  startingYear: string;
  startingSeason: string;
  currentPhaseId: string;
}

export interface ICodebreakingResult {
  value: string;
}

export interface IForcepoolGroupData {
  i: string;
  name: string;
}

export interface ICountryData {
  id: string;
  name: string;
  units: { unit: IUnitData[]; }
  coalition?: string;
  ally?: string;
  codebreaking?: ICodebreakingData;
  groupings?: {
    g: IForcepoolGroupData[]
  }
}

export interface IFLMapData {
  current?: string;
  id: string;
  hexes: string;
}

export interface IShipyardUnitData {
  id: string,
  x: string,
  y: string
}

export interface ITaskforceUnitData {
  id: string,
  x: string,
  y: string
}

export interface IFLShipyardData {
  owner : string;
  name: string;
  rate: string;
  units?: {
    unit: IShipyardUnitData[];
  }
}

export interface IFLTaskforceData {
  owner: string;
  size: string;
  units?: {
    unit: ITaskforceUnitData[]
  }
}

export interface IUnitData {
  id: string;
  fpg: string;
  type: string;
  hex?: string;
  name: string;
  strength: string;
  moves?: string;
  loc?: string;
  slow?: string;
  stack: string;
  sunk?: string;
  damaged?: string;
  inverted?: string;
  exploiting?: string;
  isolated?: string;
}

const loadForcepoolGroup = (fpgs: IForcepoolGroupData[], country: Country) => {
  fpgs.forEach((fpg) => {
    const id: number = parseInt(fpg.i,10);
    const name: string = fpg.name;
    const group = new ForcepoolGroup(id, name);
    country.addForcepoolGrouping(group);
  });
}

const loadUnits = (units: IUnitData[], country: Country, game: Game) => {
  units.forEach((u) => {
    let hex: Hex | null = null;
    if (u.hex) {
      const unitHex: number[] = u.hex.split('/').map((a) => parseInt(a, 10));
      const mapId: number = unitHex[0];
      const hexId: number = unitHex[1];
      const map: Map = game.maps[mapId];
      hex = map.getHex(hexId);
    }
    const params: IUnitParams = {
      fpg: parseInt(u.fpg, 10),
      hex,
      id: parseInt(u.id, 10),
      isDamaged: u.damaged === "1",
      isExploiting: u.exploiting === "1",
      isInverted: u.inverted === "1",
      isIsolated: u.isolated === "1",
      isSlow: u.slow === "1",
      isSunk: u.sunk === "1",
      location: u.loc ? parseInt(u.loc, 10): null,
      movement: u.moves ? parseInt(u.moves, 10) : undefined,
      name: u.name,
      strength: parseInt(u.strength, 10),
      type: u.type,

    }
    const unit: Unit = new Unit(params);
    country.addUnit(unit);
    if (hex) {
      game.addUnitToHex(unit, hex);
    }
    
    // if (u.loc === '2') {
    //   // const stackId: number = parseInt(u.stack, 10);
    //   const hex: string = u.hex as string;
    //   game.addUnitToHex(unit, hex);
    //   // unit.setHexIdAtTurnStart();
    // }
  });
}

const loadCountries = ((countries: ICountryData[], game: Game) => {
  countries.forEach((cty: ICountryData) => {
    const id = parseInt(cty.id, 10);
    const country: Country = game.getCountry(id);
    country.coalition = cty.coalition ? parseInt(cty.coalition, 10) : null;
    if (cty.ally) {
      country.ally = game.getCountry(parseInt(cty.ally, 10));
    }
    if (cty.codebreaking) {
      loadCodebreaking(cty.codebreaking, country);
    }

    if(cty.units && cty.units.unit) {
      const unitData: IUnitData[] = cty.units.unit;
      loadUnits(unitData, country, game);
    }

    if(cty.groupings && cty.groupings.g) {
      const fpgs: IForcepoolGroupData[] = cty.groupings.g
      loadForcepoolGroup(fpgs, country);
    }
  });
});

const loadCodebreakingResults = (codebreakingResults: ICodebreakingResult[], game: Game) => {
  codebreakingResults.forEach((cbr: ICodebreakingResult) => {
    const codebreakingResult = new CodebreakingResult();
    codebreakingResult.readFrom(cbr.value);
    game.addCodebreakingResult(CodebreakingResult)
  })
}

const loadGameDetails = (gameDetails: IGameDetails, game: Game) => {
  const year: number = parseInt(gameDetails.startingYear, 10);
  const season: string = gameDetails.startingSeason;
  const currentPhaseId: number = parseInt(gameDetails.currentPhaseId, 10);

  game.setCurrentDate(currentPhaseId, year, season);
};

const loadHexes = ((map: Map, hexList: string, game: Game) => {
  const hexes: string[] = hexList
    .split('/')
    .filter(x => x !== '');

  hexes.forEach((hexData: string, i: number) => {
    const hexDetails: number[] = hexData
      .split('^')
      .map((d) => parseInt(d.replace(/[io]/, ''), 10));
    const hex = map.getHex(hexDetails[0]);
    const owner = game.getCountry(hexDetails[1]);
    hex.owner = owner;
 
  }); 
});

const loadMaps = ((mapsData: IFLMapData[], game: Game) => {
  mapsData.forEach((m: IFLMapData) => {
    const id: number = +m.id
    if(m.current) {
      game.switchTheaters()
    }
    const map: Map = game.maps[id];
    loadHexes(map, m.hexes, game);
  });
});

const loadShipyardUnits = ((shipyardUnits: IShipyardUnitData[], shipyard: Shipyard, game: Game) => {
  shipyardUnits.forEach((syu) => {
    const id = parseInt(syu.id, 10);
    const x = parseInt(syu.x, 10);
    const y = parseInt(syu.y, 10);
    const shipyardUnit = new ShipyardUnit(id, x, y);
        shipyard.addShipyardUnit(shipyardUnit);
  })
})

const loadShipyards = (shipyards: IFLShipyardData[], game: Game) => {
  shipyards.forEach((sy) => {
    const shipyard: Shipyard = game.getShipyardFromName(sy.name);
    shipyard.rate = parseInt(sy.rate, 10);
    if(sy.units && sy.units.unit) {
      loadShipyardUnits(sy.units.unit, shipyard, game);
    }
  });
}

const loadTaskforceUnits = ((taskforceUnits: ITaskforceUnitData[], taskforce: Taskforce, game: Game) => {
  taskforceUnits.forEach((tfu) => {
    const id = parseInt(tfu.id, 10);
    const x = parseInt(tfu.x, 10);
    const y = parseInt(tfu.y, 10);
    const taskforceUnit = new TaskforceUnit(id, x, y);
        taskforce.addTaskforceUnit(taskforceUnit);
  })
})

const loadTaskforces = ((taskforces: IFLTaskforceData[], game: Game) => {
  taskforces.forEach((tf: IFLTaskforceData) => {
    const owner = tf.owner;
    const taskforce = game.getTaskforceFromOwner(owner);
    if (tf.units && tf.units.unit) {
      loadTaskforceUnits(tf.units.unit, taskforce, game);
    }
  });
});

export default ((gamefile: any, game: Game): void => {
  const gameDetails: IGameDetails = {
    currentPhaseId: gamefile.game.currentPhaseId ? gamefile.game.currentPhaseId : '0',
    startingSeason: gamefile.game.startingSeason,
    startingYear: gamefile.game.startingYear,
  }
  const codebreakingResults: ICodebreakingResult[] = gamefile.game.codebreaking_history.codebreaking;
  const countries: ICountryData[] = gamefile.game.countries.country;
  const maps: IFLMapData[] = gamefile.game.maps.map;
  const shipyards: IFLShipyardData[] = gamefile.game.shipyards.shipyard;
  const taskforces: IFLTaskforceData[] = gamefile.game.taskforces.taskforce;

  loadGameDetails(gameDetails, game);
  loadCodebreakingResults(codebreakingResults, game);
  loadCountries(countries, game);
  loadMaps(maps, game)
  loadShipyards(shipyards, game);
  loadTaskforces(taskforces, game);
});
