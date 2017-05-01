import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { FirebaseService } from 'app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss']
})
export class EmailSchedulerDialogComponent {
@Input() public modal: string;
public name: string;
public description: string;
private EmailForm = this.fb.group( {
    name: ['', Validators.required],
    description: ['', Validators.required]
  } );
private data: Object;
private newSettings: Object;

constructor(private translate: TranslateService,
            private auth: AuthService,
            private firebaseService: FirebaseService,
            public fb: FormBuilder){
            firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
            }

  private onSubmit(form, event) {
    form = this.EmailForm.value;
    this.newSettings = { form } ;
    this.firebaseService.saveSettings(this.newSettings);
  }
}
