import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/wheather.service'

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss']
})
export class MainWeatherComponent implements OnInit {
  temperature!: number;
  condition!: string;
  humidity!: number;
  wind!: number;
  city!: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherData('Tokyo'); // Example: Fetch weather data for 'France'
  }

  getWeatherData(city: string) {
    this.weatherService.getCurrentTemp(city).subscribe(temp => {
      this.temperature = temp;
      console.log(this.temperature);
    });

    this.weatherService.getWeatherState(city).subscribe(condition => {
      this.condition = condition;
      console.log(this.condition);
    });

    this.weatherService.getCurrentHum(city).subscribe(humidity => {
      this.humidity = humidity;
      console.log(this.humidity);
    });

    this.weatherService.getCurrentWind(city).subscribe(wind => {
      this.wind = wind;
      console.log(this.wind);
    });

    this.city = city;

  }
}
