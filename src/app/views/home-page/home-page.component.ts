import { Component } from '@angular/core';
import {NavigationComponent} from "../../shared-components/navigation/navigation.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    NavigationComponent,
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
