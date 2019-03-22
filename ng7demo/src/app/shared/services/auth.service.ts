import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = null;

  constructor(
    private httpClient: HttpClient
  ) {
    // read user form local storage
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }
  }
  // make sure return object has a success property which value type is boolean
  login(user): Observable<{success: boolean, user: any}> {
    // convert JSON -> form-urlencoded format because Spring Security's login api
    // only accept this format data
    const userParams: HttpParams = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    return this.httpClient.post<{success: boolean, user: any}>(`${environment.API_URL}/login`, userParams, {withCredentials: true});
  }
  register(user): Observable<{success: boolean}> {
    return this.httpClient.post<{success: boolean}>(`${environment.API_URL}/users`, user);
  }
  logout(): Observable<{success: boolean}> {
    return this.httpClient.post<{success: boolean}>(`${environment.API_URL}/logout`, null, {withCredentials: true});
  }
}
