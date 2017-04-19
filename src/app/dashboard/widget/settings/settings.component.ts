import { Component, OnInit,Input } from '@angular/core';
import {MdDialog} from '@angular/material';
import {FirebaseService} from 'app/services/firebase.service';

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
export class EmailScheduler{ 
  data : Object;
  newSettings : Object;
  constructor(private firebaseService : FirebaseService){ 
      firebaseService.getSettings().subscribe(data=>{this.data = data.settings; });
  }
  save(name: string, description :string){
    this.newSettings = {"name":name, "description":description};
    this.firebaseService.saveSettings(this.newSettings);
  }
}
@Component({
  selector: 'serversConfigurator',
  templateUrl: './servers-configurator.html',
  styleUrls: ['./settings.component.scss']

})
export class ServersConfigurator{}