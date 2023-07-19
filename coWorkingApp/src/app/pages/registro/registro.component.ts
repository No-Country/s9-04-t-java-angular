import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  faArrowLeft = faArrowLeft;

  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(128)]],
      lastName: ['', [Validators.required, Validators.maxLength(128)]],
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

  register() {
    const register = this.form.getRawValue();
    this.authService.register(register)
    .subscribe({
      next: (res) => {
        const firstName = res.firstName;
        console.log(firstName)
        Swal.fire({
          title: `¡Hola! ${firstName}`,
          text: `Registro exitoso!`,
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          this.router.navigate(['/home']);
        });
      },
      error: (error) => {
        console.log('Error en el registro de cuenta:', error);
        Swal.fire({
          title: 'Error',
          text: 'Falló el registro',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      },
    });
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

  NumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;
      if (value && !/^\d+$/.test(value)) {
        return { onlyNumbers: true };
      }
      return null;
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

  caracterEspecialValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const patron = /[@#$%^&+=!]/;
      const valid = patron.test(control.value);
      return valid ? null : { caracterEspecial: true };
    };
  }

  invalidEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const valid = patron.test(control.value);
      return valid ? null : { invalidEmail: true };
    };
  }
}
