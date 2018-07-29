/**
 *  A group for the forcepool dialog
 */

class ForcepoolGrouping {

  public id: number;
  public name: string;

  constructor (id: number = -1, name: string = 'unknown') {
      this.id = id;
      this.name = name;       
  }
}

export default ForcepoolGrouping;
