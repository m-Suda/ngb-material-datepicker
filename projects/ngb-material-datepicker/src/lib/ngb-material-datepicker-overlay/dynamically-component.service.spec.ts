import { TestBed } from '@angular/core/testing';

import { DynamicallyComponentService } from './dynamically-component.service';

describe('DynamicallyComponentService', () => {
  let service: DynamicallyComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicallyComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
