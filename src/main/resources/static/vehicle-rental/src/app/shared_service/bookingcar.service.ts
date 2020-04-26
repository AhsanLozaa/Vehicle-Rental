import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../booking';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Car } from '../car';

@Injectable({
  providedIn: 'root'
})
export class BookingcarService {

  private baseUrl: string = 'http://localhost:8081/api';
  private headers = new Headers({ 'Content-Type': 'application/json' })
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8081/api/booking'
   }

  public bookNewCar(bookCar: Booking){
    return this.http.post<Booking>(this.baseUrl, bookCar).toPromise();
  }
}
