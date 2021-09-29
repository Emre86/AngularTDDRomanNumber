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

  it('should emit a value on roman Number I', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("I");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(1);
  });

  it("should emit a value on the repetitions of III", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("III");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(3);
  });

  it("should emit a value on the repetitions of XXX", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XXX");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(30);
  });

  it("should emit a value on the repetitions of CCC", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("CCC");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(300);
  });

  it("should not emit a value on the repetitions of IIII", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("IIII");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it("should not emit a value on the repetitions of XXXX", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XXXX");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it("should not emit a value on the repetitions of CCCC", () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("CCCC");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it('should emit a value on roman Number V', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("V");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(5);
  });

  it('should emit a value on roman Number L', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("L");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(50);
  });

  it('should emit a value on roman Number D', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("D");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(500);
  });

  it('should not emit a value on roman Number VV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("VV");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it('should not emit a value on roman Number LL', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LL");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it('should not emit a value on roman Number DD', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("DD");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).not.toHaveBeenCalled();
  });

  it('should emit a value on roman Number LV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LV");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(55);
  });

  it('should emit a value on roman Number DL', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("DL");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(550);
  });

  it('should emit a value on roman Number DLV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("DLV");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(555);
  });

  it('should emit a value on roman Number VI', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("VI");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(6);
  });

  it('should emit a value on roman Number VIII', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("VIII");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(8);
  });

  it('should emit a value on roman Number XI', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XI");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(11);
  });

  it('should emit a value on roman Number XIII', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XIII");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(13);
  });

  it('should emit a value on roman Number LX', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LX");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(60);
  });

  it('should emit a value on roman Number LXV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("LXV");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(65);
  });

  it('should emit a value on roman Number IV', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("IV");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(4);
  });

  it('should emit a value on roman Number IX', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("IX");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(9);
  });

  it('should emit a value on roman Number XL', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XL");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(40);
  });

  it('should emit a value on roman Number XC', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("XC");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(90);
  });

  it('should emit a value on roman Number CLIX', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("CLIX");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(159);
  });

  it('should emit a value on roman Number M', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("M");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(1000);
  });

  it('should emit a value on roman Number MMMM', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("MMMM");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(4000);
  });

  it('should emit a value on roman Number MCCXXXVIII', () => {
    spyOn(component.eventRoman, 'emit');
    component.formGroupRoman.get("roman")?.setValue("MCCXXXVIII");
    component.sendArabicNumber();
    expect(component.eventRoman.emit).toHaveBeenCalledWith(1238);
  });

});
