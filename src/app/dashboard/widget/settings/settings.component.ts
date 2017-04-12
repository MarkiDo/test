import { Component, OnInit,Input } from '@angular/core';
import {MdDialog} from '@angular/material';
@Component({
  selector: 'ita-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() title: string;
  ngOnInit() {
  }

}
@Component({
  selector: 'emailScheduler',
  templateUrl: './email-sheduler.html',
  styleUrls: ['./settings.component.scss']
})
export class EmailScheduler{}
@Component({
  selector: 'serversConfigurator',
  templateUrl: './servers-configurator.html',
  styleUrls: ['./settings.component.scss']

})
export class ServersConfigurator{}