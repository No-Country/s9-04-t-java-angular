import { Component, OnInit } from '@angular/core';
import { AlertsReservaService } from 'src/app/services/alerts-reserva.service';

@Component({
  selector: 'app-alerts-reservation',
  templateUrl: './alerts-reservation.component.html',
  styleUrls: ['./alerts-reservation.component.css']
})
export class AlertsReservationComponent implements OnInit{

  showAlertError = false;
  showAlertConfirmation = false;

  constructor(private alertsService: AlertsReservaService) {}

  ngOnInit() {
    this.alertsService.showAlert$.subscribe(({ duration, alert }) => {
      this.showAlertsDuration(duration, alert);
    });
  }

  hideAlerts() {
    this.showAlertError = false;
    this.showAlertConfirmation = false;
  }

  showAlertsDuration(duration: number, alert: string) {
    if (alert === 'error') {
      this.showAlertError = true;
    } else if (alert === 'confirmation') {
      this.showAlertConfirmation = true;
    }
    setTimeout(() => {
      this.hideAlerts();
    }, duration);
  }

}
