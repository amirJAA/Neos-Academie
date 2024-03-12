import { Component, Input } from '@angular/core';
import { WeatherParams } from '../../interface/weather-params';

@Component({
  selector: 'app-week-waether',
  templateUrl: './week-waether.component.html',
  styleUrls: ['./week-waether.component.scss']
})
export class WeekWaetherComponent {
  @Input() weather!: WeatherParams;

}
