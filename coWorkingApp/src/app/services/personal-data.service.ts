import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalDataReserva } from '../interfaces/personal-data-reserva';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ScheduleData } from '../interfaces/scheduleData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  
    private numberPersonsSubject: Subject<number> = new Subject<number>();
    private scheduleData: Subject<ScheduleData> = new Subject<ScheduleData>()

    private detailsOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    detailsOpen$ = this.detailsOpenSubject.asObservable();
    
    private formSubmitSubject: BehaviorSubject<void> = new BehaviorSubject<void>(null);
    formSubmit$ = this.formSubmitSubject.asObservable();

    apiUrl = environment.supabaseUrl;
    apiKey = environment.supabaseKey

    constructor(private http: HttpClient) {}

    
    onPersonalData(perData: PersonalDataReserva): Observable<any> {
      const headers = {
        'apikey': this.apiKey 
      };
      return this.http.post<any>(`${this.apiUrl}/rest/v1/reservation?select=created_at`, perData, { headers });
    }
    

    setFormSubmit() {
      this.formSubmitSubject.next();
    }

    setDetailsOpen(value: boolean) {
      this.detailsOpenSubject.next(value);
    }
  
    getDetailsOpenValue(): Observable<boolean> {
      return this.detailsOpenSubject.asObservable();
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
