import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myRomanNumber';
  romanToArabic = [""];

  receiptRoman(event: Array<string>) {
    this.romanToArabic = event;
  }

}
