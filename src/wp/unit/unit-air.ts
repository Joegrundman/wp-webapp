'use strict';
import { IUnitParams } from './i-unit-params';
import Unit from './unit';

class AirUnit extends Unit {
  public isInverted: boolean;
  public factorable: boolean;
  constructor(params: IUnitParams) {
    super(params);
    this.isInverted = !!params.isInverted;
    this.factorable = true;
  }
}

export default AirUnit;