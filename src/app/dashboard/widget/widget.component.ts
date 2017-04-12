import { Component, OnInit, Input } from '@angular/core';
import { SettingsComponent, ServersConfigurator, EmailScheduler } from 'app/dashboard/widget/settings/settings.component'
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { MdDialog } from '@angular/material';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  constructor(public dialog: MdDialog) {
    this.emailScheduler = 'Email Scheduler';
    this.serversConfigurator = 'Servers Configurator'
  }
  @Input() serversConfigurator: string;
  @Input() emailScheduler: string;
  @Input() title: string;
  @Input() status: string;
  @Input() data: string;
  public openDialog() {
    if (this.title === this.emailScheduler)
    { this.dialog.open(EmailScheduler); }
    else if (this.title === this.serversConfigurator) {
      this.dialog.open(ServersConfigurator);
    }
  }
  ngOnInit() { }
}
