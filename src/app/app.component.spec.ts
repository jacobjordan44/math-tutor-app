import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //Added
      imports: [ToastrModule.forRoot()],
      declarations: [
        AppComponent
      ],
      //Added
      providers: [{
        provide: ToastrService, useClass: ToastrService
      }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'math-tutor-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('math-tutor-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('math-tutor-app app is running!');
  });

});
