import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LDAPComponent } from './ldap.component';

describe('LDAPComponent', () => {
  let component: LDAPComponent;
  let fixture: ComponentFixture<LDAPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LDAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LDAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
