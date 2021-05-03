import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbMaterialDatepickerOverlayComponent } from './ngb-material-datepicker-overlay.component';

describe('NgbMaterialDatepickerContainerComponent', () => {
  let component: NgbMaterialDatepickerOverlayComponent;
  let fixture: ComponentFixture<NgbMaterialDatepickerOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbMaterialDatepickerOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbMaterialDatepickerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
