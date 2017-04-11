import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ita-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  emailScheduler: string;
  serversConfigurator: string;
  statusEmailScheduler:string;
  statusServersConfigurator: string;
  scheduledEmails: string;
  serversConfigured: string;

  constructor() { 
    this.emailScheduler = 'Email Scheduler'; 
    this.serversConfigurator  = 'Servers Configurator';
    this.statusEmailScheduler = "On";
    this.statusServersConfigurator = "Off";
    this.scheduledEmails = "Scheduled emails: 10";
    this.serversConfigured = "Servers Configured: 5"
}

  ngOnInit() {
  }

}
