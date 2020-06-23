import { updateDisplay } from './utils';
import { fromEvent, Subject,BehaviorSubject } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

export default () => {
    /** start coding */

    const progressBar = document.getElementById('progress-bar');
    const docElement = document.documentElement;

    //function to update progress bar width on view
    const updateProgressBar = (percentage) => {
        progressBar.style.width = `${percentage}%`;
    }

    //observable that returns scroll (from top) on scroll events
    const scroll$ = fromEvent(document, 'scroll').pipe(
        map(() => docElement.scrollTop),
        tap(evt => console.log("[scroll]: ", evt))
    );

    //observable that returns the amount of page scroll progress
    const scrollProgress$ = scroll$.pipe(
        map(evt => {
            const docHeight = docElement.scrollHeight - docElement.clientHeight;
            return (evt / docHeight) * 100;
        }),
    )
    //const scrollProgressHot = new Subject();

    //ES COMO UN SUBJECT pero emite el estado actual de sus estado cada vez que alguien se subscribe
    //por eso lo inicializamos a cero
    const scrollProgressHot = new BehaviorSubject(0);
    
    scrollProgress$.subscribe(scrollProgressHot);
    //subscribe to scroll progress to paint a progress bar
    const subscription = scrollProgressHot.subscribe(updateProgressBar);
    console.log('Scroll initial state: ', scrollProgressHot.value)

    //subscribe to display scroll progress percentage
    const subscription2 = scrollProgressHot.subscribe(
        val => updateDisplay(`${ Math.floor(val) } %`)
    );
    console.log('Scroll initial state: ', scrollProgressHot.value)

    
    //scrollProgressHot.next(0);
    /** end coding */
}