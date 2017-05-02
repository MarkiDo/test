import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { FirebaseService } from 'app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';
import { EmailSchedulerSettings } from './email-scheduler-settings.model';
@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss']
})
export class EmailSchedulerDialogComponent {
  public name: string = '';
  public settings: EmailSchedulerSettings;
  public saved: boolean;
  public error: boolean;
  private description: string = '';
  constructor(private translate: TranslateService,
              private auth: AuthService,
              private firebaseService: FirebaseService) {
    firebaseService.getSettings().subscribe((result) => {
      this.settings = new EmailSchedulerSettings(result.EmailSchedulerSettings);
    });
  }
  public onSubmit(form: EmailSchedulerSettings) {
    this.firebaseService.saveEmailSchedulerSettings(form).then((success) =>
      this.saved = true)
      .catch((error) =>
        this.error = true);
  }
}
