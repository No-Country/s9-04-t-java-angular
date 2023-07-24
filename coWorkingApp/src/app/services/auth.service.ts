import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';
import { Credentials } from '../interfaces/credentials.interface';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: any;

  constructor(){}

  async login(credentials: Credentials) {
    const { email, password} = credentials;
    let { data, error } = await supabase.auth.signInWithPassword({
      email, password
    })

    if (error) {
      console.log('error de inicio de sesión',error)
    } else {
      this.session = data.session
      console.log(this.session)
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

      localStorage.setItem('sb-yhhcifsgfjyrxhnitiwq-auth-token', this.session?.acc);
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
    }
  }

  isLoggedIn(): boolean {
    const authToken = JSON.parse(localStorage.getItem('sb-yhhcifsgfjyrxhnitiwq-auth-token'));
    const accessToken = authToken.access_token;
    console.log(accessToken)
    return !!localStorage.getItem('[sb-yhhcifsgfjyrxhnitiwq-auth-token].access_token');
  }

  // Get User
  async getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    this.session = user;
    console.log('getUser()',this.session)
  }

  // Password Recovery
  // let { data, error } = await supabase.auth.resetPasswordForEmail(email)

  // Update User
  // const { data, error } = await supabase.auth.updateUser({
  //   email: "new@email.com",
  //   password: "new-password",
  //   data: { hello: 'world' }
  // })
}
