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

  it('should emit a value on roman Number V', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("V");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number L', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("L");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number D', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("D");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should not emit a value on roman Number VV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("VV");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it('should not emit a value on roman Number LL', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LL");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it('should not emit a value on roman Number DD', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("DD");
    component.sendRoman();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it('should emit a value on roman Number LV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LV");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number DL', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("DL");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number DLV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("DLV");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number VI', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("VI");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number VIII', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("VIII");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number XI', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XI");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number XIII', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XIII");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number LX', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LX");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number LXV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LXV");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number IV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("IV");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number IX', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("IX");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number XL', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XL");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number XC', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XC");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number CLIX', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("CLIX");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number M', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("M");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number MMMM', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("MMMM");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

  it('should emit a value on roman Number MCCXXXVIII', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("MCCXXXVIII");
    component.sendRoman();
    expect(component.eventRoman.emit).toHaveBeenCalled();
  });

});
