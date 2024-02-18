import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {OFFICE_HOURS} from "../../models/office-hours";

@Component({
  selector: 'app-opening-hours',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './opening-hours.component.html',
  styleUrl: './opening-hours.component.scss'
})
export class OpeningHoursComponent {
  displayedColumns: string[] = ['weekDay', 'date', 'start', 'end', 'remark'];
  dataSource = OFFICE_HOURS;
}
