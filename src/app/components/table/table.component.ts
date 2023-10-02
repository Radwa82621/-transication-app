import { Component, Input, OnInit } from '@angular/core';

import { Customer ,Transication} from 'src/app/shared/interfaces/customer';
import { CustomerTransicationsService } from 'src/app/shared/services/customer-transications.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit
 {
  customers!:Customer[]
  constructor(private _CustomerTransicationsService:CustomerTransicationsService) {}
  ngOnInit(): void {
    // console.log(this.customers);
    // this.customers.forEach((el)=>{
    //   console.log(el.total);
      
    // })
    this.getCustomers()
    
  
  }
  getCustomers(){
    this._CustomerTransicationsService.Customers.subscribe({
      next:(res)=>{console.log(res);
      this.customers=res.customers},
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  }



