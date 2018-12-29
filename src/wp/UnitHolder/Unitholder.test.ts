import Unit from 'Wp/unit/unit';
import Holder from './unitholder';

describe('Unitholder', (): void => {
  let holder: Holder;
  const mockCanvas: HTMLCanvasElement = document.createElement('canvas');
  mockCanvas.width = 400;
  mockCanvas.height = 400;

  const mockCtx: CanvasRenderingContext2D = mockCanvas.getContext('2d') as CanvasRenderingContext2D;

  beforeEach((): void => {
    holder = new Holder(mockCtx)
  });

  describe('holderShouldRedraw', ():void => {
    it('should return false if no units are present', (): void => {
      expect(holder.holderShouldRedraw()).toBe(false);
    });

    it('should return true if units are present', (): void => {
      const unit: Unit = { type: 'inf' } as Unit;
      holder.units = [unit];
      expect(holder.holderShouldRedraw()).toBe(true);
    });
  });
  
  describe('drawSingle', (): void => {
    let unit1: Unit;
    let unit2: Unit;
    

    beforeEach((): void => {
      unit1 = { type: 'inf' } as Unit;
      unit2 = { type: 'armor' } as Unit;
      holder.units = [unit1, unit2];
      holder.drawAllStacks = jest.fn();
    });

    it('should take all units in the holder and create stacks with one unit in them', () => {
      holder.drawSingle();
      expect(holder.stacks.length).toBe(2);
      expect(holder.stacks[0].units[0]).toBe(unit1);
      expect(holder.stacks[0].units.length).toBe(1);
      expect(holder.stacks[1].units[0]).toBe(unit2);
      expect(holder.stacks[1].units.length).toBe(1);
    });

    it('should call drawAllStacks', () => {
      holder.drawSingle();
      expect(holder.drawAllStacks).toHaveBeenCalled();
    })
  });

});
