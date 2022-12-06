import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝔸𝕡𝕡'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝔸𝕡𝕡');
  });
  it('form should be invalid', ()=>{
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    app.logInForm.controls['userName'].setValue('');

    app.logInForm.controls['password'].setValue('');

    expect(app.logInForm.valid).toBeFalsy();

  });
  it('check login function',()=>{

    localStorage.setItem('jwt','xyxabcdefghijklmnopqrstuvw');
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app.login()).toBe();

  });


  it('form should be valid', ()=>{

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    app.logInForm.controls['userName'].setValue('Gagan');

    app.logInForm.controls['password'].setValue('Password');

    expect(app.logInForm.valid).toBeTruthy();

  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title span')?.textContent).toContain('ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝔸𝕡𝕡');
  });
});
