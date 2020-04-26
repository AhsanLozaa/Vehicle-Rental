import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  onCarButtonClick(): void{
    this._router.navigate(['/listcar'])
  }

  onBikeButtonClick(): void{
    this._router.navigate(['/listbike'])
  }

  ngOnInit() {
  }

}
