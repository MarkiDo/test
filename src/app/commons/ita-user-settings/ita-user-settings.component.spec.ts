import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaUserSettingsComponent } from './ita-user-settings.component';

describe('ItaUserSettingsComponent', () => {
  let component: ItaUserSettingsComponent;
  let fixture: ComponentFixture<ItaUserSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaUserSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
