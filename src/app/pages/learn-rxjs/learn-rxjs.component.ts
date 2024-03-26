import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject, Subscriber, catchError, combineLatest, concat, concatAll, concatMap, delay, filter, from, fromEvent, interval, map, merge, mergeAll, of, reduce, scan, share, switchAll, take, takeUntil, takeWhile, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-learn-rxjs',
  standalone: true,
  imports: [],
  template: `
    <p>
      learn-rxjs works!
    </p>
  `,
  styles: ``
})
export class LearnRxjsComponent implements OnDestroy {

  url = 'https://api.debugger.pl/items';

  constructor(/* private http:HttpClient */) {
    //this.observableAndObserver();
    // this.observabeExamples();
    // this.subjectExamples();
    //this.customObservable();
    //this.unsubscribeWays();
    //this.errorHandle();
    //this.filteringOperators();
    //this.transformationOperators();
    //this.combinationOperators();
    //this.hotvscold();
    // this.multicastOperators();
    //this.customOperators();
     this.higherOrder()
  }
  higherOrder() {
    /* from('hello world')
    .pipe(
      map((val)=>of(val).pipe(delay(1000))),
      //mergeAll()
      concatAll()//------
    )
    .subscribe(this.myObserver) */


    const urls = [
      'https://api.debugger.pl/utils/big-deal/10000',
      'https://api.debugger.pl/utils/big-deal/1000000',
      'https://api.debugger.pl/utils/big-deal/1'
    ];

    from(urls)
      .pipe(
        map(url => ajax(url)),
        //concatAll(),
         mergeAll(),
        //switchAll()
      )
      .subscribe(({ response }) => console.log(response))
  }
  customOperators() {
    of(1000)
      .pipe(
        this.multiply(6)
      )
      .subscribe(this.myObserver)
  }
  multiply(num: number) {
    return (src: Observable<any>) => {
      return new Observable((sub: Subscriber<any>) => {
        src.subscribe({
          next(val) {
            sub.next(val * num);
            sub.complete();
          }
        })
      })
    }
  }
  hotvscold() {
    const x$ = ajax(this.url).pipe()
    x$.subscribe(this.myObserver)
    x$.subscribe(this.myObserver)
    x$.subscribe(this.myObserver)
  }
  combinationOperators() {
    merge(
      fromEvent(document.body, 'mousemove'),
      fromEvent(document.body, 'dblclick')
    ).subscribe(({ type }) => {
      //console.log(type);
    })
    combineLatest([
      fromEvent(document.body, 'mousemove'),
      fromEvent(document.body, 'dblclick')
    ]).subscribe(this.myObserver)
  }
  transformationOperators() {
    const ev1$ = fromEvent(document.body, 'mousemove')
    const ev2$ = fromEvent(document.body, 'dblclick')

    ev1$.pipe(
      //scan((acc, val: MouseEvent) => ({ ...acc, x: val.pageX, count: ++acc.count }), { count: 0 })
      takeUntil(fromEvent(document.body, 'dblclick')),
      reduce((acc, val: MouseEvent) => ({ ...acc, x: val.pageX, count: ++acc.count }), { count: 0 }),
    ).subscribe(this.myObserver)
  }
  filteringOperators() {
    interval(1000)
      .pipe(
        filter((val) => val % 2 === 0),
        take(1),

      )
      .subscribe(this.myObserver)
  }
  errorHandle() {
    ajax('https://xyz.xx').pipe(
      /* catchError((err)=>{
        return throwError('xxx')
      }) */
    )
  }
  ngOnDestroy(): void {

  }
  unsubscribeWays() {
    const int$ = interval(1000)
    const sub$ = int$.pipe(
      //take(2)
      //takeUntil(fromEvent(document.body, 'click')),
      takeWhile((val) => val < 3)
    ).subscribe(this.myObserver)
    //sub$.unsubscribe(
  }
  subjectExamples() {
    const su: Subject<number> = new Subject();
    su.next(1)
    su.next(2)
    su.next(3)
    su.subscribe(this.myObserver)

    const bs: BehaviorSubject<number> = new BehaviorSubject(100);
    bs.subscribe(this.myObserver)
    bs.next(200);

    console.log('xyz', bs.getValue());
  }
  observabeExamples() {
    from([1, 2, 3]).subscribe(this.myObserver)
    from(fetch(this.url)).subscribe(this.myObserver)

    interval(1000).subscribe(this.myObserver)

    ajax(this.url).subscribe(this.myObserver)

    const ev$ = fromEvent(document.body, 'mousemove')
    ev$.subscribe(this.myObserver)
  }
  observableAndObserver() {
    of(123, 456, 789).subscribe(this.myObserver);
  }

  get myObserver(): Observer<any> {
    return {
      next(val) {
        console.log(val);
      },
      error(err) {
        console.warn(err);
      },
      complete() {
        console.log('finito');
      }
    }
  }

}
