import { Routes } from '@angular/router';
import {HomePageComponent} from "./views/home-page/home-page.component";
import {ContactComponent} from "./views/contact/contact.component";
import {OfficeHoursComponent} from "./views/office-hours/office-hours.component";

const SLUG_HOME: string = 'home';
const SLUG_OPENING_HOURS: string = 'office-hours';
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
    component: OfficeHoursComponent,
  },
  {
    path: SLUG_CONTACT,
    component: ContactComponent,
  },
];
