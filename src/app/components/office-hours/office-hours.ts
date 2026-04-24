import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-office-hours',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './office-hours.html',
  styleUrl: './office-hours.scss',
})
export class OfficeHoursComponent {
  readonly pdfUrl = 'https://www.koch-reisen.de/pdfs/office_hours.pdf';
}
