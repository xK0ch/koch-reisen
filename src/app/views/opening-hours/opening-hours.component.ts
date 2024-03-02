import { Component } from '@angular/core';
import { PdfViewerModule } from "ng2-pdf-viewer";

@Component({
  selector: 'app-opening-hours',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './opening-hours.component.html',
  styleUrl: './opening-hours.component.scss'
})
export class OpeningHoursComponent {

}
