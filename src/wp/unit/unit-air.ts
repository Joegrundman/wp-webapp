import { IUnitParams } from './i-unit-params';
import Unit from './unit';

class AirUnit extends Unit {

  private _isInverted: boolean;
  private readonly _factorable: boolean;

  constructor(params: IUnitParams) {
    super(params);
    this._isInverted = !!params.isInverted;
    this._factorable = true;
  }

  public get isInverted (): boolean {
    return this._isInverted
  }

  public set isInverted (value: boolean) {
    this._isInverted = value
  }

  public get factorable (): boolean {
    return this._factorable
  }
}

export default AirUnit;