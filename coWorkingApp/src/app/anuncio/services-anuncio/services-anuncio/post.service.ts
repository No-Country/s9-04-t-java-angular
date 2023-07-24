import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://woco-production.up.railway.app/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Method to perform a POST request to the API
  postToApi(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const options = { headers: headers };

    return this.http.post<any>(`${this.apiUrl}/api/coworking`, data, options);
    // Replace 'endpoint' with the actual API endpoint you want to send the data to.
  }
}
