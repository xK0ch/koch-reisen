import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DomSanitizer} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';
import {ThemeService} from '../../services/theme.service';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {AsyncPipe} from "@angular/common";
import {SLUG_HOME, SLUG_OPENING_HOURS} from '../../app.routes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatSlideToggle,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

  SLUG_HOME: string = SLUG_HOME
  SLUG_OPENING_HOURS: string = SLUG_OPENING_HOURS;

  themeService = inject(ThemeService);
  #matIconRegistry = inject(MatIconRegistry);
  #domSanitizer = inject(DomSanitizer);
  #breakpointObserver = inject(BreakpointObserver);

  isSmallScreen$: Observable<boolean> = this.#breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).pipe(
    map(result => result.matches)
  );

  constructor() {
    this.#matIconRegistry.addSvgIcon('airplane', this.#domSanitizer.bypassSecurityTrustResourceUrl('/koch-reisen-airplane.svg'));
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
