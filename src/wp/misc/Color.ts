class Color {
  private _red: number;
  private _green: number;
  private _blue: number;

  constructor (red: number, green: number, blue: number) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  get red(): number {
    return this._red;
  }

  get green(): number {
    return this._green;
  }

  get blue(): number {
    return this._blue;
  }

  public toRgb (): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
};

export default Color;
