import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private numberToConvert$: BehaviorSubject<string>;

  private regex: RegExp;

  constructor() {
    this.numberToConvert$ = new BehaviorSubject("");
    this.regex = new RegExp('^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
  }

  private isRomanNumber(digits: string): Array<string> | null {
    return digits.match(this.regex);

  }

  public sendNumber(digits: string) {
    let isRoman = this.isRomanNumber(digits);
    if (isRoman) {
      this.numberToConvert$.next(digits);
    }
  }

  public receiveNumber(): Observable<string> {
    return this.numberToConvert$.asObservable();
  }

}
