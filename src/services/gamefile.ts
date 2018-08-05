import * as initfile from './initialize.json';
import * as gamefile from './sample.json';

export const fetchGamefile = (): object => gamefile;

export const fetchInitfile = (): object => initfile;