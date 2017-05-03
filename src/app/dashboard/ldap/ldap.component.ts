import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseService } from './../../services/firebase.service';
import { MdDialog } from '@angular/material';
import { LdapConfig } from './ldap.interface';
import { LDAP_CONFIG, LDAP_CONST } from './ldap.constants';

@Component({
  selector: 'ita-ldap',
  templateUrl: './ldap.component.html',
  styleUrls: ['./ldap.component.scss'],
  providers: [{ provide: LDAP_CONFIG, useValue: LDAP_CONST }]
})
export class LDAPComponent implements OnInit {
  public radioState: boolean;
  public radioValues: any[];
  public hostValidResult: boolean;
  public hostPatternIP: string;
  public hostPatternName: string;
  public hostPatternPass: string;
  public hostPatternLDAPName: string;
  public data: Object;
  public ldapName: string;
  public host: string;
  public username: string;
  public userpass: string;

  constructor(
    @Inject(LDAP_CONFIG) config: LdapConfig,
    private translate: TranslateService,
    private firebaseService: FirebaseService,
    public dialog: MdDialog) {
    this.hostPatternLDAPName = config.REGEX_LDAP_NAME;
    this.hostPatternName = config.REGEX_LDAP_USERNAME;
    this.hostPatternPass = config.REGEX_LDAP_USERPASS;
    this.hostPatternIP = config.REGEX_LDAP_IP;
    firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
  }
  public ngOnInit() {
    this.hostValidResult = false;
    this.radioValues = [
      { name: 'anonymouse', translate: 'LDAP.ANON', value: false },
      { name: 'pass', translate: 'LDAP.PSW', value: true }
    ];
  }

  public onSubmit(form: any): void {
    this.data = { form };
    this.firebaseService.saveSettings(this.data);
  }
}
