import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSchedulerDialogComponent } from './email-scheduler-dialog.component';

describe('EmailSchedulerDialogComponent', () => {
  let component: EmailSchedulerDialogComponent;
  let fixture: ComponentFixture<EmailSchedulerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSchedulerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSchedulerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
