import Shipyard from '../Shipyard/shipyard'
import Taskforce from '../Taskforce/taskforce'
import { IUnitParams } from './i-unit-params'
import Unit from './unit'

class NavalUnit extends Unit {

  private readonly _factorable: boolean
  private _isDamaged: boolean
  private _isInverted: boolean
  private readonly _isSlow: boolean;
  private _isSunk: boolean;
  private _shipyard: Shipyard | null;
  private _taskforce: Taskforce | null;
  

  constructor (params: IUnitParams) {
    super(params)
    this._isDamaged = !!params.isDamaged
    this._factorable = true;
    this._isInverted = !!params.isInverted;
    this._isSlow = !!params.isSlow
    this._isSunk = !!params.isSunk
    this._shipyard = null
    this._taskforce = null
  }

  public get factorable (): boolean {
    return this._factorable
  }

  public get isDamaged (): boolean {
    return this._isDamaged
  }

  public set isDamaged (value: boolean) {
    this._isDamaged = value
  }

  public get isInverted (): boolean {
    return this._isInverted
  }

  public set isInverted (value: boolean) {
    this._isInverted = value
  }

  public get isSlow (): boolean {
    return this._isSlow
  }

  public get isSunk (): boolean {
    return this._isSunk
  }

  public set isSunk (value: boolean) {
    this._isSunk = value
  }

  public get shipyard (): Shipyard | null {
    return this._shipyard
  }

  public set shipyard (shipyard: Shipyard | null) {
    this._shipyard = shipyard
  }

  public get taskforce (): Taskforce | null {
    return this._taskforce
  }

  public set taskforce (taskforce: Taskforce | null) {
    this._taskforce = taskforce
  }
}

export default NavalUnit