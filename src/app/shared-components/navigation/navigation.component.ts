import {Component, inject} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {ThemeService} from "../../services/theme.service";
import {RouterLink} from "@angular/router";

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
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'airplane',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/koch-reisen-airplane.svg')
    );
  }

  themeService: ThemeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
