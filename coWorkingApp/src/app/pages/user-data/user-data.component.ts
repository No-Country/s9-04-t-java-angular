import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faArrowLeft, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faChevronDown = faChevronDown;
  faUser = faUser;
  faEnvelope = faEnvelope;

  formBuilder = inject(FormBuilder);
  actualUserData = {
    name: 'Solaire',
    lastName: 'of Astora',
    email: 'praiseTheSun@mail.com'
  }
  newUserDataForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.newUserDataForm = this.formBuilder.group({
      name: this.actualUserData.name,
      lastName: this.actualUserData.lastName,
      email: this.actualUserData.email,
    });
  }

  submitNewData() {
    console.log(this.newUserDataForm.getRawValue());
  }

}
