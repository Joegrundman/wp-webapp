import ForcepoolGrouping from '../forcepoolgroup/ForcepoolGrouping';
import { IUnitParams } from '../unit/i-unit-params'; 
import Unit from '../unit/unit';
import Country from './Country';

describe('Country', () => {
  const country: Country = new Country(5, 'Sarkan');
  const unitParams: IUnitParams = {
    fpg: 0,
    id: 1,
    movement: 6,
    name: 't34',
    strength: 4,
    type: 'arm',
  }
  const unit: Unit = new Unit(unitParams);

  it('should create an instance of a country class', () => {
    expect(country.name).toBe('Sarkan');
  });

  it('should have an addForcepoolGrouping method that adds forcepool groupings to the country', () => {
    const fpg: ForcepoolGrouping = new ForcepoolGrouping(1, 'test-fpg');
    country.addForcepoolGrouping(fpg);
    expect(country.forcepoolGroupings[0]).toBe(fpg);
  });

  it('should have an addUnit method that adds a unit to the country units array', () => {
    country.addUnit(unit);
    expect(country.units[0]).toBe(unit);
  });

  it('should have a getUnit method that returns the specified unit in the units array', () => {
    const foundUnit: Unit | undefined = country.getUnit(1);
    expect(foundUnit).toBe(unit);
  });

  it('should have a getUnit method that returns undefined if not found in the units array', () => {
    const foundUnit: Unit | undefined = country.getUnit(2);
    expect(foundUnit).toBe(undefined);
  });

  it('should have a removeUnit method that removes the unit from the units array of there', () => {
    country.removeUnit(unit);
    expect(country.units.length).toBe(0);
  });

  it('should have a toString method that returns a stringified representation of the country id and name', () => {
    const res: string = country.toString();
    expect(res).toBe('Sarkan (5)');
  });
});