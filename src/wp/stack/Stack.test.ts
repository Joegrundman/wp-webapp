import { IUnitParams } from '../unit/i-unit-params';
import Unit from '../unit/unit';

import Stack from './Stack';

const unitParams: IUnitParams = {
    fpg: 0,
    id: 1,
    movement: 3,
    name: 'mock1',
    strength: 3,
    type: 'inf'
}

const mockUnit1: Unit = new Unit(unitParams);
const mockUnit2: Unit = new Unit({ ...unitParams, id: 2, name: 'mock2' });
const mockUnit3: Unit = new Unit({ ...unitParams, id: 3, name: 'mock3' });

describe('Stack', () => {
  const stack: Stack = new Stack();
  it('should have settable x properties', () => {
    stack.x = 5;
    expect(stack.x).toBe(5);
  });

  it('should have settable y properties', () => {
    stack.y = 9;
    expect(stack.y).toBe(9);
  });

  it('should have an add unit method that adds a unit to the units array', () => {
    expect(stack.units.length).toBe(0);
    stack.addUnit(mockUnit1);
    expect(stack.units.length).toBe(1);
  });

  describe('other Stack class methods', () => {
    let mockStack: Stack;
    beforeEach(() => {
      mockStack = new Stack();
      mockStack.addUnit(mockUnit1);
      mockStack.addUnit(mockUnit2);
      mockStack.addUnit(mockUnit3);
    });

    it('should be a stack with three units in it', () => {
      expect(mockStack.units.length).toBe(3);
    });

    it('should have a removeUnit method that removes a unit from the stack', () => {
      mockStack.removeUnit(mockUnit2);
      expect(mockStack.units.length).toBe(2);
      expect(mockStack.units.map(u => u.name)).toEqual(['mock1', 'mock3']);
    });

    it('should have a getUnit method that gets a handle on the top unit in the stack', () => {
      const unit: Unit = mockStack.getTopUnit() as Unit;
      expect(unit.name).toBe('mock3');
    });

    it('should have a rotateUnit method that rotates the units in the stack', () => {
      mockStack.rotateUnits();
      const unit1: Unit = mockStack.getTopUnit() as Unit;
      expect(unit1.name).toBe('mock1');
      mockStack.rotateUnits();
      const unit2: Unit = mockStack.getTopUnit() as Unit;
      expect(unit2.name).toBe('mock2');
    });
  });
});
