import {NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';
import {MatGridList, MatGridTile,} from '@angular/material/grid-list';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    NgOptimizedImage,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
}
