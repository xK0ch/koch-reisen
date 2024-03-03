import {Component, inject, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-office-hours',
  standalone: true,
  imports: [],
  templateUrl: './office-hours.component.html',
  styleUrl: './office-hours.component.scss'
})
export class OfficeHoursComponent implements OnInit {

  url: SafeUrl = '';
  private domSanitizer: DomSanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/buerozeiten.pdf');
  }
}
