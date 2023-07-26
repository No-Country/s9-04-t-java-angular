import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private coworkingData: any[] = [];
  private apiUrl = 'https://example.com/api'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  addData(data: any) {
    this.coworkingData.push(data);
  }

  getTotalDataAsJSON(): string {
    const totalData = {
      collectedData: this.coworkingData
    };
    return JSON.stringify(totalData);
  }

  sendDataToApi() {
    const coworking = this.getTotalDataAsJSON();

    // Assuming your API expects JSON data in the request body
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>(this.apiUrl, coworking, { headers });
  }

}

