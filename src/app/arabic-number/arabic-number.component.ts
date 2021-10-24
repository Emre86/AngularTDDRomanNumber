import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConverterHttpService } from '../converter/converter-http.service';
import { ConverterService } from '../converter/converter.service';

@Component({
  selector: 'app-arabic-number',
  templateUrl: './arabic-number.component.html',
  styleUrls: ['./arabic-number.component.css']
})
export class ArabicNumberComponent implements OnInit {

  arabicDigit = 0;

  subscription: Subscription;
  constructor(private converter: ConverterService, private converterHttp: ConverterHttpService) {
    this.subscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.subscription = this.converter.receiveNumber().subscribe((digit) => {
      this.converterHttp.getArabicDigit(digit).subscribe((reponse) => {
        this.arabicDigit = reponse.digit
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
