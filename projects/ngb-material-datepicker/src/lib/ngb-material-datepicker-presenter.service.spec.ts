import { TestBed } from '@angular/core/testing';

import { NgbMaterialDatepickerPresenterService } from './ngb-material-datepicker-presenter.service';

describe('NgbMaterialDatepickerPresenterService', () => {
  let service: NgbMaterialDatepickerPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbMaterialDatepickerPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
