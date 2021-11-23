import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConverterService } from '../converter/converter.service';

@Component({
  selector: 'app-arabic-number',
  templateUrl: './arabic-number.component.html',
  styleUrls: ['./arabic-number.component.css']
})
export class ArabicNumberComponent implements OnInit {

  arabicNumber: Observable<number>
  constructor(private converter: ConverterService) {
    this.arabicNumber = this.converter.receiveNumber()
  }

  ngOnInit(): void {
  }

}
