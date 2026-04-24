import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have section with id "ueber-mich"', () => {
    const section = fixture.nativeElement.querySelector('#ueber-mich');
    expect(section).toBeTruthy();
  });

  it('should display greeting heading "Hallo,"', () => {
    const heading = fixture.nativeElement.querySelector('.about__heading') as HTMLElement;
    expect(heading?.textContent?.trim()).toBe('Hallo,');
  });

  it('should display profile picture with alt text', () => {
    const img = fixture.nativeElement.querySelector('.about__image') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toContain('profile-picture.jpg');
    expect(img.alt).toContain('Anja Koch');
  });

  it('should display the name "Anja Koch" in the text', () => {
    const text = fixture.nativeElement.querySelector('.about__text') as HTMLElement;
    expect(text?.textContent).toContain('Anja Koch');
  });

  it('should display the signature', () => {
    const sig = fixture.nativeElement.querySelector('.about__signature') as HTMLElement;
    expect(sig?.textContent).toContain('Sonnige Grüße');
    expect(sig?.textContent).toContain('Anja Koch');
  });

  it('should mention 40 years of experience', () => {
    const text = fixture.nativeElement.querySelector('.about__text') as HTMLElement;
    expect(text?.textContent).toContain('40 Jahren');
  });
});
