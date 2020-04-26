import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarService} from './shared_service/car.service';
import {BikeService} from './shared_service/bike.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListcarComponent} from './components/listcar/listcar.component';
import {ListbikeComponent} from './components/listbike/listbike.component';
import {ListvehicleComponent} from './components/listvehicle/listvehicle.component';
import {BookingcarComponent} from './components/bookingcar/bookingcar.component';
import {MainmenuComponent} from './components/mainmenu/mainmenu.component';

const appRoutes: Routes=[
  {path:'', component:ListvehicleComponent},
  {path:'listcar', component:ListcarComponent},
  {path:'listbike', component:ListbikeComponent},
  {path:'carBooking', component:BookingcarComponent},
  {path:'mainMenu', component:MainmenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListcarComponent,
    ListbikeComponent,
    ListvehicleComponent,
    BookingcarComponent,
    MainmenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarService, BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
