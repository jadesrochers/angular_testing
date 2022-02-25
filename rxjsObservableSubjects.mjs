import { Observable, BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

// Set up the observable to provide two immediate values, then a delayed one
const anObservable = new Observable(subscriber => {
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

let regSubject = new Subject(0); 
let behSubject = new BehaviorSubject(0); 
let replSubject = new ReplaySubject(0); 
regSubject.next(1);
behSubject.next(1);
replSubject.next(1);

// Still need the subscribers to the subjects or the values go to them, 
// but then don't get used/logged anywhere.
regSubject.subscribe(value => {
  console.log("Regular Subscription got", value); 
});

behSubject.subscribe(value => {
  console.log("Behavior Subscription got", value); 
});

replSubject.subscribe(value => {
  console.log("Replay Subscription got", value); 
});


anObservable.subscribe(regSubject);
anObservable.subscribe(behSubject);
anObservable.subscribe(replSubject);

