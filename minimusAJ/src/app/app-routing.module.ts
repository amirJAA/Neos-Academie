import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './details-weather/weather-detail/weather-detail.component';



const routes: Routes = [
  { path: '', redirectTo: 'weather-detail', pathMatch: 'full' },
  { path: 'weather-detail', component: WeatherDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


