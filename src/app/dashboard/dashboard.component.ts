import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { MdDialog } from '@angular/material';
import {
  EmailSchedulerDialogComponent
} from './email-scheduler-dialog/email-scheduler-dialog.component';
import {
  LDAPComponent
} from './ldap/ldap.component';

@Component({
  selector: 'ita-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  public modal: string;
  public height: string;
  public width600: string;
  constructor(
    private translate: TranslateService,
    private auth: AuthService,
    public dialog: MdDialog
  ) {}
  
  public ngOnInit() {
    this.height = 'auto';
    this.width600 = '600px';
  }
  private LDAPDialog(height, width600) {
    this.dialog.open(LDAPComponent, {
      height: this.height,
      width: this.width600
    });
  }
  private openEmailSchedulerDialog(height, width600) {
    this.dialog.open(EmailSchedulerDialogComponent, {
      height: this.height,
      width: this.width600
    });
  }
}