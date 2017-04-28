import { Injectable } from '@angular/core';
import { AngularFire, AngularFireModule, FirebaseObjectObservable } from 'angularfire2';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
export const firebaseConfig = {
  apiKey: 'AIzaSyDixjnPMmEOpg-rQI9zxwL_XYECAVGVyzs',
  authDomain: 'ita-cloud.firebaseapp.com',
  databaseURL: 'https://ita-cloud.firebaseio.com',
  projectId: 'ita-cloud',
  storageBucket: 'ita-cloud.appspot.com',
  messagingSenderId: '991449581591'
};
@Injectable()
export class FirebaseService {
  public settings: FirebaseObjectObservable<any>;
  public user: any;
  public userData: FirebaseObjectObservable<any>;
  constructor(private auth: AuthService, private angularFire: AngularFire) {
  }

  public getSettings() {
    this.user = this.auth.profile;
    this.settings = this.angularFire.database.object('/users/' + this.user.user_id);
    return this.settings;
  }

  public saveSettings(newSettings: Object) {
    this.userData = this.getSettings();
    this.userData.set({ settings: newSettings }).then((success) => {
      console.log('Settings saved successfully');
    })
      .catch((error) => {
        console.log('Error during settings saving: ' + error);
      });
  }
}
