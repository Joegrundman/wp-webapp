import Color from '../misc/Color'
import Unit from '../unit/unit'
import getCountryColors, { ICountryColors } from './country-colors'
// import { loadFlag} from './country-flags'
import ForcepoolGrouping from './ForcepoolGrouping'

class Country {
    public id: number
    public name: string
    public ally: Country | null
    public colonyOf: Country | null
    public coalition: number | null
    public isOrganization: boolean
    public isMajorPower: boolean
    public partOf: Country | null
    public pacific: boolean
    public backColor: Color
    public foreColor: Color
    public innerColor: Color
    public lineColor: Color
    public shadow: Color
    public flagImage: HTMLImageElement | null
    public forcepoolGroupings: ForcepoolGrouping[]
    public colonies: Country[]
    public units: Unit[]
    public codebreaking: object | null

    constructor (id: number = -1, name: string = "unknown") {
        const colors: ICountryColors = getCountryColors(name)
        this.id = id
        this.name = name
        this.ally = null
        this.colonyOf = null
        this.coalition = null
        this.isOrganization = false
        this.isMajorPower = false
        this.partOf = null
        this.pacific = false

        this.backColor = colors.back
        this.foreColor = colors.fore
        this.innerColor = colors.inner
        this.lineColor = colors.line
        this.shadow = colors.shadow
        this.flagImage = null

        this.forcepoolGroupings = []
        this.colonies = []
        this.units = []
        this.codebreaking = null

        // loadFlag(this)
    }

    public addColony (colony: Country) {
        colony.colonyOf = this
        this.colonies.push(colony)
    }
 
    public addForcepoolGrouping (grouping: ForcepoolGrouping) {
        this.forcepoolGroupings.push(grouping)
    }
   
    public addUnit (unit: Unit) {
        this.units.push(unit)
        unit.owner = this
    }

    public getUnit (id: number): Unit | undefined {
        return this.units.find((unit: Unit) => unit.id === id)
    }

    public removeUnit (unit: Unit) {
         this.units = this.units.filter((u: Unit) => u !== unit)
    }
    
    public toString () {
        return `${this.name} (${this.id})`
    }
	
}

export default Country
