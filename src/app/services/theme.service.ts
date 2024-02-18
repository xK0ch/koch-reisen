import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeSignal = signal<string>("light");

  updateTheme() {
    this.themeSignal.update((value) => (value === "light" ? "dark" : "light"));
  }
}
