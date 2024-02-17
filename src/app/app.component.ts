import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationComponent} from "./shared-components/navigation/navigation.component";
import {ThemeService} from "./services/theme.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, NgClass],
  templateUrl: './app.component.html',
})
export class AppComponent {

  themeService: ThemeService = inject(ThemeService);
}
