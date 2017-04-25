import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  public profile: Object;
  private Auth0Lock = require('auth0-lock').default;
  private lock = new this.Auth0Lock('g92ByoNQKvIcIjtJvCGps05BK6Rtw6bC', 'lv-232.eu.auth0.com', {
    closable: false,
    auth: {
      redirect: false,
    }
  });
  constructor() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log('Error during getting user profile: ' + error);
        } else {
          localStorage.setItem('profile', JSON.stringify(profile));
          this.profile = profile;
        }
      });
      this.lock.hide();
    });
  }

  public login() {
    this.lock.show();
  }

  public authenticated() {
    return tokenNotExpired('id_token');
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.lock.show();
  }
}
