import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalData } from '../interfaces/personal-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  apiUrl = "https://eopvbi88r5ylyo5.m.pipedream.nt";
  constructor(private http:HttpClient) {}

  onPersonalData(perData:PersonalData): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`, perData)
  }
}
