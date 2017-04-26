import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public buttonState: string;
  private btnAriaValue: any;
  constructor( private translate: TranslateService) {}
  public ngOnInit() {
    this.buttonState = 'true';
    this.btnAriaValue = document.getElementById('hamburgerBtn');
  }
  public clickButton(): string {
    if (this.btnAriaValue.getAttribute('aria-expanded') === 'null') {
      return this.buttonState;
    } else {
      return this.buttonState = this.btnAriaValue.getAttribute('aria-expanded');
    }
  }
}
