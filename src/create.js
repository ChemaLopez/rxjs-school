import { displayLog } from './utils';
import {interval, timer} from 'rxjs'
export default () => {
    /** start coding */

    const source = interval(500);
    

    const subscription = source.subscribe(data => displayLog(data))
    const subscription2 = source.subscribe(data => displayLog(data))

    timer(3000).subscribe(()=>subscription.unsubscribe())
    setTimeout(()=>{subscription2.unsubscribe()},3000)
    /** end coding */
}