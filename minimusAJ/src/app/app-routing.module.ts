import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './details-weather/weather-detail/weather-detail.component';
import { HomeMainComponent } from './home/home-main/home-main.component';



const routes: Routes = [
  { path: '',  component: HomeMainComponent },
  { path: 'home', component: HomeMainComponent},
  { path: 'weather-detail', component: WeatherDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


