import { from, Subscriber, observable } from 'rxjs'

const Obse$ = from ([1,2,3,4,5]);

 const subscriber = {
    next: value => {
        console.log(value);
    },

    complete: () => {
        console.log("done");
    },

    error: value => {
        console.log(value);
    }
}   

// class DoubleSubscriber extends Subscriber {
//     destination: any;
//     _next(value) {
//         console.log(value);
//         this.destination.next(value*2);
//     }
// }

Obse$.subscribe(subscriber); 