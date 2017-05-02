import { Component } from '@angular/core';
import { FirebaseService } from 'app/services/firebase.service';
import { EmailSchedulerSettings } from './email-scheduler-settings.model';
@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss']
})
export class EmailSchedulerDialogComponent {
  public settings: EmailSchedulerSettings;
  public saved: boolean;
  public error: boolean;
  constructor(private firebaseService: FirebaseService) {
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