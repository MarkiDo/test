import { Component, Input } from '@angular/core';
import { SettingsComponent, ServersConfigurator, EmailScheduler }
 from 'app/dashboard/widget/settings/settings.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MdDialog } from '@angular/material';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input() public serversConfigurator: string;
  @Input() public emailScheduler: string;
  @Input() public title: string;
  @Input() public status: string;
  @Input() public data: string;
  constructor(public dialog: MdDialog) {
    this.emailScheduler = 'Email Scheduler';
    this.serversConfigurator = 'Servers Configurator';
  }
  public openDialog() {
    if (this.title === this.emailScheduler) {
      this.dialog.open(EmailScheduler);
    } else if (this.title === this.serversConfigurator) {
      this.dialog.open(ServersConfigurator);
    }
  }
}
