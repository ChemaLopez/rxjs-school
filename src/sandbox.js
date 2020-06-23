import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, last,takeLast,skip, tap } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        //takeWhile( ([col, row]) => col > 3 ),
        //tap(val =>console.log(`valid in takeWhile: [${val}]`) ),
        //takeLast(3)
        //last()
        tap(val =>console.log(`cell: [${val}]`) ),
        skip(4)

    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}