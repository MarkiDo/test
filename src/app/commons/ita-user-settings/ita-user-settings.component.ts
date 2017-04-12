import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-ita-user-settings',
  templateUrl: './ita-user-settings.component.html',
  styleUrls: ['./ita-user-settings.component.scss']
})
export class ItaUserSettingsComponent implements OnInit {
  constructor(public auth: AuthService){
   }
  ngOnInit() {}

}
