import Color from './Color';

describe('Color class', () => {
  
  const testColor: Color = new Color(40, 50, 60);

  it('should be able to return the red value for the color', () => {
    expect(testColor.red).toBe(40);
  });

  it('should be able to return the green value for the color', () => {
    expect(testColor.green).toBe(50);
  });

  it('should be able to return the blue value for the color', () => {
    expect(testColor.blue).toBe(60);
  });

  it('should have a toRgb method that returns a stringified rgb color value', () => {
    expect(testColor.toRgb()).toBe('rgb(40, 50, 60)')
  });
});
