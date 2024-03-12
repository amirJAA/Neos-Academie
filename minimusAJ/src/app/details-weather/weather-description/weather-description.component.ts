import { Component } from '@angular/core';
import { WeatherParams } from '../../interface/weather-params';
@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss']
})
export class WeatherDescriptionComponent {


  weathers: WeatherParams[] = [];

  ngOnInit(): void {
    this.weathers.push({
      jour: "MON",
      condition: "RANNIG",
      temperature: 9,
      image: "..\\assets\\pluvieux.png"
    });

    this.weathers.push({
      jour: "TUE",
      condition: "SUNNY",
      temperature: 15,
      image: "..\\assets\\soleil.png"
    });

    this.weathers.push({
      jour: "WED",
      condition: "CLOUDY",
      temperature: 11,
      image: "..\\assets\\nuageux.png"
    });

    this.weathers.push({
      jour: "THU",
      condition: "SUNNY",
      temperature: 19,
      image: "..\\assets\\soleil.png"
    });

    this.weathers.push({
      jour: "FRI",
      condition: "CLOUDY",
      temperature: 12,
      image: "..\\assets\\nuageux.png"
    });
  }
}
