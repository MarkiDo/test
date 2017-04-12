import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaUserLanguageComponent } from './ita-user-language.component';

describe('ItaUserLanguageComponent', () => {
  let component: ItaUserLanguageComponent;
  let fixture: ComponentFixture<ItaUserLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaUserLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaUserLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
