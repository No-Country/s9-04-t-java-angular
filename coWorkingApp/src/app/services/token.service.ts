import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private router: Router
  ) { }

  // saveToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  // getToken(): string {
  //   return localStorage.getItem('token');
  // }

  // clearToken() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }
}
