import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getOrders(): Observable<any> {
    return this.httpClient.get<any>(`${environment.API_URL}/orders`, {withCredentials: true});
  }
}
