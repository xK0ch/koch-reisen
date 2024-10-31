import {Component} from '@angular/core';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-office-hours',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './office-hours.component.html',
  styleUrl: './office-hours.component.scss',
})
export class OfficeHoursComponent {
}
