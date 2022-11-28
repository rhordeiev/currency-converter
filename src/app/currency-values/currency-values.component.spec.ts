import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyValuesComponent } from './currency-values.component';

describe('CurrencyValuesComponent', () => {
  let component: CurrencyValuesComponent;
  let fixture: ComponentFixture<CurrencyValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
