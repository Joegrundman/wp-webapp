import * as convert from './convert';

describe('convert decToHex', () => {
  it('should convert a decimal value to a hex value', () => {
    expect(convert.decToHex(4)).toBe('4');
    expect(convert.decToHex(13)).toBe('D')
    expect(convert.decToHex(40)).toBe('28');
  });
});

describe(' convert toAscii', () => {
  it('should convert a number to an uppercase ascii character', () => {
    expect(convert.toAscii(0)).toBe('A');
    expect(convert.toAscii(22)).toBe('W')
    
  });

  it('should return double characters if the index is greater than 25', () => {
    expect(convert.toAscii(27)).toBe('BB')
  });
});
