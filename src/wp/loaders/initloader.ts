import Country from '../country/Country'
import { loadFlag } from '../country/country-flags'
import Game from '../Game/game'
import Map from '../Map/Map'
import Shipyard from '../Shipyard/shipyard'
import Taskforce from '../Taskforce/taskforce'
import { loadCodebreaking } from'./commonloader'
import {
  ICountryData,
  IHexData,
  IMapData,
  IShipyardData,
  ITaskforceData
} from './interfaces'

const loadHex = (hexData: IHexData, id: number, map: Map, game: Game): void => {
  const hex = map.getHexFromId(id)
  const cityName = hexData.city
  const ports = hexData.ports
  const capital = hexData.capital
  const beach = hexData.beach
  const terrain = hexData.terrain
  const island = hexData.island
  if (hex) {
    const ownerId = hexData.owner
    if (ownerId) {
      const country = game.getCountry(parseInt(ownerId, 10))
      hex.owner = country;
      if (cityName) { hex.cityName = cityName }
      if (ports) { hex.ports = parseInt(ports, 10) }
      if (capital) { hex.isCapital = !!capital }
      if (beach) { hex.isBeach = !!beach }
      if (terrain) { hex.terrain = parseInt(terrain, 10) }
      if (island) { hex.isIsland = !!island }
    }
  }
}

const loadCountries = (countries: ICountryData[], game: Game): void => {
  countries.forEach((cty: ICountryData): void => {
    const id: number = parseInt(cty.id, 10)
    const name: string = cty.name
    const country: Country = new Country(id, name)

    game.addCountry(country)
    if (cty.alliedWith) {
      const allyId: number = parseInt(cty.alliedWith, 10)
      const ally: Country = game.getCountry(allyId)
      country.ally = ally
    }

    if(cty.codebreaking) {
      loadCodebreaking(cty.codebreaking, country)
    }
  })

  countries.forEach((cty: ICountryData) => {
    const country: Country = game.getCountry(parseInt(cty.id, 10))
    if (cty.colonyOf) {
      const colonyOwner: Country = game.getCountry(parseInt(cty.colonyOf, 10))
      country.colonyOf = colonyOwner
      colonyOwner.addColony(country)
    }

    if (cty.isOrganization) {
      country.isOrganization = !!cty.isOrganization
    }

    if (cty.majorpower) {
      country.isMajorPower = !!cty.majorpower
    }

    if (cty.pacific) {
      country.pacific = !!cty.pacific
    }

    if (cty.partOf) {
      const partOfId: number = parseInt(cty.partOf, 10)
      const partOfCountry: Country = game.getCountry(partOfId)
      country.partOf = partOfCountry
    }
    loadFlag(country)
  })
}

const loadMaps = (maps: IMapData[], game: Game): void => {
  maps.forEach((m: IMapData, i: number): void => {
    const map = game.maps[i]
    m.hexes.forEach((hex: IHexData, id: number): void => {
      loadHex(hex, id + 1, map, game)
    })
  })
}

const loadShipyards = (shipyards: IShipyardData[], game: Game): void => {
  shipyards.forEach((syd: IShipyardData, id: number): void => {
    const { name, owner, rate}: IShipyardData = syd
    const shipyard: Shipyard = new Shipyard(id, name, owner, parseInt(rate,10))
    game.addShipyard(shipyard)
  })
}

const loadTaskforces = (taskforces: ITaskforceData[], game: Game): void => {
  taskforces.forEach((tf: ITaskforceData, id: number): void => {
    const taskforce: Taskforce = new Taskforce(id, tf.owner, parseInt(tf.size, 10))
    game.addTaskforce(taskforce)
  })
}

export default (initFile: any, game: Game): void => {
  const countries: ICountryData[] = initFile.countries
  const maps: IMapData[] = initFile.maps
  const shipyards: IShipyardData[] = initFile.shipyards
  const taskforces: ITaskforceData[] = initFile.taskforces
  loadCountries(countries, game)
  loadMaps(maps, game)
  loadShipyards(shipyards, game)
  loadTaskforces(taskforces, game)
}
