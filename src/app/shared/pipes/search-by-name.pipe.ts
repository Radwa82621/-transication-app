import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(value: Customer[], term: string): any[] {
    if (value == undefined) {
      return [];
    } else {
      return value.filter((el) =>
        el.name.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
