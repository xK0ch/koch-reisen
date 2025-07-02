import {NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgOptimizedImage, MatIcon],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
}
