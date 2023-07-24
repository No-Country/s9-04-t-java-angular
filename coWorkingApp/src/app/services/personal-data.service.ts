import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalDataReserva } from '../interfaces/personal-data-reserva';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ScheduleData } from '../interfaces/scheduleData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  
    private numberPersonsSubject: Subject<number> = new Subject<number>();
    private scheduleData: Subject<ScheduleData> = new Subject<ScheduleData>()

    private detailsOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    detailsOpen$ = this.detailsOpenSubject.asObservable();

    apiUrl = "https://eojtern9xpfjuhk.m.pipedream.net";

    constructor(private http: HttpClient) {}

    private formSubmitSubject: BehaviorSubject<void> = new BehaviorSubject<void>(null);
    formSubmit$ = this.formSubmitSubject.asObservable();

    setFormSubmit() {
    this.formSubmitSubject.next();
    }

    setDetailsOpen(value: boolean) {
      this.detailsOpenSubject.next(value);
    }
  
    getDetailsOpenValue(): Observable<boolean> {
      return this.detailsOpenSubject.asObservable();
    }

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
