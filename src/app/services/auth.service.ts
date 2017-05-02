import { Injectable, Inject } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthConfig } from './auth0.config';
import { Router } from '@angular/router';

interface AuthServiceInterface {
  profile: Object;
  Auth0Lock: Object;
  lock: Object;
};

@Injectable()
export class AuthService implements AuthServiceInterface {
  public profile: Object;
  public Auth0Lock = require('auth0-lock').default;
  public lock;
  constructor(private router: Router, @Inject(AuthConfig) config) {
    this.lock = new this.Auth0Lock(config.clientID, config.domain, {
      closable: false,
      auth: {
        redirect: false,
      }
    });
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (!error) {
          localStorage.setItem('profile', JSON.stringify(profile));
          this.profile = profile;
          this.lock.hide();
          router.navigate(['/dashboard']);
        }
      });
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
