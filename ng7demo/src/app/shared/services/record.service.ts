import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Record} from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  record = null;

  constructor(private httpClient: HttpClient) {
    const recordString = localStorage.getItem('record');
    if (recordString) {
      this.record = JSON.parse(recordString);
    }
  }

  getRecords(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.API_URL}/records`);
  }

  addRecord(record): Observable<{success: boolean}> {
    return this.httpClient.post<{success: boolean}>(`${environment.API_URL}/record`, record);
  }

  deleteRecord(id): Observable<{success: boolean}>  {
    return this.httpClient.delete<{success: boolean}> (`${environment.API_URL}/record/${id}`);
  }
}
