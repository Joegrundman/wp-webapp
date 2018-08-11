import {
  fetchGamefile,
  fetchInitfile
} from '../../services/gamefile';
import Game from '../Game/game';
import fileLoader from '../loaders/fileloader';
import initLoader from '../loaders/initloader';

const game: Game = new Game('euro');

const initFile = fetchInitfile();
const gamefile = fetchGamefile();

initLoader(initFile, game);
fileLoader(gamefile, game);

export default game;
