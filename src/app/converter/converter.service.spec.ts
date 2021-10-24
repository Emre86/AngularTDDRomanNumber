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
      expect(convertedNumber).toEqual("")
    }).unsubscribe();
  });

  it('should be I for I', () => {
    service.sendNumber("I");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("I")
    }).unsubscribe();
  });

  it('should be II for II', () => {
    service.sendNumber("II");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("II")
    }).unsubscribe();
  });

  it('should be III for III', () => {
    service.sendNumber("III");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("III")
    }).unsubscribe();
  });

  it('should be XXX for XXX', () => {
    service.sendNumber("XXX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("XXX")
    }).unsubscribe();
  });

  it('should be CCC for CCC', () => {
    service.sendNumber("CCC");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("CCC")
    }).unsubscribe();
  });

  it('should be V for V', () => {
    service.sendNumber("V");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("V")
    }).unsubscribe();
  });

  it('should be L for L', () => {
    service.sendNumber("L");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("L")
    }).unsubscribe();
  });

  it('should be D for D', () => {
    service.sendNumber("D");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("D")
    }).unsubscribe();
  });

  it('should be LV for LV', () => {
    service.sendNumber("LV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("LV")
    }).unsubscribe();
  });

  it('should be DL for DL', () => {
    service.sendNumber("DL");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("DL")
    }).unsubscribe();
  });

  it('should be DLV for DLV', () => {
    service.sendNumber("DLV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("DLV")
    }).unsubscribe();
  });

  it('should be VI for VI', () => {
    service.sendNumber("VI");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("VI")
    }).unsubscribe();
  });

  it('should be VIII for VIII', () => {
    service.sendNumber("VIII");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("VIII")
    }).unsubscribe();
  });

  it('should be XI for XI', () => {
    service.sendNumber("XI");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("XI")
    }).unsubscribe();
  });

  it('should be XIII for XIII', () => {
    service.sendNumber("XIII");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("XIII")
    }).unsubscribe();
  });

  it('should be LX for LX', () => {
    service.sendNumber("LX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("LX")
    }).unsubscribe();
  });

  it('should be LXV for LXV', () => {
    service.sendNumber("LXV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("LXV")
    }).unsubscribe();
  });

  it('should be IV for IV', () => {
    service.sendNumber("IV");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("IV")
    }).unsubscribe();
  });

  it('should be IX for IX', () => {
    service.sendNumber("IX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("IX")
    }).unsubscribe();
  });

  it('should be XL for XL', () => {
    service.sendNumber("XL");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("XL")
    }).unsubscribe();
  });

  it('should be XC for XC', () => {
    service.sendNumber("XC");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("XC")
    }).unsubscribe();
  });

  it('should be CLIX for CLIX', () => {
    service.sendNumber("CLIX");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("CLIX")
    }).unsubscribe();
  });

  it('should be M for M', () => {
    service.sendNumber("M");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("M")
    }).unsubscribe();
  });

  it('should be MMMM for MMMM', () => {
    service.sendNumber("MMMM");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("MMMM")
    }).unsubscribe();
  });

  it('should be MCCXXXVIII for MCCXXXVIII', () => {
    service.sendNumber("MCCXXXVIII");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("MCCXXXVIII")
    }).unsubscribe();
  });
});
