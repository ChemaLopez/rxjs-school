import { displayLog } from './utils';
import {of, range} from 'rxjs'
export default () => {
    /** start coding */
    const source = of(1,2,3,4,5,{'pipo':'Hello World'}, function(){displayLog('Pipo')})

    const source2= range(3,10);

    const subscription = source2.subscribe(data => displayLog(data));



    /** end coding */
}