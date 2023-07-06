import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  tipoContrasena: string = 'password';
  showPassword: boolean = false;
  Check: boolean = false;
  detailsOpen: boolean = false;

  //Form
  personalData: FormGroup;
  saveCard: boolean = false;
  receiveNotifications: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private viewportScroller: ViewportScroller
  ){
    this.personalData = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      name:['',[Validators.required]],
      lastName:['',[Validators.required]],
      ownerName:['',[Validators.required]],
      cardNumber:['',[Validators.required], Validators.minLength(16)],
      cvcCvv:['',[Validators.required], Validators.minLength(3)],
      expiration:['',[Validators.required]],
      saveCard: this.saveCard,
      receiveNotifications: this.receiveNotifications
    });
  }

  get email() {
    return this.personalData.get('email');
  }
  
  get name() {
    return this.personalData.get('name');
  }
  
  get lastName() {
    return this.personalData.get('lastName');
  }
  
  get ownerName() {
    return this.personalData.get('ownerName');
  }
  
  get cardNumber() {
    return this.personalData.get('cardNumber');
  }
  
  get cvcCvv() {
    return this.personalData.get('cvcCvv');
  }
  
  get expiration() {
    return this.personalData.get('expiration');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.tipoContrasena = this.showPassword ? 'text' : 'password';
  }

  toggleCheck() {
    this.Check = !this.Check;
    this.saveCard = !this.saveCard;
  }


  openFormDetails(){
    this.detailsOpen = !this.detailsOpen;
    this.viewportScroller.scrollToAnchor('end');
  }


  onLoginFormSubmit(){
    if (this.personalData.invalid){
      return
    }
  }





}
