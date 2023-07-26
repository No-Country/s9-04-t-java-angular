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

  getAllReservations(): Observable<any> {
    const headers = {
      'apikey': this.apiKey,
    };
    return this.http.get<any[]>(`${this.apiUrl}/rest/v1/reservation?select=*'`, { headers });
  }



}
