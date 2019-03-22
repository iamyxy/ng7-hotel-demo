import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  pure: false  // make the pipe impure to detect the impure change
})
export class PricePipe implements PipeTransform {

  transform(products: any[], min: number, max: number): any {
    min = min || Number.MIN_VALUE;
    max = max || Number.MAX_VALUE;

    // arrow function don't need function name
    return products.filter(product => {
      return product.price >= min && product.price <= max;
    });
  }

}
