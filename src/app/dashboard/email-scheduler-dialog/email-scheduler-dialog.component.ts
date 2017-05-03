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
public description: string;
public date: Object;
public EmailForm: FormGroup;
public option: string;
public name: string;
public newSettings: Object;
public data: any;

  constructor(
    private translate: TranslateService,
    private auth: AuthService,
    private firebaseService: FirebaseService,
    public formBuilder: FormBuilder
  ) {
    firebaseService.getSettings().subscribe((data) => { this.data = data.settings; });
  }
  public ngOnInit() {
    this.EmailForm = this.formBuilder.group( {
    name: ['', [ Validators.pattern, Validators.required]],
    description: [''],
    option: ['', Validators.required],
    date: ['', Validators.required]

  } );
  }

  public onSubmit() {
    const form = this.EmailForm.value;
    this.newSettings = { form };
    this.firebaseService.saveSettings(this.newSettings);
  }
}