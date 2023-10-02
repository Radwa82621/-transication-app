import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Customer ,Transication} from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'transication';

  constructor() {
    // this.customersArray = this.customers.customers
    // console.log(this.customersArray);
    // this.customersArray.forEach((el) => {
    //   console.log(el);
    //   this.total=0
    //   el.transications.forEach((item: any) => {
    //     this.total += item.price
    //     console.log(this.total);
    //   })
      
    // })
  }

}