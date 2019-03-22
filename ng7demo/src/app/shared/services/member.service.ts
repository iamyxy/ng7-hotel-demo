import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  member = null;

  constructor(private httpClient: HttpClient) {
    const memberString = localStorage.getItem('member');
    if (memberString) {
      this.member = JSON.parse(memberString);
    }
  }

  getMembers(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.API_URL}/members`);
  }

  addMember(member): Observable<{success: boolean}> {
    return this.httpClient.post<{success: boolean}>(`${environment.API_URL}/member`, member);
  }

  deleteMember(id): Observable<{success: boolean}>  {
    return this.httpClient.delete<{success: boolean}> (`${environment.API_URL}/member/${id}`);
  }
}


