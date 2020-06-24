import {canvas,CELL_SIZE} from './draw';
import {Subject, timer} from 'rxjs'
import {tap,map} from 'rxjs/operators'



export const computerMove = new Subject();

export const simulateComputerTurn = (validCells) =>{

    const randomCell = Math.floor(Math.random()*validCells.length);
    timer(500).subscribe(()=>{
        computerMove.next(validCells[randomCell]);
    })
}