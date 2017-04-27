import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'app/services/auth.service';
import { FirebaseService } from 'app/services/firebase.service';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'ita-ldap',
  templateUrl: './ldap.component.html',
  styleUrls: ['./ldap.component.scss']
})
export class LDAPComponent {
  private hostName: string;
  private host: string;
  private data: Object;

  constructor(
    private translate: TranslateService,
    private auth: AuthService,
    private firebaseService: FirebaseService,
    public dialog: MdDialog) {
    if (auth.authenticated()) {
      firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
    }
  }
  private onSubmit(form: any) {
    this.data = { form };
    this.firebaseService.saveSettings(this.data);
  }
}
