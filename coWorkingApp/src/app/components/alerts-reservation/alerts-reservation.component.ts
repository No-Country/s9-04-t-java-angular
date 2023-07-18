import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { AlertsReservaService } from 'src/app/services/alerts-reserva.service';

@Component({
  selector: 'app-alerts-reservation',
  templateUrl: './alerts-reservation.component.html',
  styleUrls: ['./alerts-reservation.component.css']
})
export class AlertsReservationComponent implements OnInit{
  faCheckCircle = faCheckCircle;
  faCircleExclamation = faCircleExclamation;
  showAlertError = false;
  showAlertConfirmation = false;
  showAlertConfirmationPago = false;
  showAlertErrorPago = false;
  constructor(private alertsService: AlertsReservaService) {}

  ngOnInit() {
    this.alertsService.showAlert$.subscribe(({ duration, alert }) => {
      this.showAlertsDuration(duration, alert);
    });
  }

  hideAlerts() {
    this.showAlertError = false;
    this.showAlertConfirmation = false;
    this.showAlertConfirmationPago = false;
    this.showAlertErrorPago = false;
    }

  showAlertsDuration(duration: number, alert: string) {
    if (alert === 'error') {
      this.showAlertError = true;
    } else if (alert === 'confirmation') {
      this.showAlertConfirmation = true;
    }
    if (alert === 'confirmationPago'){
      this.showAlertConfirmationPago = true;
    }else if (alert === 'errorPago'){
      this.showAlertErrorPago = true;
    } 
    setTimeout(() => {
      this.hideAlerts();
    }, duration);
  }

}
