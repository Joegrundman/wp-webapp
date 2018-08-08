'use strict';
import Country from '../country/Country';
import Game from '../Game/game';
import Map from '../Map/Map';
import Shipyard from '../Shipyard/shipyard';
import Taskforce from '../Taskforce/taskforce';

export interface ICountryData {
  id: number;
  name: string;
  alliedWith?: string | undefined;
  coalition?: string | undefined;
  codebreaking?: any | undefined;
  colonyOf?: string | undefined;
  diplomaticResults?: any | undefined;
  isOrganization?: string | undefined;
  majorpower?: string | undefined;
  pacific?: string | undefined;
  partOf?: string | undefined;
}

export interface IShipyardData {
  owner : string;
  name: string;
  rate: string;
}

export interface ITaskforceData {
  owner: string;
  size: string;
}

export interface IHexData {
  x: string;
  y: string;
  beach?: string;
  city?: string;
  ports?: string;
  terrain?: string;
  capital?: string;
  island?: string;
  owner?: string;
  sides?: string;
}

export interface IMapData {
  id: number;
  type: string;
  hexes: IHexData[];
}


const loadHex = ((hexData: IHexData, id: number, map: Map, game: Game) => {
  const hex = map.getHex(id);
  const cityName = hexData.city;
  const ports = hexData.ports;
  const capital = hexData.capital;
  const beach = hexData.beach;
  const terrain = hexData.terrain;
  const island = hexData.island;
  if (hex) {
    const ownerId = hexData.owner;
    if (ownerId) {
      const country = game.getCountry(parseInt(ownerId, 10));
      hex.owner = country;
      if (cityName) { hex.cityName = cityName; }
      if (ports) { hex.ports = parseInt(ports, 10); }
      if (capital) { hex.isCapital = !!capital; }
      if (beach) { hex.isBeach = !!beach; }
      if (terrain) { hex.terrain = parseInt(terrain, 10); }
      if (island) { hex.isIsland = !!island; }
    }
  }
});

const loadCountries = (countries: ICountryData[], game: Game) => {
  countries.forEach((cty: ICountryData) => {
    const id: number = cty.id;
    const name: string = cty.name;
    const country: Country = new Country(id, name);

    game.addCountry(country);
    if (cty.alliedWith) {
      const allyId: number = parseInt(cty.alliedWith, 10);
      const ally: Country = game.getCountry(allyId);
      country.ally = ally;
    }

    if (cty.colonyOf) {
      country.colonyOf = parseInt(cty.colonyOf, 10);
      const colonyOwner: Country = game.getCountry(country.colonyOf);
      colonyOwner.addColony(country);
    }

    if (cty.isOrganization) {
      country.isOrganization = !!cty.isOrganization;
    }

    if (cty.majorpower) {
      country.isMajorPower = !!cty.majorpower;
    }

    if (cty.pacific) {
      country.pacific = !!cty.pacific;
    }

    if (cty.partOf) {
      const partOfId: number = parseInt(cty.partOf, 10);
      const partOfCountry: Country = game.getCountry(partOfId);
      country.partOf = partOfCountry;
    }


    //   countryNode.find('codebreaking').each(function () {
    //     WP.CommonLoader.readCodebreaking($(this), country);
    // });

    // WP.Country.UI.loadFlag(country);
  });
};


const loadMaps = (maps: IMapData[], game: Game) => {
  maps.forEach((m: IMapData) => {
    const map: Map = game.maps[m.id];
    m.hexes.forEach((hex: IHexData, i: number) => {
      loadHex(hex, i, map, game);
    });
  });
}

const loadShipyards = ((shipyards: IShipyardData[], game: Game) => {
  shipyards.forEach((syd: IShipyardData, id: number) => {
    const { name, owner, rate}: IShipyardData = syd;
    const shipyard = new Shipyard(id, name, owner, parseInt(rate,10));
    game.addShipyard(shipyard);
  });
});

const loadTaskforces = ((taskforces: ITaskforceData[], game: Game) => {
  taskforces.forEach((tf: ITaskforceData, id: number) => {
    const { owner, size } = tf;
    const taskforce = new Taskforce(id, owner, parseInt(size, 10));
    game.addTaskforce(taskforce);
  });
})


export default (initFile: any, game: Game): void => {
  const countries: ICountryData[] = initFile.games.game.countries.country;
  const {
    maps,
    shipyards,
    taskforces,
  }: { 
    maps: IMapData[],
    shipyards: IShipyardData[],
    taskforces: ITaskforceData[]
  } = initFile.games.game;
  loadCountries(countries, game);
  loadMaps(maps, game);
  loadShipyards(shipyards, game);
  loadTaskforces(taskforces, game);
}
