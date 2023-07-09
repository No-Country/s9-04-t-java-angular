import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ViewportScroller } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCalendarCheck, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faEye, faEyeLowVision, faPhone, faToggleOff, faToggleOn, faUser } from '@fortawesome/free-solid-svg-icons';
import { ModalPersonsComponent } from 'src/app/components/modal-persons/modal-persons.component';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  @ViewChild(ModalPersonsComponent) modalComponent!: ModalPersonsComponent;

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
  CheckSaveCard: boolean = false;
  detailsOpen: boolean = false;

  //Alerts
  showAlertError = false;
  showAlertConfirmation = false;
  alert : string = "";


  //Form
  formErrors: boolean = false;
  formSubmitted = false;
  personalData: FormGroup;


  dateReservation: string = '';
  totalPeople: number = 0;
  totalPrice: number = 0;
  

  constructor(
    private formBuilder: FormBuilder,
    private viewportScroller: ViewportScroller,
    private perDataService: PersonalDataService
  ){
    this.personalData = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      name:['',[Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required, Validators.minLength(3)]],
      ownerName:['',[Validators.required]],
      cardNumber:['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      cvcCvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      expirationCard:['',[Validators.required]],
      saveCard: false,
      receiveNotifications: false,
    });
    console.log(this.saveCard,'card')
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
  
  get receiveNotificationsControl() {
    return this.personalData.get('receiveNotifications');
  }

  get expirationCard() {
    return this.personalData.get('expirationCard');
  }
  
  get saveCard() {
    return this.personalData.get('saveCard');
  }

  openModal(): void {
    this.modalComponent.openModalPersons();
  }
 

  hideAlerts() {
    if(this.showAlertError){
      this.showAlertError = false;
    } else {
      this.showAlertConfirmation = false;
    }
   
  }
  

  showAlertsDuration(duration: number, alert: string) {
    if(alert === "error"){
    this.showAlertError = true;
    } else if(alert === "confirmation") {
      this.showAlertConfirmation = true;
    }
    setTimeout(() => {
      this.hideAlerts();
    }, duration);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.tipoContrasena = this.showPassword ? 'number' : 'password';
  }

  toggleCheck() {
    this.CheckSaveCard = !this.CheckSaveCard;
    console.log(this.CheckSaveCard)
  }


  openFormDetails(){
    this.detailsOpen = !this.detailsOpen;
    this.viewportScroller.scrollToAnchor('end');
  }


  onLoginFormSubmit(){
    this.formSubmitted = true;
    if (this.personalData.invalid){
      this.formErrors = true;
      return;
    }
    this.personalData.get('saveCard')?.setValue(this.CheckSaveCard);
    this.perDataService.onPersonalData(this.personalData.value)
    .subscribe({
      next: (data: any) => {
        console.log(data);
        this.showAlertsDuration(3000, "confirmation");
        },
      error: (error) => {
        console.log(error);
        this.showAlertsDuration(3000, "error");
      }
    });
  }





}
