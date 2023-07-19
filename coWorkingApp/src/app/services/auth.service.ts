import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Credentials } from '../interfaces/credentials.interface';
import { Register } from '../interfaces/register.interface';
import { TokenService } from './token.service';
import { Token } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(credentials: Credentials) {
    return this.http.post<Token>(`${this.apiUrl}/auth/api/login`, credentials)
  }

  register(register: Register) {
    return this.http.post<Register>(`${this.apiUrl}/auth/api/register`, register)
  }

  logout() {
    this.tokenService.clearToken()
  }
}
