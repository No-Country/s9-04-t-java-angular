import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';
import { Credentials } from '../interfaces/credentials.interface';
import { BehaviorSubject } from 'rxjs';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: any;
  userData: any;
  emailData: any;

  userObservable: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(){}

  async login(credentials: Credentials) {
    const { email, password} = credentials;
    let { data, error } = await supabase.auth.signInWithPassword({
      email, password
    })

    if (error) {
      console.log('error de inicio de sesión',error)
    } else {
      this.session = data.session;
      this.getUser()
      console.log(this.session);
    }
  }

  async register(credentials: Credentials) {
    const { email, password} = credentials;
    let { data, error } = await supabase.auth.signUp({
      email, password
    })

    if (error) {
      console.log('error en el registro',error)
    } else {
      this.session = data.session
      localStorage.setItem('email', this.session?.user?.email ?? '');
      localStorage.setItem('token', this.session?.accessToken ?? '');
    }
  }

  async logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // Ha ocurrido un error al cerrar sesión
    } else {
      // La sesión se ha cerrado correctamente
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      this.userObservable.next(undefined);
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Password Recovery
  // let { data, error } = await supabase.auth.resetPasswordForEmail(email)

  // Update User
  // const { data, error } = await supabase.auth.updateUser({
  //   email: "new@email.com",
  //   password: "new-password",
  //   data: { hello: 'world' }
  // })

  // Get User
  async getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    this.session = user;
    this.userObservable.next(user);
    console.log('getUser()',this.session)
  }

  async getUserId() {
    const { data: { user } } = await supabase.auth.getUser()
    this.userData = user.identities[0].user_id;
    return this.userData;
  }

  async getEmail() {
    const { data: { user } } = await supabase.auth.getUser()
    this.userData = user.email;
  }

  getUserObservable() {
    return this.userObservable.asObservable();
  }

}
