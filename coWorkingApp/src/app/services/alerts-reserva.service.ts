import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsReservaService {

  constructor() { }
  
  private showAlertSubject = new Subject<{ duration: number; alert: string }>();
  showAlert$ = this.showAlertSubject.asObservable();

  show(duration: number, alert: string) {
    this.showAlertSubject.next({ duration, alert });
  }
}
