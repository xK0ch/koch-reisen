import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatIconModule,
  MatIconRegistry,
} from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSlideToggle,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  themeService: ThemeService = inject(ThemeService);

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('airplane', this.domSanitizer.bypassSecurityTrustResourceUrl('/koch-reisen-airplane.svg'));
  }

  toggleTheme(): void {
    this.themeService.updateTheme();
  }
}
