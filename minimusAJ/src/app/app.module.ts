import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWeatherComponent } from './details-weather/main-weather/main-weather.component';
import { SocialMediaComponent } from './details-weather/social-media/social-media.component';
import { WeekWaetherComponent } from './details-weather/week-waether/week-waether.component';
import { WeatherDescriptionComponent } from './details-weather/weather-description/weather-description.component';
import { WeatherService } from './services/wheather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailComponent } from './details-weather/weather-detail/weather-detail.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { WeatherCardComponent } from './home/weather-card/weather-card.component';
import { AddCardComponent } from './home/add-card/add-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainWeatherComponent,
    SocialMediaComponent,
    WeekWaetherComponent,
    WeatherDescriptionComponent,
    WeatherDetailComponent,
    HomeMainComponent,
    WeatherCardComponent,
    AddCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
