import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicNumberComponent } from './arabic-number.component';

describe('ArabicNumberComponent', () => {
  let component: ArabicNumberComponent;
  let fixture: ComponentFixture<ArabicNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArabicNumberComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 1 for I', async () => {
    component.romanNumbers = ["I"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(1);

  });

  it('should be 3 for III', async () => {
    component.romanNumbers = ["III"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(3);
  });

  it('should be 30 for XXX', async () => {
    component.romanNumbers = ["XXX"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(30);
  });

  it('should be 300 for CCC', async () => {
    component.romanNumbers = ["CCC"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(300);
  });

  it('should be 5 for V', async () => {
    component.romanNumbers = ["V"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(5);
  });

  it('should be 50 for L', async () => {
    component.romanNumbers = ["L"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(50);
  });

  it('should be 500 for D', async () => {
    component.romanNumbers = ["D"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(500);
  });

  it('should be 55 for LV', async () => {
    component.romanNumbers = ["L", "V"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(55);
  });

  it('should be 550 for DL', async () => {
    component.romanNumbers = ["D", "L"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(550);
  });

  it('should be 555 for DLV', async () => {
    component.romanNumbers = ["D", "L", "V"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(555);
  });

  it('should be 6 for VI', async () => {
    component.romanNumbers = ["VI"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(6);
  });

  it('should be 8 for VIII', async () => {
    component.romanNumbers = ["VIII"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(8);
  });

  it('should be 11 for XI', async () => {
    component.romanNumbers = ["X", "I"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(11);
  });

  it('should be 13 for XIII', async () => {
    component.romanNumbers = ["X", "III"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(13);
  });

  it('should be 60 for LX', async () => {
    component.romanNumbers = ["L", "X"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(60);
  });

  it('should be 65 for LXV', async () => {
    component.romanNumbers = ["L", "X", "V"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(65);
  });

  it('should be 4 for IV', async () => {
    component.romanNumbers = ["IV"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(4);
  });

  it('should be 9 for IV', async () => {
    component.romanNumbers = ["IX"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(9);
  });

  it('should be 40 for XL', async () => {
    component.romanNumbers = ["XL"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(40);
  });

  it('should be 90 for XC', async () => {
    component.romanNumbers = ["XC"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(90);
  });

  it('should be 159 for CLIX', async () => {
    component.romanNumbers = ["C", "L", "IX"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(159);
  });

  it('should be 1000 for M', async () => {
    component.romanNumbers = ["M"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(1000);
  });

  it('should be 4000 for MMMM', async () => {
    component.romanNumbers = ["MMMM"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(4000);
  });

  it('should be 1238 for MCCXXXVIII', async () => {
    component.romanNumbers = ["M", "CC", "XXX", "VIII"];
    component.ngOnChanges();
    expect(component.arabicNumber).toEqual(1238);
  });

});
