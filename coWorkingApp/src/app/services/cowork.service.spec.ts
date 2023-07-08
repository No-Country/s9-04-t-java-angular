import { TestBed } from '@angular/core/testing';

import { CoworkService } from './cowork.service';

describe('CoworkService', () => {
  let service: CoworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
