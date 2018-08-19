import ForcepoolGrouping from './ForcepoolGrouping';

describe('ForcepoolGrouping', () => {
  it('should return an instance of a forcepool grouping with an id and a name', () => {
    const fpg: ForcepoolGrouping = new ForcepoolGrouping(2, 'test');
    expect(fpg.id).toBe(2);
    expect(fpg.name).toBe('test');
  });

  it('should create a forcepool grouping with default values if none passed in', () => {
    const fpg: ForcepoolGrouping = new ForcepoolGrouping();
    expect(fpg.id).toBe(-1);
    expect(fpg.name).toBe('unknown');
  })
});
