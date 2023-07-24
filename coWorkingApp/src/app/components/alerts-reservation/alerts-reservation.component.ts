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
  
  isAlertVisible(alertType: string): boolean {
    switch (alertType) {
      case 'confirmation':
        return this.showAlertConfirmation;
      case 'error':
        return this.showAlertError;
      default:
        return false;
    }
  }

  hideAlerts(alertType: string) {
    switch (alertType) {
      case 'confirmation':
        this.showAlertConfirmation = false;
        break;
      case 'error':
        this.showAlertError = false;
        break;
      default:
        break;
    }
  }

  topPosition: number = 0;
  showAlert(type: string, duration: number) {
   switch (type) {
     case 'confirmation':
       this.showAlertConfirmation = true;
       break;
     case 'error':
       this.showAlertError = true;
       break;
     default:
       break;
   }

     this.showAlertsDuration(duration, type);
 }

 showAlertsDuration(duration: number, alert: string) {
  if (alert === 'error') {
    this.showAlertError = true;
  } else if (alert === 'confirmation') {
    this.showAlertConfirmation = true;
  } 

  setTimeout(() => {
    this.hideAlerts(alert); 
  }, duration);
}



}
