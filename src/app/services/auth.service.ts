import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH0_CONFIG } from './auth0.config';
@Injectable()
export class AuthService {
  public profile: Object;
  private Auth0Lock = require('auth0-lock').default;
  private lock = new this.Auth0Lock(AUTH0_CONFIG.clientID, AUTH0_CONFIG.domain, {
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
        if (!error) {
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
