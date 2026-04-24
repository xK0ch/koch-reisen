import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-office-hours',
  standalone: true,
  templateUrl: './office-hours.html',
  styleUrl: './office-hours.scss',
})
export class OfficeHoursComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly pdfUrl = 'https://www.koch-reisen.de/pdfs/office_hours.pdf';

  readonly safePdfUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
}
