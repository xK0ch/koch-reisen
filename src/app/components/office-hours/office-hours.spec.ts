import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficeHoursComponent } from './office-hours';

describe('OfficeHoursComponent', () => {
  let component: OfficeHoursComponent;
  let fixture: ComponentFixture<OfficeHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeHoursComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfficeHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with id "buerozeiten"', () => {
    expect(fixture.nativeElement.querySelector('#buerozeiten')).toBeTruthy();
  });

  it('should display heading "Bürozeiten"', () => {
    const heading = fixture.nativeElement.querySelector('.office-hours__heading') as HTMLElement;
    expect(heading?.textContent?.trim()).toBe('Bürozeiten');
  });

  it('should have the correct PDF URL', () => {
    expect(component.pdfUrl).toBe('https://www.koch-reisen.de/pdfs/office_hours.pdf');
  });

  it('should render an iframe for the PDF', () => {
    const iframe = fixture.nativeElement.querySelector('iframe');
    expect(iframe).toBeTruthy();
  });

  it('should have a download link with the correct PDF URL', () => {
    const link = fixture.nativeElement.querySelector('.office-hours__btn') as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('https://www.koch-reisen.de/pdfs/office_hours.pdf');
  });

  it('should open PDF link in a new tab', () => {
    const link = fixture.nativeElement.querySelector('.office-hours__btn') as HTMLAnchorElement;
    expect(link.getAttribute('target')).toBe('_blank');
  });
});
