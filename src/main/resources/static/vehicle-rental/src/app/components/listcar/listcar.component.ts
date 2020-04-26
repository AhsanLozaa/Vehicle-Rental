import { Component, OnInit } from '@angular/core';
import { CarService } from '../../shared_service/car.service';
import { Car } from '../../car';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listcar',
  templateUrl: './listcar.component.html',
  styleUrls: ['./listcar.component.css'],
})
export class ListcarComponent implements OnInit {

  private cars: Car[];
  make: string;
  constructor(private _carService: CarService, private _router: Router) { }

  ngOnInit() {
    this._carService.getCars().subscribe((cars) => {
      console.log(cars);
      this.cars = cars;
    }, (error) => {
      console.log(error);
    })
  }

  // On Button Click Navigate to Booking Menu
  onButtonClick(): void {
    this._router.navigate(['/carBooking']);
  }
  
  // this method is used to filter the results (Only for Car)
  Search() {
    this.cars = this.cars.filter(res => {
      return res.make.toLocaleLowerCase().match(this.make.toLocaleLowerCase());
    });
  }
}
