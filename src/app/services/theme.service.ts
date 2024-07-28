import {
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal: WritableSignal<string> = signal<string>('light');

  updateTheme(): void {
    this.themeSignal.update((value): string => (value === 'light' ? 'dark' : 'light'));
  }
}
