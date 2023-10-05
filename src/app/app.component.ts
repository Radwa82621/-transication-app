import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Customer ,Transication} from 'src/app/shared/interfaces/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'transication';

  constructor( private _messageService:MessageService) {
   
  }
  ngOnInit(): void {
    // this._messageService.add({ severity: 'success', summary: 'Hello', detail: "please expand the rows to view customer's transacations " });
  }

}