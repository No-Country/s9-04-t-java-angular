import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faArrowLeft, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  apiUrl = environment.API_URL;

  faArrowLeft = faArrowLeft;

  faEnvelope = faEnvelope;

  faEye = faEye

  form: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    const body = this.form.getRawValue();
    console.log('formLogin',body)
    return this.http.post<any>(`${this.apiUrl}/auth/login`, body)
    .pipe(first())
      .subscribe({
        next: (res) => {
          const username = res.username;
          console.log(username)
          Swal.fire({
            title: `¡Hola! ${username}`,
            text: `Iniciaste sesión correctamente!`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            // this.loading = true;
            this.router.navigate(['/home']);
          });
        },
        error: (error) => {
          console.log('Error en el inicio de sesión:', error);
          Swal.fire({
            title: 'Error',
            text: 'Username o contraseña inválida',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        },
      });
  }

}
