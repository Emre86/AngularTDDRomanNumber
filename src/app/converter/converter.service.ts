import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private numberToConvert$: BehaviorSubject<string>;


  constructor() {
    this.numberToConvert$ = new BehaviorSubject("");
  }

  sendNumber(value: string) {
    this.numberToConvert$.next(value);
  }

  receiveNumber(): Observable<string> {
    return this.numberToConvert$.asObservable();
  }

}
