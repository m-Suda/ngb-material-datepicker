import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthDateAreaComponent } from './year-month-date-area.component';

describe('YearMonthDateAreaComponent', () => {
  let component: YearMonthDateAreaComponent;
  let fixture: ComponentFixture<YearMonthDateAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearMonthDateAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMonthDateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
