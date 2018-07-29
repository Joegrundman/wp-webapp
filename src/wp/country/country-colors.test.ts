import getCountryColors, { ICountryColors } from './country-colors';

describe ('getCountryColors for Britain', () => {

  const gbColors: ICountryColors = getCountryColors('britain');

  it('should return the correct country background color', () => {
    expect(gbColors.back.toRgb()).toEqual('rgb(209, 188, 140)');
  });

  it('should return the correct country foreground color', () => {
    expect(gbColors.fore.toRgb()).toEqual('rgb(0, 0, 0)');
  });

  it('should return the correct country inner color', () => {
    expect(gbColors.inner.toRgb()).toEqual('rgb(230, 220, 168)');
  });

  it('should return the correct country line color', () => {
    expect(gbColors.line.toRgb()).toEqual('rgb(0, 0, 0)');
  });

  it('should return the correct country shadow color', () => {
    expect(gbColors.shadow.toRgb()).toEqual('rgb(169, 148, 100)');
  });
});

describe ('getCountryColors for United States', () => {

  const usColors: ICountryColors = getCountryColors('united states');

  it('should return the correct country background color', () => {
    expect(usColors.back.toRgb()).toEqual('rgb(151, 172, 108)');
  });

  it('should return the correct country foreground color', () => {
    expect(usColors.fore.toRgb()).toEqual('rgb(0, 0, 0)');
  });

  it('should return the correct country inner color', () => {
    expect(usColors.inner.toRgb()).toEqual('rgb(202, 221, 166)');
  });

  it('should return the correct country line color', () => {
    expect(usColors.line.toRgb()).toEqual('rgb(0, 0, 0)');
  });

  it('should return the correct country shadow color', () => {
    expect(usColors.shadow.toRgb()).toEqual('rgb(111, 132, 68)');
  });
});
