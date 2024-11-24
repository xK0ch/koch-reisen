import {Routes} from '@angular/router';

import {ContactComponent} from './views/contact/contact.component';
import {HomePageComponent} from './views/home-page/home-page.component';
import {OfficeHoursComponent} from './views/office-hours/office-hours.component';

export const SLUG_HOME = 'home';
export const SLUG_OPENING_HOURS = 'office-hours';
export const SLUG_CONTACT = 'contact';

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
