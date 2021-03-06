import { Component, Input, OnInit, Inject } from '@angular/core';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MdDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { DIALOG, DialogConfig, DIALOG_CONFIG } from 'app/dialog-config';

import {
  EmailSchedulerDialogComponent
} from '../email-scheduler-dialog/email-scheduler-dialog.component';
import {
  LDAPComponent
} from '../ldap/ldap.component';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  providers: [{ provide: DIALOG, useValue: DIALOG_CONFIG }]
})
export class WidgetComponent implements OnInit {
  @Input() public modal: string;
  @Input() public title: string;
  @Input() public status: string;
  @Input() public data: string;
  public width: string;
  public height: string;
  public type: string;
  public openModal: any;
  constructor(
    @Inject(DIALOG) config: DialogConfig,
    public dialog: MdDialog,
    private translate: TranslateService,
    public email: EmailSchedulerDialogComponent,
    public server: LDAPComponent
  ) {
    this.width = config.width;
    this.height = config.height;
  }
  public ngOnInit() {
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
      width: this.width
    });
  };
}
