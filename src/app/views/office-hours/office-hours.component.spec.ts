import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { OfficeHoursComponent } from './office-hours.component';

describe('OfficeHoursComponent', () => {
  let component: OfficeHoursComponent;
  let fixture: ComponentFixture<OfficeHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    fixture = TestBed.createComponent(OfficeHoursComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
