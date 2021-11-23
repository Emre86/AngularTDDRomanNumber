import { TestBed } from '@angular/core/testing';
import { ConverterService } from './converter.service';
import { take } from 'rxjs/operators';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

const mockDigit1 = { "digit": 1 }
const mockDigit2 = { "digit": 2 }
const mockDigit3 = { "digit": 3 }
const mockDigit30 = { "digit": 30 }
const mockDigit300 = { "digit": 300 }
const mockDigit5 = { "digit": 5 }
const mockDigit50 = { "digit": 50 }
const mockDigit500 = { "digit": 500 }
const mockDigit55 = { "digit": 55 }
const mockDigit550 = { "digit": 550 }
const mockDigit555 = { "digit": 555 }
const mockDigit6 = { "digit": 6 }
const mockDigit8 = { "digit": 8 }
const mockDigit11 = { "digit": 11 }
const mockDigit13 = { "digit": 13 }
const mockDigit60 = { "digit": 60 }
const mockDigit65 = { "digit": 65 }
const mockDigit4 = { "digit": 4 }
const mockDigit9 = { "digit": 9 }
const mockDigit40 = { "digit": 40 }
const mockDigit90 = { "digit": 90 }
const mockDigit159 = { "digit": 159 }
const mockDigit1000 = { "digit": 1000 }
const mockDigit1238 = { "digit": 1238 }
const mockDigit3999 = { "digit": 3999 }

function expectConverted(service: ConverterService, controller: HttpTestingController, romanNumber: string, converted: number, mock: any) {
  service.sendNumber(romanNumber);
  const req = controller.expectOne(`${environment.baseUrl}/converter/${romanNumber}`);
  req.flush(mock);
  service.receiveNumber().pipe(take(1)).subscribe((reponse) => {
    expect(reponse).toEqual(converted);
  });
}

describe('ConverterService', () => {
  let httpMock: HttpTestingController;
  let service: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConverterService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ConverterService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send number', () => {
    spyOn(service, 'sendNumber');
    service.sendNumber("I");
    expect(service.sendNumber).toHaveBeenCalled();
  });

  it('should be 1 for I', () => {
    expectConverted(service, httpMock, "I", 1, mockDigit1);
  });

  it('should be 2 for II', () => {
    expectConverted(service, httpMock, "II", 2, mockDigit2);
  });

  it('should be 3 for III', () => {
    expectConverted(service, httpMock, "III", 3, mockDigit3);
  });

  it('should be 30 for XXX', () => {
    expectConverted(service, httpMock, "XXX", 30, mockDigit30);
  });

  it('should be 300 for CCC', () => {
    expectConverted(service, httpMock, "CCC", 300, mockDigit300);
  });

  it('should be 5 for V', () => {
    expectConverted(service, httpMock, "V", 5, mockDigit5);
  });

  it('should be 50 for L', () => {
    expectConverted(service, httpMock, "L", 50, mockDigit50);
  });

  it('should be 500 for D', () => {
    expectConverted(service, httpMock, "D", 500, mockDigit500);
  });

  it('should be 55 for LV', () => {
    expectConverted(service, httpMock, "LV", 55, mockDigit55);
  });

  it('should be 550 for DL', () => {
    expectConverted(service, httpMock, "DL", 550, mockDigit550);
  });

  it('should be 555 for DLV', () => {
    expectConverted(service, httpMock, "DLV", 555, mockDigit555);
  });

  it('should be 6 for VI', () => {
    expectConverted(service, httpMock, "VI", 6, mockDigit6);
  });

  it('should be 8 for VIII', () => {
    expectConverted(service, httpMock, "VIII", 8, mockDigit8);
  });

  it('should be 11 for XI', () => {
    expectConverted(service, httpMock, "XI", 11, mockDigit11);
  });

  it('should be 13 for XIII', () => {
    expectConverted(service, httpMock, "XIII", 13, mockDigit13);
  });

  it('should be 60 for LX', () => {
    expectConverted(service, httpMock, "LX", 60, mockDigit60);
  });

  it('should be 65 for LXV', () => {
    expectConverted(service, httpMock, "LXV", 65, mockDigit65);
  });

  it('should be 4 for IV', () => {
    expectConverted(service, httpMock, "IV", 4, mockDigit4);
  });

  it('should be 9 for IX', () => {
    expectConverted(service, httpMock, "IX", 9, mockDigit9);
  });

  it('should be 40 for XL', () => {
    expectConverted(service, httpMock, "XL", 40, mockDigit40);
  });

  it('should be 90 for XC', () => {
    expectConverted(service, httpMock, "XC", 90, mockDigit90);
  });

  it('should be 159 for CLIX', () => {
    expectConverted(service, httpMock, "CLIX", 159, mockDigit159);
  });

  it('should be 1000 for M', () => {
    expectConverted(service, httpMock, "M", 1000, mockDigit1000);
  });

  it('should be 1238 for MCCXXXVIII', () => {
    expectConverted(service, httpMock, "MCCXXXVIII", 1238, mockDigit1238);
  });

  it('should be 3999 for MMMCMXCIX', () => {
    expectConverted(service, httpMock, "MMMCMXCIX", 3999, mockDigit3999);
  });
});
