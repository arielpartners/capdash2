import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng2-mock-component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

describe('AppComponent', () => {

  @Component({
    template: ''
  })
  class DummyComponent { }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DummyComponent,
        MockComponent({selector: 'cd-login'}),
        MockComponent({selector: 'cd-header'}),
        MockComponent({
          selector: 'cd-sidebar',
          inputs: ['version', 'loading', 'error'],
          outputs: ['version', 'loading', 'error'],
        }),
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: DummyComponent }
        ]),
        NgReduxTestingModule
      ],
    });
    TestBed.compileComponents();
    MockNgRedux.reset();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'cd works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cd works!');
  }));

  it('should render content', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-content').className).toBeTruthy();
  }));
});
