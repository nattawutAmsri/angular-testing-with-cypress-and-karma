import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(async(() => {
    appComponent = new AppComponent();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render active day of week', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const dayOfWeek = new Date().getDay();
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.date')[dayOfWeek];
    expect(elements).toBeTruthy();
  });

  it('Test padding function with 1', () => {
    const result = appComponent.padding(1);
    expect(result).toBe('01');
  });

  it('Test padding function with 11', () => {
    const result = appComponent.padding(11);
    expect(result).toBe('11');
  });

  it('Test padding function with 1', () => {
    const result = appComponent.padding(1);
    expect(result).toBe('01');
  });

  it('Test padding function with 11', () => {
    const result = appComponent.padding(11);
    expect(result).toBe('11');
  });

  it('Test updateDayDisplay function', () => {
    const result = appComponent.updateDayDisplay(4);
    expect(result).toBeTruthy();
  });

  it('Test Update background function with daylight input', () => {
    const result = appComponent.updateBackgroundTheme(11);
    expect(result).toBe(1);
  });

  it('Test Update background function with nigth input', () => {
    const result = appComponent.updateBackgroundTheme(20);
    expect(result).toBe(0);
  });
});
