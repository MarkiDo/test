import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ita-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonState: boolean;

  ngOnInit() {
    this.buttonState = false;
  }
  clickButton(buttonState: boolean): boolean {
    return this.buttonState = !this.buttonState;
  }

  constructor(private translate: TranslateService) {
        translate.addLangs(["en", "ua"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ua/) ? browserLang : 'en');
    }
}
