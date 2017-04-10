import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ita-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title1: string;
  title2: string;
  status1:string;
  status2: string;
  data1: string;
  data2: string;

  constructor() { 
    this.title1 = 'Email Scheduler'; 
    this.title2  = 'Servers Configurator';
    this.status1 = "On";
    this.status2 = "Off";
    this.data1 = "Scheduled emails: 10";
    this.data2 = "Servers Configured: 5"
}

  ngOnInit() {
  }

}
