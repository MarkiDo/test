import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersConfiguratorDialogComponent } from './servers-configurator-dialog.component';

describe('ServersConfiguratorDialogComponent', () => {
  let component: ServersConfiguratorDialogComponent;
  let fixture: ComponentFixture<ServersConfiguratorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersConfiguratorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersConfiguratorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
