import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConverterHttpService } from '../converter/converter-http.service';
import { ConverterService } from '../converter/converter.service';

import { RomanNumberComponent } from './roman-number.component';

describe('RomanNumberComponent', () => {
  let component: RomanNumberComponent;
  let fixture: ComponentFixture<RomanNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomanNumberComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

