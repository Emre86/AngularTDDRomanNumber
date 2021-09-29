import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-arabic-number',
  templateUrl: './arabic-number.component.html',
  styleUrls: ['./arabic-number.component.css']
})
export class ArabicNumberComponent implements OnInit {

  @Input() arabic = 0


  constructor() {

  }

  ngOnInit(): void {
  }



}
