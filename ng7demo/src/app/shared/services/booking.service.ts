import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  booking = null;

  constructor(
    private httpClient: HttpClient
  ) {
    const bookingString = localStorage.getItem('booking');
    if (bookingString) {
      this.booking = JSON.parse(bookingString);
    }
  }

  getBookings(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.API_URL}/bookings`);
  }

  addBooking(booking): Observable<{success: boolean}> {
    return this.httpClient.post<{success: boolean}>(`${environment.API_URL}/booking`, booking);
  }

  deleteBooking(id): Observable<{success: boolean}>  {
    return this.httpClient.delete<{success: boolean}> (`${environment.API_URL}/booking/${id}`);
  }
}
