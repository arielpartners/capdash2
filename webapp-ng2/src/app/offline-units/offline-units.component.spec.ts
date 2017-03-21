import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineUnitsComponent } from './offline-units.component';

describe('OfflineUnitsComponent', () => {
  let component: OfflineUnitsComponent;
  let fixture: ComponentFixture<OfflineUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
