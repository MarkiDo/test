import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private translate: TranslateService, private auth:AuthService) { 
    translate.addLangs(["en", "ua"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ua/) ? browserLang : 'en');
  }
}
