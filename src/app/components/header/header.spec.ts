import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display brand name "Koch Reisen"', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.header__brand')?.textContent?.trim()).toBe('Koch Reisen');
  });

  it('should render three navigation links', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.header__nav-link');
    expect(links.length).toBe(3);
  });

  it('should have navigation links pointing to correct anchors', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('.header__nav-link')) as HTMLAnchorElement[];
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('#ueber-mich');
    expect(hrefs).toContain('#kontakt');
    expect(hrefs).toContain('#buerozeiten');
  });

  it('should start with mobile menu closed', () => {
    expect(component.mobileMenuOpen).toBe(false);
  });

  it('should toggle mobile menu open and closed', () => {
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBe(true);
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBe(false);
  });

  it('should apply open class to nav when mobile menu is open', () => {
    component.mobileMenuOpen = true;
    fixture.detectChanges();
    const nav = fixture.nativeElement.querySelector('.header__nav') as HTMLElement;
    expect(nav.classList.contains('header__nav--open')).toBe(true);
  });

  it('should display logo image', () => {
    fixture.detectChanges();
    const logo = fixture.nativeElement.querySelector('.header__logo-img') as HTMLImageElement;
    expect(logo).toBeTruthy();
    expect(logo.getAttribute('src')).toContain('koch-reisen-airplane.svg');
  });

  it('scrollToSection should prevent default and close mobile menu', () => {
    const preventDefault = vi.fn();
    const event = { preventDefault } as unknown as Event;
    component.mobileMenuOpen = true;

    component.scrollToSection('kontakt', event);

    expect(preventDefault).toHaveBeenCalled();
    expect(component.mobileMenuOpen).toBe(false);
  });

  it('scrollToSection should call scrollIntoView on the target element', () => {
    const section = document.createElement('section');
    section.id = 'kontakt';
    const scrollSpy = vi.fn();
    section.scrollIntoView = scrollSpy;
    document.body.appendChild(section);

    const event = { preventDefault: () => undefined } as Event;
    component.scrollToSection('kontakt', event);

    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });

    document.body.removeChild(section);
  });
});
