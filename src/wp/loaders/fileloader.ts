import Country from '../country/Country';
import Game from '../Game/game';
import Hex from '../Hex/hex';
import Map from '../Map/Map';
import { IUnitParams } from '../unit/i-unit-params';
import Unit from '../unit/unit';
import { ICodebreakingData, loadCodebreaking } from'./commonloader';

export interface IGameDetails {
  startingYear: string;
  startingSeason: string;
  currentPhaseId: string;
}

export interface ICountryData {
  id: string;
  name: string;
  units: { unit: IUnitData[]; }
  coalition?: string;
  ally?: string;
  codebreaking?: ICodebreakingData;
}

export interface IFLMapData {
  current?: string;
  id: string;
  hexes: string;
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


//         countryNode.find('g').each(function() {
//             loader.readForcepoolGrouping($(this), country);
//         });
  });
});

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

export default ((gamefile: any, game: Game): void => {
  const gameDetails: IGameDetails = {
    currentPhaseId: gamefile.game.currentPhaseId ? gamefile.game.currentPhaseId : '0',
    startingSeason: gamefile.game.startingSeason,
    startingYear: gamefile.game.startingYear,
  }
  const countries: ICountryData[] = gamefile.game.countries.country;
  const maps: IFLMapData[] = gamefile.game.maps.map;
  loadGameDetails(gameDetails, game);
  loadCountries(countries, game);
  loadMaps(maps, game)
});

// 'use strict';

// WP.FileLoader = class {
  
//             success: function (xml) {
//                 loader.processGameDetails(xml);
//                 loader.processCountries(xml);
//                 loader.processCodebreakingRecords(xml);
//                 loader.processMaps(xml);
//                 loader.processShipyards(xml);
//                 loader.processTaskforces(xml);
//                 loader.processPostLoad();
//             }
//         }); 
//     }
    
//     processCodebreakingRecords (xml) {
//         var loader = this;
//         $(xml).find('codebreaking_history').each(function() {
//             loader.readCodebreakingHistory($(this));
//         });
//     }
    
//     processMaps (xml) {
//        var loader = this;
// 	   $(xml).find('map').each(function () {
// 		  loader.readMap($(this));
// 	   });
//     }
    
//     processGameDetails (xml) {
//         var loader = this;
//         $(xml).find('game').each(function () {
//             loader.readGameDetails($(this));
//         });
//     }
    
//     processShipyards (xml) {
//         var loader = this;
// 	    $(xml).find('shipyard').each(function() {
// 		  loader.readShipyard($(this));
// 	   });
//     }
    
//     processTaskforces (xml) {
//         var loader = this;
//         $(xml).find('taskforce').each(function() {
//         loader.readTaskforce($(this));
//         });
//     }
    
//     processPostLoad () {
//         onWindowResize();
//     }
    
//     readGameDetails (gameNode) {
//         var currentPhaseId = null;
//         var year = parseInt(gameNode.attr('starting-year'));
//         var season = gameNode.attr('starting-season');
//         if (gameNode.attr('current-phase-id')){
//             currentPhaseId = parseInt(gameNode.attr('current-phase-id'));
//         }
//         game.setCurrentDate(currentPhaseId, year, season);
//     }
    
//     readCodebreakingDraw (drawNode) {
//         var cbr = new WP.CodebreakingResult();
//         cbr.readFrom(drawNode.attr('value'));
//         game.addCodebreakingResult(cbr);
//     }
    
//     readCodebreakingHistory (historyNode) {
//         var loader = this;
//         historyNode.find('codebreaking').each(function() {
//             loader.readCodebreakingDraw($(this));
//         });
//     }
    
    
//     readForcepoolGrouping (groupingNode, country) {
//         var id = parseInt(groupingNode.attr('i'));
//         var name = groupingNode.attr('name');
//         var grouping = WP.Country.forcepoolGroupingBuilder(id, name);
//         country.addForcepoolGrouping(grouping);
//     }
    
//     readShipyard (shipyardNode) {
//      	var name = shipyardNode.attr('name');
//         var shipyard = game.getShipyardFromName(name);
//         var rate = shipyardNode.attr('rate');
//         shipyard.rate = rate;
//         var loader = this;
//         shipyardNode.find('unit').each(function() {
//             loader.readShipyardUnit($(this), shipyard);
//         });   
//     }
    
//     readShipyardUnit (unitNode, shipyard) {
//         var id = parseInt(unitNode.attr('id'));
//         var x = parseInt(unitNode.attr('x'));
//         var y = parseInt(unitNode.attr('y'));
//         var shipyardUnit = WP.ShipyardUnit.shipyardUnitBuilder(id, x, y);
//         shipyard.addShipyardUnit(shipyardUnit);
//     }
    
//     readTaskforce (taskforceNode) {
//         var owner = taskforceNode.attr('owner');
//         var taskforce = game.getTaskforceFromOwner(owner);
//         var loader = this;
//         taskforceNode.find('unit').each(function() {
//             loader.readTaskforceUnit($(this), taskforce);
//         });
//     }
    
//     readTaskforceUnit (unitNode, taskforce) {
//         var id = parseInt(unitNode.attr('id'));
//         var x = parseInt(unitNode.attr('x'));
//         var y = parseInt(unitNode.attr('y'));
//         var taskforceUnit = WP.TaskforceUnit.taskforceUnitBuilder(id, x, y);
//         taskforce.addTaskforceUnit(taskforceUnit);
//     }
    
//     readHexes (map, hexList) {
//         var hexes = hexList.split('/');
//         for (var i = 0; i < hexes.length; i++) {
//             if (hexes[i]) {
//                 var hexDetails = hexes[i].split('^');
//                 var hexId = parseInt(hexDetails[0].replace("i", ""));
//                 var hex = map.getHex(hexId);
//                 var countryId = parseInt(hexDetails[1].replace("o", ""));
//                 var owner = game.getCountry(countryId);
//                 hex.owner = owner;
//             }
//         }
//     }   
        
//     readMap (mapNode) {
//         var loader = this;
//         var id = parseInt(mapNode.attr('id'));
//         var current = parseInt(mapNode.attr('current'));
//         if (current == 1) game.switchTheaters();
//         var map = game.maps[id];
//         mapNode.find('hexes').each(function () {
//             var hexes = $(this).text();
//             loader.readHexes(map, hexes);
//         }); 
//     }
    

        
//     }
    
// }

