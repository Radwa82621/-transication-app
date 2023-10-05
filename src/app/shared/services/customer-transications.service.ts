import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerTransicationsService {
  constructor(private _HttpClient: HttpClient) {}

  getCustomers(): Observable<any> {
    return this._HttpClient.get(`./assets/transications.json`).pipe(
      catchError((error) => {
        console.error('Error fetching JSON file:', error);
        return throwError('Failed to fetch JSON file');
      })
    );
  }
}
