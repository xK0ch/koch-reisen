import {Injectable, signal, WritableSignal, effect} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal: WritableSignal<string> = signal<string>('dark');

  constructor() {
    effect(() => {
      const theme = this.themeSignal();
      const body = document.body;
      body.classList.remove('light', 'dark');
      body.classList.add(theme);
    });
  }

  toggleTheme(): void {
    this.themeSignal.update((value) => (value === 'light' ? 'dark' : 'light'));
  }
}
