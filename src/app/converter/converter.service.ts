import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConverterHttpService } from './converter-http.service';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private numberToConvert$: BehaviorSubject<number>;

  private regex: RegExp;

  constructor(private converterHttp: ConverterHttpService) {
    this.numberToConvert$ = new BehaviorSubject(0);
    this.regex = new RegExp('^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
  }

  private isRomanNumber(digits: string): Array<string> | null {
    return digits.match(this.regex);

  }

  public sendNumber(digits: string) {
    let isRoman = this.isRomanNumber(digits);
    if (isRoman) {
      this.converterHttp.getArabicDigit(digits).subscribe((reponse) => {
        this.numberToConvert$.next(reponse.digit);
      });
    }
  }

  public receiveNumber(): Observable<number> {
    return this.numberToConvert$.asObservable();
  }

}
