import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */
    const hello = Observable.create(function(observer) {
        observer.next('Hello');
        setTimeout(()=>{
            observer.next('World');
            observer.complete();
        }, 2000);
    });
    const observer = {
        next: evt => displayLog(evt),
        error: evt => console.error(evt),
        complete:() =>displayLog('[Done]')
    }
    const subscribe = hello.subscribe(observer);
    const subscribe2 = hello.subscribe(observer);

    subscribe.unsubsribe();
    /** end coding */
}