import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomManagementService {

  room = null;

  constructor(private httpClient: HttpClient) {
    const roomString = localStorage.getItem('room');
    if (roomString) {
      this.room = JSON.parse(roomString);
    }
  }

  getRooms(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.API_URL}/rooms`);
  }

  addRoom(room): Observable<{success: boolean}> {
    return this.httpClient.post<{success: boolean}>(`${environment.API_URL}/room`, room);
  }

  deleteRoom(id): Observable<{success: boolean}>  {
    return this.httpClient.delete<{success: boolean}> (`${environment.API_URL}/room/${id}`);
  }
}
