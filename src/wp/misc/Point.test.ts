import Point from './Point';

describe('Point', () => {
  it('should create a point object with the passed in x and y values', () => {
    const testPoint = new Point(12, 50);
    expect(testPoint.x).toBe(12);
    expect(testPoint.y).toBe(50);
  });
});
