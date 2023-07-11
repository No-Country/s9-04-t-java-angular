import { TestBed } from '@angular/core/testing';

import { AlertsReservaService } from './alerts-reserva.service';

describe('AlertsReservaService', () => {
  let service: AlertsReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
