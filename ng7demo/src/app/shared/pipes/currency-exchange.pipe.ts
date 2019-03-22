import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  RATE = {
    'USD': 1,
    'CNY': 6.95,
    'JPY': 101.01
  };

  // first param is price, second is cs.currencyCode
  transform(value: number, currencyCode: string): any {
    return this.RATE[currencyCode] * value;
  }

}
