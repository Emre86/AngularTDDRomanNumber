import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RomanNumberComponent } from './roman-number.component';

describe('RomanNumberComponent', () => {
  let component: RomanNumberComponent;
  let fixture: ComponentFixture<RomanNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomanNumberComponent],
      imports: [ReactiveFormsModule]
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

  it('should emit value on roman Number', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("I");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should not emit value on not roman Number', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("K");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });


});
