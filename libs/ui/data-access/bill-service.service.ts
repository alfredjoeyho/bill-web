import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, retry, map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { UserProfiles } from 'libs/shared/src/lib/modals/userProfile';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {
  private REST_API_SERVER = 'https://zware-ngnewapi.azurewebsites.net/api';
  private api = 'profiles';
  private scopeKey = 'alfredho0830_at_gmail_com';
  loading = false;
  constructor(private http: HttpClient) {}

  save(form: any): Observable<UserProfiles> {
    const url = `${this.REST_API_SERVER}/${this.scopeKey}/${this.api}`;
    return this.http.post<any>(url, form);
  }

  getProfiles(): Observable<any> {
    const url = `${this.REST_API_SERVER}/${this.scopeKey}/${this.api}`;
    return this.http.get<UserProfiles>(url);
  }
}
