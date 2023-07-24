import { EventEmitter, Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  createTokenEvent: EventEmitter<void> = new EventEmitter<void>();
  private tokenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token$ = this.tokenSubject.asObservable();
 
  constructor() {}

  getTokenValue(): boolean {
    return this.tokenSubject.getValue();
  }

  setTokenValue(value: boolean): void {
    this.tokenSubject.next(value);
  }

}
