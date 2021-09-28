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
    if (this.formGroupRoman.get("roman")!.value) {
      let input = this.formGroupRoman.get('roman')?.value as String
      const regex = new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
      if (input.match(regex)) {
        this.eventRoman.emit(input);
      }
    }
  }

}
