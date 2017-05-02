import { Injectable } from '@angular/core';
import { AngularFire, AngularFireModule, FirebaseObjectObservable } from 'angularfire2';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { EmailSchedulerSettings } from
        'app/dashboard/email-scheduler-dialog/email-scheduler-settings.model';
@Injectable()
export class FirebaseService {
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

  public saveEmailSchedulerSettings(newSettings: EmailSchedulerSettings) {
    this.userData = this.getSettings();
    return this.userData.set({ EmailSchedulerSettings: newSettings });
  }
}
