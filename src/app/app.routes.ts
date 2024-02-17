import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";

const SLUG_HOME: string = 'home';
const SLUG_OPENING_HOURS: string = 'opening-hours';
const SLUG_CONTACT: string = 'contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: SLUG_HOME,
    pathMatch: 'full',
  },
  {
    path: SLUG_HOME,
    component: HomePageComponent,
  },
  // {
  //   path: SLUG_CURRENT_WEATHER,
  //   component: CurrentWeatherComponent,
  // }
];
