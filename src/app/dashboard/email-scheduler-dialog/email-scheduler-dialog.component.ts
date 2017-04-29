import { Component } from '@angular/core';
import { FirebaseService } from 'app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss']
})
export class EmailSchedulerDialogComponent {
private name: string = '';
private description: string = '';
private data: Object;
private newSettings: Object;

constructor(private translate: TranslateService,
            private firebaseService: FirebaseService) {
    firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });

  }
  private onSubmit(form: any) {
    this.newSettings = { form } ;
    this.firebaseService.saveSettings(this.newSettings);
  }
}
