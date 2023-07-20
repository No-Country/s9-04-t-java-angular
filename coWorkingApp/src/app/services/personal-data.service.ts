import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalDataReserva } from '../interfaces/personal-data-reserva';
import { Observable, Subject } from 'rxjs';
import { ScheduleData } from '../interfaces/scheduleData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  
    private numberPersonsSubject: Subject<number> = new Subject<number>();
    private scheduleData: Subject<ScheduleData> = new Subject<ScheduleData>()

    apiUrl = "https://eopvbi88r5ylyo5.m.pipedream.net";

    constructor(private http: HttpClient) {}

    onPersonalData(perData: PersonalDataReserva): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}`, perData);
    }

    saveNumberPersons(numberPersons: number) {
      this.numberPersonsSubject.next(numberPersons);
    }

    getNumberPersons(): Observable<number> {
      return this.numberPersonsSubject.asObservable();
    }

    savescheduleData(ScheduleData: ScheduleData) {
      this.scheduleData.next(ScheduleData);
    }

    getscheduleData(): Observable<ScheduleData> {
      return this.scheduleData.asObservable();
    }
}
