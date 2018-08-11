import { toIntArray } from '../misc/convert';

class CodebreakingResult {
  public year: number;
  public season: number;
  public side: number;
  public cards: number[];

  constructor () {
      this.year = 1939
      this.season = 0
      this.side = 0
      this.cards = []
  }
  
  public readFrom (rec: string) {
      const split: string[] = rec.split('~');
      this.year = parseInt(split[0], 10);
      this.season = parseInt(split[1], 10);
      this.side = parseInt(split[2], 10);
      this.cards = toIntArray(split[3]);
  }
}

export default CodebreakingResult