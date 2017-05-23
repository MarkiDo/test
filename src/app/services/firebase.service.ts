import { Injectable } from '@angular/core';
import {
  AngularFire, AngularFireModule, FirebaseObjectObservable, FirebaseListObservable
        } from 'angularfire2';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { EmailSchedulerSettings } from
  'app/dashboard/email-scheduler-dialog/email-scheduler-settings.model';
@Injectable()
export class FirebaseService {
  public visitData: FirebaseListObservable<any>;
  public settings: FirebaseObjectObservable<any>;
  public user: any;
  public userData: FirebaseObjectObservable<any>;
  constructor(private auth: AuthService, private angularFire: AngularFire) {
    this.user = this.auth.profile;
  }

  public getSettings() {
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
  public saveEmailSchedulerSettings(newSettings: EmailSchedulerSettings) {
    this.userData = this.getSettings();
    return this.userData.set({ EmailSchedulerSettings: newSettings });
  }

  public getVisitData() {
    this.visitData = this.angularFire.database.list('/visting',
      {
        query: {
          orderByChild: 'website',
          limitToFirst: 10
        }
      });
    return this.visitData;
  }
}
