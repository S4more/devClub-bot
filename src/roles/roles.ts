import {HexColorString} from 'discord.js';

export * as java from './java';
export * as python from './python';
export * as typescript from './typescript';
export * as javascript from './javascript';


// Why id...?
interface IRole {
    name: string,
    id: string,
    color?: HexColorString,
}

export { IRole };
