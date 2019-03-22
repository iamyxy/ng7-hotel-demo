import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {Product} from '../models/product';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(
    private httpClient: HttpClient
  ) { }

  // getProducts(): Promise<any[]> {
  //   // get() 返回的是observable
  //  return this.httpClient.get<any[]>('http://localhost:8080/products').toPromise();

  getProduct(id): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.API_URL}/products/${id}`);
  }

  getProducts(): Observable<any[]> {
    // get() 返回的是observable
    return this.httpClient.get<any[]>(`${environment.API_URL}/products`).pipe(
      map(res => {
        res.forEach(p => {
          if (p.name === 'iPhone6') {
            p.name = 'iPhone6 - new';
          }
        });
        return res;
      })
    );
  }
}
