import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WeekWaetherComponent } from './week-waether/week-waether.component';
import { WeatherDescriptionComponent } from './weather-description/weather-description.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainWeatherComponent,
    SocialMediaComponent,
    WeekWaetherComponent,
    WeatherDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
