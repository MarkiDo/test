import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseService } from '../../services/firebase.service';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'ita-ldap',
  templateUrl: './ldap.component.html',
  styleUrls: ['./ldap.component.scss']
})
export class LDAPComponent implements OnInit {
  public radioState: any;
  public radioValues: any[];
  public hostValidResult: boolean;
  public hostPatternIP: string;
  public hostPatternDomain: string;
  public hostPatternName: string;
  public hostPatternPass: string;
  public hostPatternLDAPName: string;
  public data: Object;
  public ldapName: string;
  public host: string;
  public username: string;
  public userpass: string;

  constructor(
    private translate: TranslateService,
    private firebaseService: FirebaseService,
    public dialog: MdDialog) {
    firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
  }
  public ngOnInit() {
    this.hostValidResult = false;
    this.hostPatternLDAPName = '[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)*';
    this.hostPatternName = '[a-zA-Z0-9]+';
    this.hostPatternPass = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$';
    this.hostPatternIP = `^(([0-9]|[1-9][0-9]|1
      [0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]
      |[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$`;
    this.radioValues = [
      { name: 'anonymouse', translate: 'LDAP.ANON', value: false },
      { name: 'pass', translate: 'LDAP.PSW', value: true }
    ];
  }

  public onSubmit(form: any): void {
    console.log(form);
    this.data = { form };
    this.firebaseService.saveSettings(this.data);
  }
}
