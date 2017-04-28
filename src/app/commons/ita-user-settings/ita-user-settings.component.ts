import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-user-settings',
  templateUrl: './ita-user-settings.component.html',
  styleUrls: ['./ita-user-settings.component.scss']
})
export class ItaUserSettingsComponent {
constructor(private translate: TranslateService, public auth: AuthService) {}
}
