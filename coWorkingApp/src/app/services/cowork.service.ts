import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable({
  providedIn: 'root'
})
export class CoworkService {

  http = inject(HttpClient);

  workspacesSubject: BehaviorSubject<any> = new BehaviorSubject(undefined);
  selectedWorkspace: BehaviorSubject<any> = new BehaviorSubject(undefined);

  getAllWorkspaces() {
    const headers = new HttpHeaders({
      apikey: supabaseKey
    });
    this.http.get(`${supabaseUrl}/rest/v1/coworking_spaces?select=*`, {headers}).subscribe({
      next: (res) => {
        this.workspacesSubject.next(res);
      }
    });
    return this.workspacesSubject.asObservable();
  }

  filterWorkspaceById(id: number) {
    const headers = new HttpHeaders({
      apikey: supabaseKey
    });
    this.http.get(`${supabaseUrl}/rest/v1/coworking_spaces?id=eq.${id}`, {headers}).subscribe({
      next: (res) => {
        this.selectedWorkspace.next(res[0]);
      }
    });
  }

  getWorkspaceById() {
    return this.selectedWorkspace.asObservable();
  }

}