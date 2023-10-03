import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Customer[],term:string): Customer[] {
    return value.filter((el)=>el.name.toLowerCase().includes(term.toLowerCase())); 
  }

}
