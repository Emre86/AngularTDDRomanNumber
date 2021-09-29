import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-roman-number',
  templateUrl: './roman-number.component.html',
  styleUrls: ['./roman-number.component.css']
})
export class RomanNumberComponent implements OnInit {

  @Output() eventRoman = new EventEmitter()

  public formGroupRoman: FormGroup;

  private romanMap: Map<string, number>;
  constructor(private formBuilder: FormBuilder) {
    this.formGroupRoman = this.formBuilder.group({
      roman: []
    });
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
    this.romanMap.set("X", 1);
    this.romanMap.set("XX", 2);
    this.romanMap.set("XXX", 3);
    this.romanMap.set("XL", 4);
    this.romanMap.set("L", 5);
    this.romanMap.set("LX", 6);
    this.romanMap.set("LXX", 7);
    this.romanMap.set("LXXX", 8);
    this.romanMap.set("XC", 9);
    this.romanMap.set("C", 1);
    this.romanMap.set("CC", 2);
    this.romanMap.set("CCC", 3);
    this.romanMap.set("CD", 4);
    this.romanMap.set("D", 5);
    this.romanMap.set("DC", 6);
    this.romanMap.set("DCC", 7);
    this.romanMap.set("DCCC", 8);
    this.romanMap.set("CM", 9);
    this.romanMap.set("M", 1);
    this.romanMap.set("MM", 2);
    this.romanMap.set("MMM", 3);
    this.romanMap.set("MMMM", 4);
  }

  ngOnInit(): void {
  }

  convertToArabic(romanNumbers: Array<string>): string {
    let result = ""
    romanNumbers.shift();

    for (let entry of romanNumbers) {
      result += this.romanMap.get(entry);
    }

    return result.replace(/^[0]{1,3}/, "");
  }

  sendArabicNumber() {
    if (this.formGroupRoman.get("roman")!.value) {
      let input = this.formGroupRoman.get('roman')?.value as String
      const regex = new RegExp('^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
      let romanNumbers = input.match(regex);
      if (romanNumbers) {
        let arabicNumber = this.convertToArabic(romanNumbers)
        this.eventRoman.emit(arabicNumber);
      }
    }
  }

}
