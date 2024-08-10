import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  MatGridList,
  MatGridTile,
} from '@angular/material/grid-list';

import { NavigationComponent } from '../../shared-components/navigation/navigation.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    NavigationComponent,
    NgOptimizedImage,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
