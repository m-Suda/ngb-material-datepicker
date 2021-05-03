import { TestBed } from '@angular/core/testing';

import { NgbMaterialDatepickerService } from './ngb-material-datepicker.service';

describe('NgbMaterialDatepickerService', () => {
  let service: NgbMaterialDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbMaterialDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
