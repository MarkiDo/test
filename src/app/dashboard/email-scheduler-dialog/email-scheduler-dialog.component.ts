import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { FirebaseService } from 'app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';
import { InputScheduler } from './scheduler.interface';

@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss']
})
export class EmailSchedulerDialogComponent {
public emailScheduler: InputScheduler;
public name: string = '';
private description: string = '';
private data: Object;
private newSettings: Object;

constructor(private translate: TranslateService,
            private auth: AuthService,
            private firebaseService: FirebaseService) {
    firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
    this.emailScheduler = {
      description: "",
      name: ""
    }  
}
  private onSubmit(form: any) {
    this.newSettings = { form } ;
    this.firebaseService.saveSettings(this.newSettings);
  }
}
