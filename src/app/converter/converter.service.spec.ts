import { TestBed } from '@angular/core/testing';
import { ConverterService } from './converter.service';
import { take } from 'rxjs/operators';

async function getConverted(service: ConverterService, convertNumber: string) {
  service.sendNumber(convertNumber);
  return await service.receiveNumber().pipe(take(1)).toPromise();
}

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

  it('should be 1 for I', async () => {
    service.sendNumber("I");
    expect(await getConverted(service, "I")).toBe(1);
  });

  it('should be 2 for II', async () => {
    service.sendNumber("II");
    expect(await getConverted(service, "II")).toBe(2);
  });

  it('should be 3 for III', async () => {
    service.sendNumber("III");
    expect(await getConverted(service, "III")).toBe(3);
  });

  it('should be 30 for XXX', async () => {
    service.sendNumber("XXX");
    expect(await getConverted(service, "XXX")).toBe(30);

  });

  it('should be 300 for CCC', async () => {
    service.sendNumber("CCC");
    expect(await getConverted(service, "CCC")).toBe(300);
  });

  it('should be 5 for V', async () => {
    service.sendNumber("V");
    expect(await getConverted(service, "V")).toBe(5);
  });

  it('should be 50 for L', async () => {
    service.sendNumber("L");
    expect(await getConverted(service, "L")).toBe(50);
  });

  it('should be 500 for D', async () => {
    service.sendNumber("D");
    expect(await getConverted(service, "D")).toBe(500);
  });

  it('should be 55 for LV', async () => {
    service.sendNumber("LV");
    expect(await getConverted(service, "LV")).toBe(55);
  });

  it('should be 550 for DL', async () => {
    service.sendNumber("DL");
    expect(await getConverted(service, "DL")).toBe(550);
  });

  it('should be 555 for DLV', async () => {
    service.sendNumber("DLV");
    expect(await getConverted(service, "DLV")).toBe(555);
  });

  it('should be 6 for VI', async () => {
    service.sendNumber("VI");
    expect(await getConverted(service, "VI")).toBe(6);
  });

  it('should be 8 for VIII', async () => {
    service.sendNumber("VIII");
    expect(await getConverted(service, "VIII")).toBe(8);
  });

  it('should be 11 for XI', async () => {
    service.sendNumber("XI");
    expect(await getConverted(service, "XI")).toBe(11);
  });

  it('should be 13 for XIII', async () => {
    service.sendNumber("XIII");
    expect(await getConverted(service, "XIII")).toBe(13);
  });

  it('should be 60 for LX', async () => {
    service.sendNumber("LX");
    expect(await getConverted(service, "LX")).toBe(60);
  });

  it('should be 65 for LXV', async () => {
    service.sendNumber("LXV");
    expect(await getConverted(service, "LXV")).toBe(65);
  });

  it('should be 4 for IV', async () => {
    service.sendNumber("IV");
    expect(await getConverted(service, "IV")).toBe(4);
  });

  it('should be 9 for IX', async () => {
    service.sendNumber("IX");
    expect(await getConverted(service, "IX")).toBe(9);
  });

  it('should be 40 for XL', async () => {
    service.sendNumber("XL");
    expect(await getConverted(service, "XL")).toBe(40);
  });

  it('should be 90 for XC', async () => {
    service.sendNumber("XC");
    expect(await getConverted(service, "XC")).toBe(90);
  });

  it('should be 159 for CLIX', async () => {
    service.sendNumber("CLIX");
    expect(await getConverted(service, "CLIX")).toBe(159);
  });

  it('should be 1000 for M', async () => {
    service.sendNumber("M");
    expect(await getConverted(service, "M")).toBe(1000);
  });

  it('should be 1238 for MCCXXXVIII', async () => {
    service.sendNumber("MCCXXXVIII");
    expect(await getConverted(service, "MCCXXXVIII")).toBe(1238);
  });

  it('should be 3999 for MMMCMXCIX', async () => {
    service.sendNumber("MMMCMXCIX");
    expect(await getConverted(service, "MMMCMXCIX")).toBe(3999);
  });
});
