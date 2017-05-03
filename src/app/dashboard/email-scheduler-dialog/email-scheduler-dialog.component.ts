import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { FirebaseService } from 'app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss'],
  })

export class EmailSchedulerDialogComponent implements OnInit {
@Input() public modal: string;
public data: any;
public description: string;
public EmailForm: FormGroup;
public name: string;
public newSettings: Object;
public option: string;

constructor(private translate: TranslateService,
            private auth: AuthService,
            private firebaseService: FirebaseService,
            public formBuilder: FormBuilder) {
            firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
            }
  public ngOnInit() {
    this.EmailForm = this.formBuilder.group( {
    name: ['', Validators.required],
    description: ['', Validators.pattern],
    option: ['', Validators.required]
  } );
  }

  public onSubmit() {
    const form = this.EmailForm.value;
    this.newSettings = { form } ;
    this.firebaseService.saveSettings(this.newSettings);
  }
}
