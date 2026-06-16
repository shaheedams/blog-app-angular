import { Component, inject, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, of, timer, tap, Subject } from 'rxjs';
import { PostService } from '../../services/post.service';
import { RxjsService } from '../../services/rxjs-service';

@Component({
  selector: 'app-rxjs-text',
  imports: [],
  templateUrl: './rxjs-text.html',
  styleUrl: './rxjs-text.css',
})
export class RxjsText implements OnInit {
  apiService = inject(PostService);
  rxjService = inject(RxjsService);
  // Create Obser
  myObs$ = new Observable<string>((value) => value.next('It works'));

  // Types of creations
  numArr$ = of([2, 5, 32, 6, 7, 87, 8]);

  numArr1$ = from([2, 5, 32, 6, 7, 87, 8]);

  // Timmer and interval

  // Runs after 3s
  timer$ = timer(3000);

  // runs every 2s
  interval$ = interval(2000);

  mysub$ = new Subject();

  constructor() {
    this.myObs$.subscribe({
      next(value) {
        console.log(value);
      },
    });

    this.numArr$
      .pipe(
        tap((s) => {
          console.log(s);
        }),
        map((e) => e.filter((s) => s % 2 !== 0)),
        tap((s) => {
          console.log(s);
        })
      )
      .subscribe({
        next(value) {
          console.log('Of : ' + value);
        },
      });

    this.numArr1$.pipe(filter((e) => e % 2 == 0)).subscribe({
      next(value) {
        console.log('from :' + value);
      },
    });

    this.timer$.subscribe({
      next(value) {
        console.log('Timer Runs after 3s:' + value);
      },
    });

    // this.interval$.subscribe({
    //   next(value) {
    //     console.log('Interval runs every 2s:' + value);
    //   },
    // });

    this.apiService
      .getAllPost()
      .pipe(map((posts) => posts.filter((post) => post.userId === 1)))
      .subscribe({
        next(value) {
          console.log(value);
        },
      });

    this.apiService
      .getById(2)
      .pipe(
        map((e) => {
          return { title: e.title, body: e.body };
        })
      )
      .subscribe({
        next(value) {
          console.log(value);
        },
      });

    setTimeout(() => {
      this.mysub$.next('Hi sub');
    }, 3000);
  }

  ngOnInit() {
    this.mysub$.subscribe((vale) => console.log('SUB: ' + vale));
    this.rxjService.rxjsSub$.subscribe((val) => console.log('Val form sub next' + val));

    this.rxjService.rxjsBSub$.subscribe((val) => console.log('Val form sub BBB' + val));
  }

  getVal(event: any) {
    console.log(event.target.value);
    this.rxjService.rxjsSub$.next(event.target.value);
  }
}
