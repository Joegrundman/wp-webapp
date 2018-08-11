import Codebreaking from '../codebreaking/Codebreaking';
import Country from '../country/Country';

export interface ICodebreakingData {
  asw?: string;
  sub?: string;
  strategic?: string;
  tactical?: string;
  blank?: string;
  wild?: string;
}

export const loadCodebreaking = ((codeBreakingData: ICodebreakingData, country: Country) => {
  const codes: Codebreaking = new Codebreaking();
  Object.keys(codeBreakingData).forEach((type) => {
    const num: number = parseInt(codeBreakingData[type], 10);
    for (let i = 0; i < num; i++) {
      codes.addCard(type);
    }
  });
  country.codebreaking = codes;
});
