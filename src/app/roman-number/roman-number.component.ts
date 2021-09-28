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

  constructor(private formBuilder: FormBuilder) {
    this.formGroupRoman = this.formBuilder.group({
      roman: []
    });
  }

  ngOnInit(): void {
  }

  sendRoman() {
    this.eventRoman.emit(this.formGroupRoman.get("roman")!.value)
  }

}
