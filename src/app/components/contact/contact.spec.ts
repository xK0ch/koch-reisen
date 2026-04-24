import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with id "kontakt"', () => {
    expect(fixture.nativeElement.querySelector('#kontakt')).toBeTruthy();
  });

  it('should display heading "Kontakt"', () => {
    const heading = fixture.nativeElement.querySelector('.contact__heading') as HTMLElement;
    expect(heading?.textContent?.trim()).toBe('Kontakt');
  });

  it('should display the phone number', () => {
    expect(fixture.nativeElement.textContent).toContain('0431 2000275');
  });

  it('should display the email address', () => {
    expect(fixture.nativeElement.textContent).toContain('anja.koch@koch-reisen.de');
  });

  it('should display street and city in address', () => {
    const text: string = fixture.nativeElement.textContent ?? '';
    expect(text).toContain('Heischberg 1');
    expect(text).toContain('24119 Kronshagen');
  });

  it('should have a working email href', () => {
    const link = fixture.nativeElement.querySelector('a[href^="mailto:"]') as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('mailto:anja.koch@koch-reisen.de');
  });

  it('should have a working phone href', () => {
    const link = fixture.nativeElement.querySelector('a[href^="tel:"]') as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toContain('04312000275');
  });

  it('phoneHref getter should format phone correctly', () => {
    expect(component.phoneHref).toBe('tel:04312000275');
  });

  it('emailHref getter should format email correctly', () => {
    expect(component.emailHref).toBe('mailto:anja.koch@koch-reisen.de');
  });

  it('should render three contact cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.contact__card');
    expect(cards.length).toBe(3);
  });
});
