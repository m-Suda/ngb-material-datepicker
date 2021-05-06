import { TestBed } from '@angular/core/testing';

import { DateState } from './date-state';

describe('DateStateService', () => {
    let service: DateState;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DateState);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
