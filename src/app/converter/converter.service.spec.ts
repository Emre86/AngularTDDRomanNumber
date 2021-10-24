import { TestBed } from '@angular/core/testing';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send number', () => {
    spyOn(service, 'sendNumber');
    service.sendNumber("I");
    expect(service.sendNumber).toHaveBeenCalled();
  });

  it('should receive number 0', () => {
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(0)
    }).unsubscribe();
  });

  it('should be 1 for I', () => {
    service.sendNumber("I");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(1)
    }).unsubscribe();
  });

  it('should be 2 for II', () => {
    service.sendNumber("II");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(2)
    }).unsubscribe();
  });

  it('should be 3 for III', () => {
    service.sendNumber("III");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(3)
    }).unsubscribe();
  });

  it('should be 30 for XXX', () => {
    service.sendNumber("XXX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(30)
    }).unsubscribe();
  });

  it('should be 300 for CCC', () => {
    service.sendNumber("CCC");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(300)
    }).unsubscribe();
  });

  it('should be 5 for V', () => {
    service.sendNumber("V");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(5)
    }).unsubscribe();
  });

  it('should be 50 for L', () => {
    service.sendNumber("L");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(50)
    }).unsubscribe();
  });

  it('should be 500 for D', () => {
    service.sendNumber("D");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(500)
    }).unsubscribe();
  });

  it('should be 55 for LV', () => {
    service.sendNumber("LV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(55)
    }).unsubscribe();
  });

  it('should be 550 for DL', () => {
    service.sendNumber("DL");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(550)
    }).unsubscribe();
  });

  it('should be 555 for DLV', () => {
    service.sendNumber("DLV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(555)
    }).unsubscribe();
  });

  it('should be 6 for VI', () => {
    service.sendNumber("VI");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(6)
    }).unsubscribe();
  });

  it('should be 8 for VIII', () => {
    service.sendNumber("VIII");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(8)
    }).unsubscribe();
  });

  it('should be 11 for XI', () => {
    service.sendNumber("XI");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(11)
    }).unsubscribe();
  });

  it('should be 13 for XIII', () => {
    service.sendNumber("XIII");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(13)
    }).unsubscribe();
  });

  it('should be 60 for LX', () => {
    service.sendNumber("LX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(60)
    }).unsubscribe();
  });

  it('should be 65 for LXV', () => {
    service.sendNumber("LXV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(65)
    }).unsubscribe();
  });

  it('should be 4 for IV', () => {
    service.sendNumber("IV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(4)
    }).unsubscribe();
  });

  it('should be 9 for IX', () => {
    service.sendNumber("IX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(9)
    }).unsubscribe();
  });

  it('should be 40 for XL', () => {
    service.sendNumber("XL");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(40)
    }).unsubscribe();
  });

  it('should be 90 for XC', () => {
    service.sendNumber("XC");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(90)
    }).unsubscribe();
  });

  it('should be 159 for CLIX', () => {
    service.sendNumber("CLIX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(159)
    }).unsubscribe();
  });

  it('should be 1000 for M', () => {
    service.sendNumber("M");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(1000)
    }).unsubscribe();
  });

  it('should be 4000 for MMMM', () => {
    service.sendNumber("MMMM");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(4000)
    }).unsubscribe();
  });

  it('should be 1238 for MCCXXXVIII', () => {
    service.sendNumber("MCCXXXVIII");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual(1238)
    }).unsubscribe();
  });
});
