import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ita-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	buttonActive: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  clickButton(buttonActive: boolean): boolean {
    if (this.buttonActive === true) {
      return this.buttonActive = false;
    }
    else {
      return this.buttonActive = !this.buttonActive;
    }
  }
}
