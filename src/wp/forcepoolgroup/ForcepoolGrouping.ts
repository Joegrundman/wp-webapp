class ForcepoolGrouping {

  private readonly _id: number;
  private readonly _name: string;

  constructor (id: number = -1, name: string = 'unknown') {
    this._id = id;
    this._name = name;       
  }

  public get id (): number {
    return this._id
  }

  public get name (): string {
    return this._name
  }
}

export default ForcepoolGrouping;
