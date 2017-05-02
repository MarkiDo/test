import { InjectionToken } from '@angular/core';

interface ConfigInterface {
  clientID: string;
  domain: string;
}

export const AuthConfig = new InjectionToken('auth0.config');
export const AUTH0_CONFIG: ConfigInterface = {
  clientID: 'g92ByoNQKvIcIjtJvCGps05BK6Rtw6bC',
  domain: 'lv-232.eu.auth0.com'
};
export const AuthProvider = [
 { provide: AuthConfig, useValue: AUTH0_CONFIG }
];
