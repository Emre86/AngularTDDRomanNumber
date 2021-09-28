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

  it('should emit a value on roman Number', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("I");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should not emit a value on not roman Number', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("K");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it("should emit a value on the repetitions of III", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("III");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it("should emit a value on the repetitions of XXX", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XXX");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it("should emit a value on the repetitions of CCC", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("CCC");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it("should not emit a value on the repetitions of IIII", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("IIII");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it("should not emit a value on the repetitions of XXXX", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XXXX");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it("should not emit a value on the repetitions of CCCC", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("CCCC");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });
});
