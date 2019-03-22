import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RoomTypeService {

  type = null;

  constructor(private httpClient: HttpClient) {
    const typeString = localStorage.getItem('type');
    if (typeString) {
      this.type = JSON.parse(typeString);
    }
  }

  getRoomTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.API_URL}/roomtypes`);
  }

  getRoomType(typeName): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/roomtype/${typeName}`);
  }

  addRoomType(type): Observable<{success: boolean}> {
    return this.httpClient.post<{success: boolean}>(`${environment.API_URL}/roomtype`, type);
  }

  deleteRoomType(typeName): Observable<{success: boolean}>  {
    return this.httpClient.delete<{success: boolean}> (`${environment.API_URL}/roomtype/${typeName}`);
  }
}

