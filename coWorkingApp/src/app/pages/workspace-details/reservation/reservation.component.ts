import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ViewportScroller, Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCalendarCheck, faCircleCheck, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faChevronDown, faCreditCard, faEye, faEyeLowVision, faPhone, faToggleOff, faToggleOn, faUser } from '@fortawesome/free-solid-svg-icons';
import { AlertsReservationComponent } from 'src/app/components/alerts-reservation/alerts-reservation.component';
import { ModalPersonsComponent } from 'src/app/components/modal-persons/modal-persons.component';
import { ScheduleModalComponent } from 'src/app/components/schedule-modal/schedule-modal.component';
import { ScheduleData } from 'src/app/interfaces/scheduleData';
import { AlertsReservaService } from 'src/app/services/alerts-reserva.service';
import { CoworkService } from 'src/app/services/cowork.service';
import { PaymentServiceService } from 'src/app/services/paymentService.service';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  host: {'class': 'w-full'}
  
})
export class ReservationComponent implements OnInit {

  @ViewChild(ModalPersonsComponent) modalComponent!: ModalPersonsComponent;
  @ViewChild(ScheduleModalComponent) modalSchedule!: ScheduleModalComponent;
  faArrowLeft =  faArrowLeft;
  faCircleCheck = faCircleCheck ;
  faPhone = faPhone;
  faUser = faUser;
  faChevronDown =  faChevronDown;
  faEye = faEye;
  faCalendarCheck = faCalendarCheck;
  faEyeLowVision = faEyeLowVision;
  faToggleOn = faToggleOn;
  faToggleOff = faToggleOff;
  faEnvelope = faEnvelope;//email
  faCreditCard = faCreditCard;

  tipoContrasena: string = 'password';
  showPassword: boolean = false;
  CheckSaveCard: boolean = false;
  detailsOpen: boolean = false;

  //Form
  formErrors: boolean = false;
  formSubmitted = false;
  personalData: FormGroup;
  focusedField: string | null = null;

  dateReservation: string = '';
  numberPersons = 1 ;
 
  scheduleData: ScheduleData ={ 
    date: '',
    price: 0,
  } ;
  workspace: any = {};
 
  ngOnInit(): void {
      this.perDataService.getNumberPersons().subscribe((numberPersons: number) => {
      this.numberPersons = numberPersons;
    });
    this.perDataService.getscheduleData().subscribe((scheduleData: ScheduleData)=> {
      this.scheduleData = scheduleData
    });
    this.coworkService.getWorkspaceById().subscribe((workspace) => {
      if (workspace) {
        this.workspace = workspace;
      }
    });
    this.perDataService.detailsOpen$.subscribe((detailsOpen) => {
      this.detailsOpen = detailsOpen;
    });
    this.perDataService.formSubmit$.subscribe(() => {
      this.onLoginFormSubmit();
    });
  }


  constructor(
    private formBuilder: FormBuilder,
    private viewportScroller: ViewportScroller,
    private perDataService: PersonalDataService,
    private alertsService: AlertsReservaService,
    private coworkService: CoworkService,
    private paymentService: PaymentServiceService,
    private router: Router,
    private _location: Location
  ){
    this.personalData = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      name:['',[Validators.required, Validators.minLength(3)]],
      last_name:['',[Validators.required, Validators.minLength(3)]],
      // ownerName:['',[Validators.required]],
      // cardNumber:['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      // cvcCvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      // expirationCard:['',[Validators.required]],
      save_card: false,
      receive_notifications: false,
      number_persons: this.numberPersons,
      price: this.workspace.price + 100,
      schedule_data: this.scheduleData.date,
      workspace_id: this.workspace.id,
      workspace_name: this.workspace.name,
    });
    console.log(this.saveCard,'card')
  }

  get email() {
    return this.personalData.get('email');
  }
  
  get name() {
    return this.personalData.get('name');
  }
  
  get last_name() {
    return this.personalData.get('last_name');
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
    return this.personalData.get('receive_notifications');
  }

  get expirationCard() {
    return this.personalData.get('expirationCard');
  }
  
  get saveCard() {
    return this.personalData.get('save_card');
  }


  openModalPerson(): void {
    this.modalComponent.openModalPersons();
  }
 
  openModalSchedule(): void {
    this.modalSchedule.openModalSchedule();
  }

 

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.tipoContrasena = this.showPassword ? 'number' : 'password';
  }

  toggleCheck() {
    this.CheckSaveCard = !this.CheckSaveCard;
    console.log(this.CheckSaveCard)
  }


  openFormDetails() {
    this.detailsOpen = !this.detailsOpen;
    this.perDataService.setDetailsOpen(this.detailsOpen);
  }

  back(){
    this._location.back();
  }

  onLoginFormSubmit() {
    if (this.personalData.valid){
      this.paymentService.createTokenEvent.emit();
    this.paymentService.token$.subscribe((tokenReturned: boolean) => {
      if (tokenReturned) {
        // Token was returned successfully
        this.proceedWithFormSubmission();
      } else {
        // Token was not returned
        console.log('Token was not returned.');
      }
    });
  }
  }

  proceedWithFormSubmission(){
    this.personalData.get('save_card')?.setValue(this.CheckSaveCard);
    this.personalData.patchValue({ number_persons: this.numberPersons });
    this.personalData.patchValue({ price: this.workspace.price + 100 });
    this.personalData.patchValue({ schedule_data: this.scheduleData.date});
    this.personalData.patchValue({ workspace_id: this.workspace.id});
    this.personalData.patchValue({ workspace_name: this.workspace.title});
    this.perDataService.onPersonalData(this.personalData.value)
    .subscribe({
      next: (data: any) => {
        console.log(data);
        this.alertsService.show(4000, 'confirmation');
        this.paymentService.setTokenValue(false)
        this.router.navigate(['/home'])
        
      },
      error: (error) => {
        console.log(error);
        this.alertsService.show(4000, 'error');
        
      }
    });
  }

}
