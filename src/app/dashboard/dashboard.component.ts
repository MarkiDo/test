import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    public modal: string;
    constructor(
    public translate: TranslateService,
    public auth: AuthService) {
    }
  }
