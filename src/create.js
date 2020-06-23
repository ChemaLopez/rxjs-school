import { displayLog } from './utils';
import {fromEvent} from 'rxjs';

export default () => {
    /** start coding */
    const actionBtn = document.getElementById('action-btn');
    const source = fromEvent(actionBtn, 'click');

    source.subscribe( evt => { 
        displayLog(`Click event at pos ( ${evt.x} )`);
     });

     fromEvent(document, 'mousemove').subscribe(evt =>{
         console.log(evt)
     })


    /** end coding */
}