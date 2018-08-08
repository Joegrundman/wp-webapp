import {
  // fetchGamefile,
  fetchInitfile
} from '../../services/gamefile';
import Game from '../Game/game';
// import Fileloader from '../loaders/fileloader';
import initLoader from '../loaders/initloader';

const game: Game = new Game('euro');

// const file = fetchGamefile();
const initFile = fetchInitfile();

initLoader(initFile, game);


export default game;
// const fileloader: Fileloader = new Fileloader();

// console.log(fileloader)