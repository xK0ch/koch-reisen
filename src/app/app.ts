import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { OfficeHoursComponent } from './components/office-hours/office-hours';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, ContactComponent, OfficeHoursComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
