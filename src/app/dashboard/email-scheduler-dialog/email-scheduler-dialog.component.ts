import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss']
})
export class EmailSchedulerDialogComponent {
public name: string;
private data: Object;
private description: string;
private newSettings: Object;
private option: string;

constructor(private translate: TranslateService,
            private firebaseService: FirebaseService) {
    firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
  }
  private onSubmit(form: any) {
    this.newSettings = { form } ;
    this.firebaseService.saveSettings(this.newSettings);
  }
}
