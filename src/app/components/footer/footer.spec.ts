import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display brand name "Koch Reisen"', () => {
    const name = fixture.nativeElement.querySelector('.footer__name') as HTMLElement;
    expect(name?.textContent?.trim()).toBe('Koch Reisen');
  });

  it('should display the current year', () => {
    const currentYear = new Date().getFullYear().toString();
    expect(fixture.nativeElement.textContent).toContain(currentYear);
  });

  it('should display Kronshagen in the copyright text', () => {
    expect(fixture.nativeElement.textContent).toContain('Kronshagen');
  });

  it('should display the address in the copyright text', () => {
    expect(fixture.nativeElement.textContent).toContain('Heischberg 1');
  });

  it('should have logo image', () => {
    const logo = fixture.nativeElement.querySelector('.footer__logo') as HTMLImageElement;
    expect(logo).toBeTruthy();
    expect(logo.getAttribute('src')).toContain('koch-reisen-airplane.svg');
  });

  it('currentYear should match the actual current year', () => {
    expect(component.currentYear).toBe(new Date().getFullYear());
  });
});
