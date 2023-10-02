import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTransicationsService {

  constructor(private _HttpClient:HttpClient) { 

  }

  get Customers():Observable<any>{
    return this._HttpClient.get(`./assets/transications.json`)
  }
}
