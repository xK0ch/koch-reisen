import { Component } from '@angular/core';

interface NavLink {
  label: string;
  id: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly navLinks: NavLink[] = [
    { label: 'Über mich', id: 'ueber-mich' },
    { label: 'Kontakt', id: 'kontakt' },
    { label: 'Bürozeiten', id: 'buerozeiten' },
  ];

  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    }
    this.mobileMenuOpen = false;
  }
}
