import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { SidebarComponent } from './sidebar.component';
import {ItemActions} from '../../core/ajax/item/item.actions';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [
        RouterTestingModule,
        NgReduxTestingModule
      ],
      providers: [ {provide: ItemActions, useClass: ItemActions} ],
    })
    .compileComponents();
    MockNgRedux.reset();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
