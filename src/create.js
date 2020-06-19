import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */
    const hello = Observable.create(function(observer) {
        observer.next('Hello');
        setTimeout(()=>{
            observer.next('World');
        }, 2000);
        observer.complete();
    });
    const observer = {
        next: evt => displayLog(evt),
        error: evt => console.error(evt),
        complete:() =>displayLog('[Done]')
    }
    const subscribe = hello.subscribe(evt => displayLog(evt));
    /** end coding */
}