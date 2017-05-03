import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { FirebaseService } from 'app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';
import { EmailLang } from './email-lang.interface';
import { EmailSchedulerSettings } from './email-scheduler-settings.model';

@Component({
  selector: 'ita-email-scheduler-dialog',
  templateUrl: './email-scheduler-dialog.component.html',
  styleUrls: ['./email-scheduler-dialog.component.scss'],
})

export class EmailSchedulerDialogComponent implements OnInit {
  @Input() public modal: string;
  public data: any;
  public dateId: any;
  public date: Object;
  public description: string;
  public EmailForm: FormGroup;
  public langs: EmailLang[];
  public name: string;
  public newSettings: Object;
  public option: string;
  public settings: EmailSchedulerSettings;
  public saved: boolean;
  public error: boolean;
  
  constructor (
    private firebaseService: FirebaseService,
    public formBuilder: FormBuilder
  ) {
    firebaseService.getSettings().subscribe((result) => {
      this.settings = new EmailSchedulerSettings(result.EmailSchedulerSettings);
    });
  }
  public ngOnInit() {
    this.langs = [
      { value: 'lang-0', viewValue: 'Українська' },
      { value: 'lang-1', viewValue: 'English' }
    ];
    this.EmailForm = this.formBuilder.group({
      name: ['', [Validators.pattern, Validators.required]],
      description: [''],
      option: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  public onSubmit(form: EmailSchedulerSettings) {
    this.firebaseService.saveEmailSchedulerSettings(form).then((success) =>
      this.saved = true)
      .catch((error) =>
        this.error = true);
  }
}
