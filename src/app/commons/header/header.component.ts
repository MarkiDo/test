import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ita-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	buttonState: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  clickButton(buttonState: boolean): boolean {
    return this.buttonState = !this.buttonState;
  }
}
