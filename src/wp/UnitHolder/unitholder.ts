/**
 * The UnitHolder class provides a container for holding units that will
 *  be drawn on the smaller canvases 
 * (eg forcepool etc.. but not main map)
 */
import Stack from 'Stack/Stack'
import Unit from 'Unit/unit'
import { drawUnits } from 'Unit/unit-ui'

class UnitHolder {
    public ctx: CanvasRenderingContext2D
    public units: Unit[]
    public width: number
    public height: number
    public stacks: Stack[]
    public stackSimilar: boolean

    constructor(ctx: CanvasRenderingContext2D){
        this.ctx = ctx;
        this.units = [];
        this.stacks = []
        this.stackSimilar = false;
    }

    public holderShouldRedraw (): boolean {
     this.stacks = []
     this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
     return (this.units && !!this.units.length)
    }
    
    public drawSingle (): void {
        this.units.forEach((u: Unit): void => {
            const newStack: Stack = new Stack()
            newStack.units[0] = u
            this.stacks.push(newStack)
        })
        this.drawAllStacks();
    }
    
    public drawStacked (): void {
        for (let i: number = this.units.length - 1; i > -1; i--) {
            let matchingStack: number = this.units[i].findStackThatMatches(this.stacks);
            if (matchingStack < 0) {
                this.stacks.push(new Stack())
                matchingStack = this.stacks.length - 1;
            }

            const stackToAdd: Stack = this.stacks[matchingStack];
            stackToAdd.units.push(this.units[i])
        }
        this.drawAllStacks();
    }
    
    public draw () {
        if (this.holderShouldRedraw()) {
            if (this.stackSimilar) {
                this.drawStacked();
            } else {
                this.drawSingle();
            }
        }  
    }
    
    public drawShipyard() {
       if (this.holderShouldRedraw()) {
		for (let i = this.units.length - 1; i > -1; i--) {
			let matchingStack = this.units[i].findStackWithSameAddress(this.stacks);
			if (matchingStack < 0) {
				this.stacks[this.stacks.length] = new Stack();
				matchingStack = this.stacks.length - 1;
			}

			const stackToAdd = this.stacks[matchingStack];
			stackToAdd.units.push(this.units[i]);
		}
		this.drawShipyardStacks();
	    }
    }
    
    public drawShipyardStacks(): void{
        
        let x: number;
        let y: number;

        for(const stack of this.stacks) {
            if(!stack.units.length) { return } 
            const unitX: number = stack.units[0].holderX as number
            const unitY: number = stack.units[0].holderY as number
            x = -24 + (unitX * 68)
            y = 44 + (unitY * 68)
            drawUnits(this.ctx, stack.units, x, y)
            stack.x = x
            stack.y = y
        }
    }

    public drawTaskforce() {
        if (this.holderShouldRedraw()) {
         for (let i = this.units.length - 1; i > -1; i--) {
             let matchingStack = this.units[i].findStackWithSameAddress(this.stacks);
             if (matchingStack < 0) {
                 this.stacks[this.stacks.length] = new Stack();
                 matchingStack = this.stacks.length - 1;
             }
 
             const stackToAdd = this.stacks[matchingStack];
             stackToAdd.units.push(this.units[i]);
         }
         this.drawTaskforceStacks();
         }
     }
     
     public drawTaskforceStacks(): void{
         
         let x: number;
         let y: number;
 
         for(const stack of this.stacks) {
             if(!stack.units.length) { return } 
             const unitX: number = stack.units[0].holderX as number
             const unitY: number = stack.units[0].holderY as number
             x = -22 + (unitX * 62.5)
             y = 8 + (unitY * 62.5)
             drawUnits(this.ctx, stack.units, x, y)
             stack.x = x
             stack.y = y
         }
     }

    public drawAllStacks (): void {
        const md: number = 12;
        let x: number = md - 3;
        let y: number = md - 3;
        const size: number = this.stacks[0].units[0].size;

        for (const stack of this.stacks) {
            if (x > this.ctx.canvas.width - size) {
                x = md - 3;
                y += size + md;
            }

            this.ctx.drawUnits(stack.units, x, y);
            stack.x = x;
            stack.y = y;
            x += size + md + 2;
        }
    }

    public drawStack (stack: Stack): void {
        if (stack) {
            this.ctx.drawUnits(stack.units, stack.x, stack.y);
        }
    }


    public findStackContaining (unit: Unit): Stack | null {
        for (const stack of this.stacks) {
            if (stack.units) {
                for (const thisUnit of stack.units) {
                    if (thisUnit === unit) {
                        return stack;
                    }
                }
            }
        }
        return null;
    }
    
    public findStackFor (x: number, y: number): Stack | null{
        let res = null
        this.stacks.forEach(stack => {
            if (stack.x < x && stack.x + 53 > x) {
                if (stack.y < y && stack.y + 53 > y) {
                    res = stack
                }
            }
        })        
        return res;
    }
    
}

export default UnitHolder
