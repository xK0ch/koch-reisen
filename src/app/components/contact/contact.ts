import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  readonly address = {
    name: 'Anja Koch',
    street: 'Heischberg 1',
    city: '24119 Kronshagen',
  };

  readonly phone = '0431 2000275';
  readonly email = 'anja.koch@koch-reisen.de';

  get phoneHref(): string {
    return 'tel:' + this.phone.replace(/\s+/g, '');
  }

  get emailHref(): string {
    return 'mailto:' + this.email;
  }
}
