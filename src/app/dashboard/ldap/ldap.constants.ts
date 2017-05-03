import { InjectionToken } from '@angular/core';
import { LdapConfig } from './ldap.interface';

export const LDAP_CONFIG = new InjectionToken<LdapConfig>('ldap.interface');

export const LDAP_CONFIG_CONST: LdapConfig = {
  REGEX_LDAP_NAME: '[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)*',
  REGEX_LDAP_USERNAME: '[a-zA-Z0-9]+',
  REGEX_LDAP_USERPASS: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$',
  REGEX_LDAP_IP: `^(([0-9]|[1-9][0-9]|1
      [0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]
      |[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$`
};
