import { Component, Input, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MdDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import {
  EmailSchedulerDialogComponent
} from '../email-scheduler-dialog/email-scheduler-dialog.component';
import {
  ServersConfiguratorDialogComponent
} from '../servers-configurator-dialog/servers-configurator-dialog.component';
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
  public height350: string;
  public width550: string;
  constructor(public dialog: MdDialog,
              private translate: TranslateService,
              public email: EmailSchedulerDialogComponent,
              public server: ServersConfiguratorDialogComponent ) { }
  public ngOnInit() {
      this.height350 = '350px';
      this.width550 = '550px';
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
      height: this.height350,
      width: this.width550
    });
  };
}
