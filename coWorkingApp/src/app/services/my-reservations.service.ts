import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyReservationsService {
  apiUrl = environment.supabaseUrl;
  apiKey = environment.supabaseKey

constructor(private http: HttpClient) { }

  // getAllReservations(): Observable<any> {
  //   const headers = {
  //     'apikey': this.apiKey,
  //   };
  //   return this.http.get<any[]>(`${this.apiUrl}/rest/v1/reservation?select=*'`, { headers });
  // }

   getUserIdFromLocalStorage(): string | null {
    const authToken = localStorage.getItem('sb-yhhcifsgfjyrxhnitiwq-auth-token');
    if (authToken) {
      const parsedAuthToken = JSON.parse(authToken);
     
      if (parsedAuthToken && parsedAuthToken.user) {
        return parsedAuthToken.user.id;
      }
    }
    return null;
  }

  getAllReservations(): Observable<any> {
    const userId = this.getUserIdFromLocalStorage();
    if (!userId) {
      throw new Error('No se pudo obtener el user_id desde localStorage.');
    }

    const headers = {
      'apikey': this.apiKey,
    };
    return this.http.get<any[]>(`${this.apiUrl}/rest/v1/reservation?select=*user_id.eq.${userId}`, { headers });
  }

}
