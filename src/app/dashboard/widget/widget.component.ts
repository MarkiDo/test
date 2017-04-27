import { Component, Input, OnInit } from '@angular/core';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
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
  @Input() public email: string;
  @Input() public server: string;
  @Input() public title: string;
  @Input() public status: string;
  @Input() public data: string;
  public height400: string;
  public width600: string;
  constructor(public dialog: MdDialog,
              private translate: TranslateService ) { }
  public ngOnInit() {
      this.height400 = '400px';
      this.width600 = '600px';
  }
  private openDialog( height400, width600) {
    if (this.email) {
      this.dialog.open(EmailSchedulerDialogComponent, {
        height: this.height400,
        width: this.width600
      });
    }
    if ( this.server ) {
      this.dialog.open(ServersConfiguratorDialogComponent, {
        height: this.height400,
        width: this.width600
      });
    }
  }
}
