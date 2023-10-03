import { Pipe, PipeTransform } from '@angular/core';
import { Customer, Transication } from '../interfaces/customer';

@Pipe({
  name: 'searchByAmount'
})
export class SearchByAmountPipe implements PipeTransform {
array:Transication[]=[]
  transform(value: Transication[],term:number): Transication[] {
    
value.forEach((el)=>{
  if(el.price===term){
    this.array.push(el)
  }
})
    return this.array
  }
}
