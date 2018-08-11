import {
  fetchGamefile,
  fetchInitfile
} from '../../services/gamefile';
import loadCanvasExtensions from '../canvas/canvas-extensions';
import Game from '../Game/game';
import fileLoader from '../loaders/fileloader';
import initLoader from '../loaders/initloader';

loadCanvasExtensions();
export let game: Game;

export const initialize = (mapCtx: CanvasRenderingContext2D) => {
  const gameInstance: Game = new Game ('euro', mapCtx);
  const initFile = fetchInitfile();
  const gamefile = fetchGamefile();
  
  initLoader(initFile, gameInstance);
  fileLoader(gamefile, gameInstance);
  game = gameInstance;
  console.log('game', game) // tslint:disable-line
  game.currentMap.draw(mapCtx);
}
