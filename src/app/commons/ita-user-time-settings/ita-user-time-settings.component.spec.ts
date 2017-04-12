import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaUserTimeSettingsComponent } from './ita-user-time-settings.component';

describe('ItaUserTimeSettingsComponent', () => {
  let component: ItaUserTimeSettingsComponent;
  let fixture: ComponentFixture<ItaUserTimeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaUserTimeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaUserTimeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
