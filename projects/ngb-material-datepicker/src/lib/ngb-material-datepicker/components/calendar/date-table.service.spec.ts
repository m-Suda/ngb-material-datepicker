import { TestBed } from '@angular/core/testing';

import { DateTableService } from './date-table.service';

describe('DateTableService', () => {
  let service: DateTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
