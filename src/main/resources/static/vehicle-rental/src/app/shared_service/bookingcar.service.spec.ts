import { TestBed } from '@angular/core/testing';

import { BookingcarService } from './bookingcar.service';

describe('BookingcarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingcarService = TestBed.get(BookingcarService);
    expect(service).toBeTruthy();
  });
});
