import {canvas,CELL_SIZE} from './draw';
import {fromEvent} from 'rxjs'
import {tap,map, withLatestFrom,filter} from 'rxjs/operators'
import { gameState } from './gameState';


const click = fromEvent(canvas, 'click').pipe(
    map(evt =>{ 
        return {
            x:Math.floor(evt.offsetX/CELL_SIZE),
            y:Math.floor(evt.offsetY/CELL_SIZE)
        } 
    }),
    tap(console.log)
);

export const userMove = click.pipe(
    //FILTER
    withLatestFrom(gameState),
    filter( ([userClick,state]) => state.nextPlayer===1),
    filter( ([userClick,state]) => state.board[userClick.y][userClick.x]===0),
    map( ([userClick,state]) =>userClick)

    )