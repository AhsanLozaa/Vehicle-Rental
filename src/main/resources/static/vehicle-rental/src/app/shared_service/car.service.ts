import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Car } from '../car';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})

export class CarService {
  private baseUrl: string = 'http://localhost:8081/api';
  private headers = new Headers({ 'Content-Type': 'application/json' })
  private options = new RequestOptions({ headers: this.headers });
  constructor(private _http: Http) { }

  getCars() {
    return this._http.get(this.baseUrl + '/cars', this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  getCar(id: Number) {
    return this._http.get(this.baseUrl + '/car/' + id, this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  deleteCar(id: Number) {
    return this._http.delete(this.baseUrl + '/car/' + id, this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  createCar(car: Car) {
    return this._http.post(this.baseUrl + '/car', JSON.stringify(car), this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  updateCar(car: Car) {
    return this._http.put(this.baseUrl + '/car', JSON.stringify(car), this.options).map((response: Response) => response.json()).catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");

  }
}
