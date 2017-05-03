import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss']
})
export class EmailSchedulerDialogComponent implements OnInit {
@Input() public modal: string;
public data: Object;
public description: any;
public EmailForm: any;
private newSettings: Object;
private option: string;

constructor(private translate: TranslateService,
            private auth: AuthService,
            private firebaseService: FirebaseService,
            public formBuilder: FormBuilder) {
              firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
            }
  public ngOnInit() {
    this.EmailForm = this.formBuilder.group( {
    description: ['', Validators.pattern]
  } );
  }
  public onSubmit(form, event) {
    form = this.EmailForm.value;
    this.newSettings = { form } ;
    this.firebaseService.saveSettings(this.newSettings);
  }
}