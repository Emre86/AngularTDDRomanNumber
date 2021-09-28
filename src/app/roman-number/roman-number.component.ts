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

  private romanNumbers: Array<string>;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupRoman = this.formBuilder.group({
      roman: []
    });
    this.romanNumbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  }

  ngOnInit(): void {
  }

  sendRoman() {
    if (this.formGroupRoman.get("roman")!.value) {
      let input = this.formGroupRoman.get('roman')?.value as String
      let arrayInput = input.split("");
      const isRoman = (currentNumber: string) => this.romanNumbers.includes(currentNumber)
      let arrayIsroman = arrayInput.every(isRoman);
      if (arrayIsroman) {
        this.eventRoman.emit(input);
      }
    }
  }

}
