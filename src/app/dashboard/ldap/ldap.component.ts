import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseService } from 'app/services/firebase.service';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'ita-ldap',
  templateUrl: './ldap.component.html',
  styleUrls: ['./ldap.component.scss']
})
export class LDAPComponent implements OnInit {
  public radioState: any;
  public radioValues: any[];
  private ldapName: string;
  private host: string;
  private data: Object;

  constructor(
    private translate: TranslateService,
    private firebaseService: FirebaseService,
    public dialog: MdDialog) {
      firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
  }
  public ngOnInit() {
    this.radioValues = [
      {name: 'anonymouse', translate: 'LDAP.ANON', value: false },
      {name: 'pass', translate: 'LDAP.PSW', value: true }
    ];
  }
  private onSubmit(form: any): void {
    this.data = { form };
    this.firebaseService.saveSettings(this.data);
  }
}
