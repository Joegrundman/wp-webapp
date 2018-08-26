export interface ICodebreakingData {
  asw?: string
  sub?: string
  strategic?: string
  tactical?: string
  blank?: string
  wild?: string
}

export interface ICountryData {
  id: string
  name: string
  alliedWith?: string | undefined
  coalition?: string | undefined
  codebreaking?: ICodebreakingData | undefined
  colonyOf?: string | undefined
  diplomaticResults?: any | undefined
  isOrganization?: string | undefined
  majorpower?: string | undefined
  pacific?: string | undefined
  partOf?: string | undefined
}

export interface IShipyardData {
  owner : string
  name: string
  rate: string
}

export interface ITaskforceData {
  owner: string
  size: string
}

export interface IHexData {
  x: string
  y: string
  beach?: string
  city?: string
  ports?: string
  terrain?: string
  capital?: string
  island?: string
  owner?: string
  sides?: string
}

export interface IMapData {
  id: string
  current?: string
  type: string
  hexes: IHexData[]
}


export interface IGameDetails {
  startingYear: string
  startingSeason: string
  currentPhaseId: string
}

export interface ICodebreakingResult {
  value: string
}

export interface IForcepoolGroupData {
  id: string
  name: string
}

export interface ICountryData {
  id: string
  name: string
  units: IUnitData[]
  coalition?: string
  ally?: string
  codebreaking?: ICodebreakingData
  groupings?: IForcepoolGroupData[]
}

export interface IFLMapData {
  current?: string
  id: string
  hexes: string
}

export interface IShipyardUnitData {
  id: string
  x: string
  y: string
}

export interface ITaskforceUnitData {
  id: string
  x: string
  y: string
}

export interface IFLShipyardData {
  owner : string
  name: string
  rate: string
  units?: IShipyardUnitData[];
}

export interface IFLTaskforceData {
  owner: string
  size: string
  units?: ITaskforceUnitData[]
}

export interface IUnitData {
  id: string
  fpg: string
  type: string
  hex?: string
  name: string
  strength: string
  moves?: string
  loc?: string
  slow?: string
  stack: string
  sunk?: string
  damaged?: string
  inverted?: string
  exploiting?: string
  isolated?: string
}