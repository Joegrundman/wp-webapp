import Codebreaking from '../codebreaking/Codebreaking'
import Country from '../country/Country'
import { ICodebreakingData } from './interfaces'


export const loadCodebreaking = (codeBreakingData: ICodebreakingData, country: Country): void => {
  const codes: Codebreaking = new Codebreaking()
  Object.keys(codeBreakingData).forEach((type: string): void => {
    const num: number = parseInt(codeBreakingData[type], 10)
    for (let i: number = 0; i < num; i++) {
      codes.addCard(type)
    }
  })
  country.codebreaking = codes
}
