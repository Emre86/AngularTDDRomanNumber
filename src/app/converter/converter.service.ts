import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private numberToConvert$: BehaviorSubject<number>;

  private romanMap: Map<string, number>;

  private regex: RegExp;

  constructor() {
    this.numberToConvert$ = new BehaviorSubject(0);
    this.regex = new RegExp('^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
    this.romanMap = new Map();
    this.romanMap.set("", 0)
    this.romanMap.set("I", 1);
    this.romanMap.set("II", 2);
    this.romanMap.set("III", 3);
    this.romanMap.set("IV", 4);
    this.romanMap.set("V", 5);
    this.romanMap.set("VI", 6);
    this.romanMap.set("VII", 7);
    this.romanMap.set("VIII", 8);
    this.romanMap.set("IX", 9);
    this.romanMap.set("X", 10);
    this.romanMap.set("XX", 20);
    this.romanMap.set("XXX", 30);
    this.romanMap.set("XL", 40);
    this.romanMap.set("L", 50);
    this.romanMap.set("LX", 60);
    this.romanMap.set("LXX", 70);
    this.romanMap.set("LXXX", 80);
    this.romanMap.set("XC", 90);
    this.romanMap.set("C", 100);
    this.romanMap.set("CC", 200);
    this.romanMap.set("CCC", 300);
    this.romanMap.set("CD", 400);
    this.romanMap.set("D", 500);
    this.romanMap.set("DC", 600);
    this.romanMap.set("DCC", 700);
    this.romanMap.set("DCCC", 800);
    this.romanMap.set("CM", 900);
    this.romanMap.set("M", 1000);
    this.romanMap.set("MM", 2000);
    this.romanMap.set("MMM", 3000);
    this.romanMap.set("MMMM", 4000);
  }

  private convertNumbertoArray(digits: string): Array<string> | null {
    let romanDigits = digits.match(this.regex);
    romanDigits?.shift();
    return romanDigits;
  }

  private convertToArabic(romanDigits: Array<string>): number {
    let result = 0;
    for (let rDigit of romanDigits) {
      result += this.romanMap.get(rDigit)!;
    }
    return result;
  }

  public sendNumber(digits: string) {
    let romanDigits = this.convertNumbertoArray(digits);
    if (romanDigits) {
      let arabicDigit = this.convertToArabic(romanDigits)
      this.numberToConvert$.next(arabicDigit);
    }

  }

  public receiveNumber(): Observable<number> {
    return this.numberToConvert$.asObservable();
  }

}
