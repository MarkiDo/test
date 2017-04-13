import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /*emailScheduler: any;
  serversConfigurator: string;
  statusEmailScheduler:string;
  statusServersConfigurator: string;
  scheduledEmails: string;
  serversConfigured: string;*/

  constructor(private translate: TranslateService) { 

   /* this.serversConfigurator  = 'Servers Configurator';
    this.statusEmailScheduler = "On";
    this.statusServersConfigurator = "Off";
    this.scheduledEmails = "Scheduled emails: 10";
    
    this.serversConfigured = "Servers Configured: 5";*/
    translate.addLangs(["en", "ua"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ua/) ? browserLang : 'en');
}

  ngOnInit() {
  }

}
