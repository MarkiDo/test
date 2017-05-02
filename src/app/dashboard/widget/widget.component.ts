import { Component, Input, OnInit } from '@angular/core';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MdDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import {
  EmailSchedulerDialogComponent
} from '../email-scheduler-dialog/email-scheduler-dialog.component';
import {
  LDAPComponent
} from '../ldap/ldap.component';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() public modal: string;
  @Input() public title: string;
  @Input() public status: string;
  @Input() public data: string;
  public type: string;
  public openModal: any;
  public height: string;
  public width600: string;
  constructor(public dialog: MdDialog,
              private translate: TranslateService,
              public email: EmailSchedulerDialogComponent,
              public server: LDAPComponent ) { }
  public ngOnInit() {
      this.height = 'auto';
      this.width600 = '600px';
      this.type = 'constructor';
    }
  public openDialog() {
    if (this.modal === this.email[this.type].name) {
      this.openModal = this.email[this.type];
    }
    if (this.modal === this.server[this.type].name) {
      this.openModal = this.server[this.type];
    }
    this.dialog.open(this.openModal, {
      height: this.height,
      width: this.width600
    });
  };
}
