import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConfComponent } from './service-conf.component';

describe('ServiceConfComponent', () => {
  let component: ServiceConfComponent;
  let fixture: ComponentFixture<ServiceConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
