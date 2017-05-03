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
  public dateId: any;
  public date: Object;
  public description: string;
  public EmailForm: FormGroup;
  public error: boolean;
  public langs: EmailLang[];
  public name: string;
  public option: string;
  public settings = new EmailSchedulerSettings();
  public saved: boolean;
  constructor(
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
      name: [this.settings.name, [Validators.pattern, Validators.required]],
      description: [this.settings.description],
      option: [this.settings.option, Validators.required],
      date: [this.settings.date, Validators.required],
      langs: [this.settings.langs]
    });
  }
  public onSubmit() {
    this.firebaseService.saveEmailSchedulerSettings(
      new EmailSchedulerSettings(this.EmailForm.value)).then((success) =>
        this.saved = true)
      .catch((error) =>
        this.error = true);
  }
}
