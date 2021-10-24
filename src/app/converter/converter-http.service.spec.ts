import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConverterHttpService } from './converter-http.service';

describe('ConverterHttpService', () => {
  let service: ConverterHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ConverterHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
