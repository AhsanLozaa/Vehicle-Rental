import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../shared_service/bike.service';
import {Bike} from '../../bike';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbike',
  templateUrl: './listbike.component.html',
  styleUrls: ['./listbike.component.css']
})
export class ListbikeComponent implements OnInit {

  make: string;
  private bikes:Bike[];

  constructor(private __bikeService:BikeService, private _router:Router) { }

  ngOnInit() {
    this.__bikeService.getBikes().subscribe((bikes)=>{
      console.log(bikes);
      this.bikes=bikes;
    },(error)=>{
      console.log(error);
    })
  }

  // On Button Click Navigate to Booking Menu
  onButtonClick(): void {
    this._router.navigate(['/carBooking']);
  }


  // Filter Bikes By its Make
  Search() {
    this.bikes = this.bikes.filter(res => {
      return res.make.toLocaleLowerCase().match(this.make.toLocaleLowerCase());
    });
  }

}
