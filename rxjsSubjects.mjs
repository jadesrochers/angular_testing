import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

let regSubject = new Subject("default"); 
let behSubject = new BehaviorSubject("default"); 
let replSubject = new ReplaySubject("default"); 

regSubject.next("a");
behSubject.next("a");
replSubject.next("a");

regSubject.next("b");
behSubject.next("b");
replSubject.next("b");

// Note that each subject is going to convey a different set of the 
// values to its subscriber because they have different caching behavior

regSubject.subscribe(value => {
  console.log("Regular Subscription got", value); 
});

behSubject.subscribe(value => {
  console.log("Behavior Subscription got", value); 
});

replSubject.subscribe(value => {
  console.log("Replay Subscription got", value); 
});


regSubject.next("c"); 
behSubject.next("c");
replSubject.next("c");

