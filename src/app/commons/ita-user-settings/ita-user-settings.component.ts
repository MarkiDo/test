import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ita-user-settings',
  templateUrl: './ita-user-settings.component.html',
  styleUrls: ['./ita-user-settings.component.scss']
})
export class ItaUserSettingsComponent implements OnInit {
constructor(private translate: TranslateService) {
        translate.addLangs(["en", "ua"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ua/) ? browserLang : 'en');
    }
  ngOnInit() {}

}
