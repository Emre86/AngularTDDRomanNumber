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

  it('should receive number', () => {
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("")
    }).unsubscribe();
  });

  it('should send number I And receive I', () => {
    service.sendNumber("I");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("I")
    }).unsubscribe();
  });

  it('should send number I And receive I', () => {
    service.sendNumber("II");
    service.receiveNumber().subscribe((convertedNumber) => {
      expect(convertedNumber).toEqual("II")
    }).unsubscribe();
  });



});
