import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConverterService } from '../converter/converter.service';


@Component({
  selector: 'app-roman-number',
  templateUrl: './roman-number.component.html',
  styleUrls: ['./roman-number.component.css']
})
export class RomanNumberComponent implements OnInit {

  public formGroupRoman: FormGroup;

  constructor(private formBuilder: FormBuilder, private converter: ConverterService) {
    this.formGroupRoman = this.formBuilder.group({
      roman: []
    });
  }

  ngOnInit(): void {
  }

  sendRomanNumber() {
    if (this.formGroupRoman.get("roman")!.value) {
      let digits = this.formGroupRoman.get('roman')?.value as string
      this.converter.sendNumber(digits)
    }
  }

}
