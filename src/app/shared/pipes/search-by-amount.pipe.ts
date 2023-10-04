import { Pipe, PipeTransform } from '@angular/core';
import { Customer, Transication } from '../interfaces/customer';
import { transition } from '@angular/animations';

@Pipe({
  name: 'searchByAmount',
})
export class SearchByAmountPipe implements PipeTransform {
  transform(value: Transication[], term: number): any[] {
    if (!term || term === null) {
      return value;
    }
    let array: Transication[] = [];

    value.forEach((el) => {
      if (el.price === term) {
        array.push(el);
      }
    });

    return array;
  }
}
