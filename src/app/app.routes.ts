import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";
import {OpeningHoursComponent} from "./views/opening-hours/opening-hours.component";
import {ContactComponent} from "./views/contact/contact.component";

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
  {
    path: SLUG_OPENING_HOURS,
    component: OpeningHoursComponent,
  },
  {
    path: SLUG_CONTACT,
    component: ContactComponent,
  },
];
