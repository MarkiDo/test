import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { EmailSchedulerDialogComponent } from './email-scheduler-dialog/email-scheduler-dialog.component';
import { ServersConfiguratorDialogComponent } from './servers-configurator-dialog/servers-configurator-dialog.component';

@Component({
  selector: 'ita-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private translate: TranslateService, private auth: AuthService, public dialog: MdDialog) {
    translate.addLangs(['en', 'ua']);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ua/) ? browserLang : 'en');
  }
 private openServersConfiguratorDialog(){
   this.dialog.open(ServersConfiguratorDialogComponent, {
       height: '400px',
       width: '600px',
   });
 }
 private openEmailSchedulerDialog(){
   this.dialog.open(EmailSchedulerDialogComponent, {
       height: '400px',
       width: '600px',
   });
 }
}
