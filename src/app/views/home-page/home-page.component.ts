import { Component } from '@angular/core';
import {NavigationComponent} from "../../shared-components/navigation/navigation.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavigationComponent,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
