import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArabicNumberComponent } from './arabic-number.component';

describe('ArabicNumberComponent', () => {
  let component: ArabicNumberComponent;
  let fixture: ComponentFixture<ArabicNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArabicNumberComponent],
      imports: [HttpClientTestingModule]
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

});
