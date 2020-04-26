import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BookingcarService} from '../../shared_service/bookingcar.service';
import {CarService} from '../../shared_service/car.service';
import { Booking } from 'src/app/booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingcar',
  templateUrl: './bookingcar.component.html',
  styleUrls: ['./bookingcar.component.css']
})
export class BookingcarComponent implements OnInit {
  
  startDate = "";
  endDate = "";
  customerName = "";
  customerEmail = "";
  vehiclePlateNumber = "";
  

  carBooking = new Booking;

  constructor(private _bookingCarService:BookingcarService, private _carService:CarService, private _router:Router) { }

  ngOnInit() {
  }

  inputId = "";

  // // This is in the html file. executed when submitting the form
  saveBookingCar(carForm: NgForm): void{
    console.log(carForm.value);
    this.carBooking.startDate = this.startDate;
    this.carBooking.endDate = this.endDate;
    this.carBooking.customerName = this.customerName;
    this.carBooking.customerEmail = this.customerEmail;
    this.carBooking.vehiclePlateNumber = this.vehiclePlateNumber;
    this._bookingCarService.bookNewCar(this.carBooking);
  }

  
  // inputName = "";
  // // On Button Click Navigate to Booking Menu
  // onButtonClick(): void {
  //   console.log('showName clicked.');
  //   this.inputName = document.getElementById('_id').value;
  //   console.log(this.inputName);
  //   console.log(this.bodyDiv);
  //   this.buttonClicked.emit(this.inputName);

  // }

  // onButtonClick(){
  //   this.carBooking.vehiclePlateNumber = this.plateNumber;
  //   this.carBooking.startDate = this.startDate;
  //   this.carBooking.endDate = this.endDate;
  //   this.carBooking.customerName = this.customerName;
  //   this.carBooking.customerEmail = this.customerEmail;
  //   this._bookingCarService.bookNewCar(this.carBooking);
  // }
  
  
}
