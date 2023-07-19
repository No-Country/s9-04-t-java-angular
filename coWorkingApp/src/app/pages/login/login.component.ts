import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faArrowLeft = faArrowLeft;

  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
    ) {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.email,
        Validators.required,
        this.NoDoubleAtValidator(),
        this.invalidEmailValidator()
      ]],
      password: ['', [
        Validators.minLength(8),
        Validators.maxLength(128),
        Validators.required,
        this.caracterEspecialValidator(),
        this.letraMinusculaValidator(),
        this.letraMayusculaValidator(),
        this.numeroValidator()
      ]]
    });
  }

  login() {
    const credentials = this.form.getRawValue();
    this.authService.login(credentials)
    .pipe(first())
      .subscribe({
        next: (res) => {
          this.tokenService.saveToken(res.token)
          const email = this.form.get('email').value;
          Swal.fire({
            title: `¡Hola! ${email}`,
            text: `Iniciaste sesión correctamente!`,
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            this.router.navigate(['/workspace/reservation']);
          });
        },
        error: (error) => {
          console.log('Error en el inicio de sesión:', error);
          Swal.fire({
            title: 'Error',
            text: 'Email o contraseña inválida',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        },
      })
  }

  NoDoubleAtValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;
      if (value && value.includes('@@')) {
        return { noDoubleAt: true };
      }
      return null;
    };
  }

  invalidEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const valid = patron.test(control.value);
      return valid ? null : { invalidEmail: true };
    };
  }

  caracterEspecialValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const patron = /[@#$%^&+=!]/;
      const valid = patron.test(control.value);
      return valid ? null : { caracterEspecial: true };
    };
  }

  letraMinusculaValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const patron = /[a-z]/;
      const valid = patron.test(control.value);
      return valid ? null : { letraMinuscula: true };
    };
  }

  letraMayusculaValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const patron = /[A-Z]/;
      const valid = patron.test(control.value);
      return valid ? null : { letraMayuscula: true };
    };
  }

  numeroValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const patron = /\d/;
      const valid = patron.test(control.value);
      return valid ? null : { numero: true };
    };
  }
}
