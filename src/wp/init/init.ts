import { IMapOpts } from 'Components/mainMap/MainMap';
import Game from 'Game/game';
import fileLoader from 'Loaders/fileloader';
import initLoader from 'Loaders/initloader';
import {
  fetchGamefile,
  fetchInitfile
} from 'Services/gamefile';

export let game: Game;

export const initialize = (mapCtx: CanvasRenderingContext2D, mapCanvas: HTMLCanvasElement, mapOpts: IMapOpts) => {
  const gameInstance: Game = new Game ('euro', mapCtx, mapCanvas, mapOpts);
  const initFile = fetchInitfile();
  const gamefile = fetchGamefile();
  
  initLoader(initFile, gameInstance);
  fileLoader(gamefile, gameInstance);
  game = gameInstance;
  console.log('game', game) // tslint:disable-line
  game.currentMap.draw(mapCtx);
}

export const getGame = (): Game => game;
