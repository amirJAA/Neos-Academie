import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { AddCardComponent } from './component/add-card/add-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    WeatherCardComponent,
    AddCardComponent,
    NavbarComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
