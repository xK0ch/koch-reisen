import { Component } from '@angular/core';
import {NavigationComponent} from "../../shared-components/navigation/navigation.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
