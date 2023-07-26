import { Component,ViewChild } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services-anuncio/services-anuncio/post.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  faLeft = faArrowLeft;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private post: PostService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: [, Validators.required],
    });
  }

  submitForm() {
    console.log('Form Submitted with value: ', this.userForm.value);
    this.post.addData(this.userForm.value)
  }
}

