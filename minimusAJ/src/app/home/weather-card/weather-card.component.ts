import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/wheather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  cities: string[] = ['Paris', 'London', 'New York'];
  weatherData: any[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCitiesWeatherData();
  }

  getCitiesWeatherData() {
    this.cities.forEach(city => {
      const cityWeatherData: any = {};
      this.weatherService.getCurrentTemp(city).subscribe(temp => {
        cityWeatherData.currentTemp = temp;
      });

      this.weatherService.getMinTemp(city).subscribe(minTemp => {
        cityWeatherData.minTemp = minTemp;
      });

      this.weatherService.getMaxTemp(city).subscribe(maxTemp => {
        cityWeatherData.maxTemp = maxTemp;
      });

      this.weatherService.getWeatherState(city).subscribe(condition => {
        cityWeatherData.condition = condition;
        this.weatherData.push(cityWeatherData);
      });
    });
  }
}
