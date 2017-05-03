import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { FirebaseService } from 'app/services/firebase.service';
import { TranslateService } from '@ngx-translate/core';
import { EmailLang } from './email-lang.interface';

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

  constructor (
    private translate: TranslateService,
    private auth: AuthService,
    private firebaseService: FirebaseService,
    public formBuilder: FormBuilder
  ) {
    firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
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

  public onSubmit() {
    const form = this.EmailForm.value;
    this.newSettings = { form };
    this.firebaseService.saveSettings(this.newSettings);
  }
}
