import { Component, OnInit, Input } from '@angular/core';
import {SettingsComponent,ServersConfigurator,EmailScheduler } from 'app/dashboard/widget/settings/settings.component'
import {MdDialog} from '@angular/material';
@Component({
  selector: 'ita-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() title: string;
  @Input() status: string;
  @Input() data: string;
public  openDialog() {
if(this.title=="Email Scheduler")
   { this.dialog.open(EmailScheduler);}
else if(this.title=="Servers Configurator"){
  this.dialog.open(ServersConfigurator);
}
  ngOnInit() {
  }

}
