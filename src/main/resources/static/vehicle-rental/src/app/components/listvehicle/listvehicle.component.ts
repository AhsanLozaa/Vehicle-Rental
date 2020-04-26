import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-listvehicle',
  templateUrl: './listvehicle.component.html',
  styleUrls: ['./listvehicle.component.css']
})
export class ListvehicleComponent implements OnInit {
  
  constructor(private _activatedRoute:ActivatedRoute, private _router:Router) { }

  

  ngOnInit() {
  }

}
