import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbMaterialDatepickerComponent } from './ngb-material-datepicker.component';

describe('NgbMaterialDatepickerComponent', () => {
  let component: NgbMaterialDatepickerComponent;
  let fixture: ComponentFixture<NgbMaterialDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbMaterialDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbMaterialDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
