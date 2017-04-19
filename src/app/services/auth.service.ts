import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

let Auth0Lock = require('auth0-lock').default;
@Injectable()
export class AuthService {
  lock = new Auth0Lock('g92ByoNQKvIcIjtJvCGps05BK6Rtw6bC', 'lv-232.eu.auth0.com', {});
  profile: Object;
  constructor() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log("Error during getting user profile: "+ error);
        }
        else{
        localStorage.setItem('profile', JSON.stringify(profile));
        this.profile = JSON.stringify(profile);
        }
      });
    });
  }

  public login() {
    this.lock.show();
  }

  public authenticated() {
    return (localStorage.getItem('id_token')&&localStorage.getItem('profile'));
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
}