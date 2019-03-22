import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencyCode = 'USD';
  constructor() { }
}
