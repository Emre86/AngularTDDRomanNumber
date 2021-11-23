import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConverterHttpService } from './converter-http.service';
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

function expectConverterReponse(service: ConverterHttpService, httpMock: HttpTestingController, romanNumber: string, mock: any) {
  service.getArabicDigit(romanNumber).subscribe((reponse) => {
    expect(reponse).not.toBe(null);
    expect(JSON.stringify(reponse)).toEqual(JSON.stringify(mock));
  });
  const req = httpMock.expectOne(`${environment.baseUrl}/converter/${romanNumber}`);
  req.flush(mock);
}

describe('ConverterHttpService', () => {
  let httpMock: HttpTestingController;
  let service: ConverterHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConverterHttpService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ConverterHttpService);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mockDigit1 for I', () => {
    expectConverterReponse(service, httpMock, "I", mockDigit1);
  });

  it('should return mockDigit2 for II', () => {
    expectConverterReponse(service, httpMock, "II", mockDigit2);
  });

  it('should return mockDigit3 for III', () => {
    expectConverterReponse(service, httpMock, "III", mockDigit3);
  });

  it('should return mockDigit30 for XXX', () => {
    expectConverterReponse(service, httpMock, "XXX", mockDigit30);
  });

  it('should return mockDigit300 for CCC', () => {
    expectConverterReponse(service, httpMock, "CCC", mockDigit300);
  });

  it('should return mockDigit5 for V', () => {
    expectConverterReponse(service, httpMock, "V", mockDigit5);
  });

  it('should be 50 for L', () => {
    expectConverterReponse(service, httpMock, "L", mockDigit50);
  });

  it('should be 500 for D', () => {
    expectConverterReponse(service, httpMock, "D", mockDigit500);
  });

  it('should be 55 for LV', () => {
    expectConverterReponse(service, httpMock, "LV", mockDigit55);
  });

  it('should be 550 for DL', () => {
    expectConverterReponse(service, httpMock, "DL", mockDigit550);
  });

  it('should be 555 for DLV', () => {
    expectConverterReponse(service, httpMock, "DLV", mockDigit555);
  });

  it('should be 6 for VI', () => {
    expectConverterReponse(service, httpMock, "VI", mockDigit6);
  });

  it('should be 8 for VIII', () => {
    expectConverterReponse(service, httpMock, "VIII", mockDigit8);
  });

  it('should be 11 for XI', () => {
    expectConverterReponse(service, httpMock, "XI", mockDigit11);
  });

  it('should be 13 for XIII', () => {
    expectConverterReponse(service, httpMock, "XIII", mockDigit13);
  });

  it('should be 60 for LX', () => {
    expectConverterReponse(service, httpMock, "LX", mockDigit60);
  });

  it('should be 65 for LXV', () => {
    expectConverterReponse(service, httpMock, "LXV", mockDigit65);
  });

  it('should be 4 for IV', () => {
    expectConverterReponse(service, httpMock, "IV", mockDigit4);
  });

  it('should be 9 for IX', () => {
    expectConverterReponse(service, httpMock, "IX", mockDigit9);
  });

  it('should be 40 for XL', () => {
    expectConverterReponse(service, httpMock, "XL", mockDigit40);
  });

  it('should be 90 for XC', () => {
    expectConverterReponse(service, httpMock, "XC", mockDigit90);
  });

  it('should be 159 for CLIX', async () => {
    expectConverterReponse(service, httpMock, "CLIX", mockDigit159);
  });

  it('should be 1000 for M', () => {
    expectConverterReponse(service, httpMock, "M", mockDigit1000);
  });

  it('should be 1238 for MCCXXXVIII', () => {
    expectConverterReponse(service, httpMock, "MCCXXXVIII", mockDigit1238);
  });

  it('should be 3999 for MMMCMXCIX', () => {
    expectConverterReponse(service, httpMock, "MMMCMXCIX", mockDigit3999);
  });

});
