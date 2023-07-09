import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsReservationComponent } from './alerts-reservation.component';

describe('AlertsReservationComponent', () => {
  let component: AlertsReservationComponent;
  let fixture: ComponentFixture<AlertsReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
