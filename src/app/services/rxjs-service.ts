import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  rxjsSub$ = new Subject<string>();
  rxjsBSub$ = new BehaviorSubject<string>('Initial');

  constructor() {
    this.rxjsSub$.next('Hi from sub serv');
  }
}
