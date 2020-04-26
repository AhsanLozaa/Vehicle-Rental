import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Bike} from '../bike';


@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private baseUrl:string='http://localhost:8081/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getBikes(){
    return this._http.get(this.baseUrl+'/bikes', this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }


  getBike(id:Number){
    return this._http.get(this.baseUrl+'/bike/'+id, this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  deleteBike(id:Number){
    return this._http.delete(this.baseUrl+'/bike/'+id, this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  createBike(bike: Bike){
    return this._http.post(this.baseUrl+'/bike',JSON.stringify(bike), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  updateBike(bike: Bike){
    return this._http.put(this.baseUrl+'/bike',JSON.stringify(bike), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
}
