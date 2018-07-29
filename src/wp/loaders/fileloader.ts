// import Initloader from './initloader';
import { fetchGamefile } from '../../services/gamefile'

class Fileloader {
  public static startGame (type, file: object) {
    const fileLoader = new Fileloader(file);
    // const initLoader: Initloader = new initLoader();
    // initloader.init(fileloader);
  }

  private file: object;
  private unitIndex: number;

  constructor(file: object) {
    this.file = fetchGamefile('hello');
    this.unitIndex = 0;
    console.log(this.file, this.unitIndex)
  }

  public onload () {
    this.processGameDetails()
  }
}

export default Fileloader;
