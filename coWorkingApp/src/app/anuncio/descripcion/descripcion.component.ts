import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services-anuncio/services-anuncio/post.service';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
faLeft=faArrowLeft;
userDescription:FormGroup;

constructor(
  private fb: FormBuilder,
  private post: PostService) {}

ngOnInit() {
  this.userDescription = this.fb.group({
    description: [, Validators.required],
  });
}

submitForm() {
  console.log('Form Submitted with value: ', this.userDescription.value);
  this.post.addData(this.userDescription.value)
}
}
