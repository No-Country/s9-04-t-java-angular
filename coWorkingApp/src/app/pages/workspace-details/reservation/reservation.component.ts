import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCalendarCheck, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faEye, faEyeLowVision, faPhone, faToggleOff, faToggleOn, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  

  faCircleCheck = faCircleCheck ;
  faPhone = faPhone;
  faUser = faUser;
  faChevronDown =  faChevronDown;
  faEye = faEye;
  faCalendarCheck = faCalendarCheck;
  faEyeLowVision = faEyeLowVision;
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;

  personalData: FormGroup;
  tipoContrasena: string = 'password';
  showPassword: boolean = false;
  Check: boolean = false;
  detailsOpen: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private viewportScroller: ViewportScroller
  ){
    this.personalData = this.formBuilder.group({

    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.tipoContrasena = this.showPassword ? 'text' : 'password';
  }

  toggleCheck() {
    this.Check = !this.Check;
  }


  openFormDetails(){
    this.detailsOpen = !this.detailsOpen;
    this.viewportScroller.scrollToAnchor('end');
  }

  onSubmit(){}

  onLoginFormSubmit(){}





}
