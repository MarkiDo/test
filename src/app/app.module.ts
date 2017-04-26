import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { WidgetComponent } from './dashboard//widget/widget.component';
import { FooterComponent } from './commons/footer/footer.component';
import { ItaUserSettingsComponent } from './commons/ita-user-settings/ita-user-settings.component';
import {
  ItaUserTimeSettingsComponent
} from './commons/ita-user-time-settings/ita-user-time-settings.component';
import { ItaUserLanguageComponent } from './commons/ita-user-language/ita-user-language.component';
import { AuthService } from './services/auth.service';
import { FirebaseService, firebaseConfig } from './services/firebase.service';
import { AngularFireModule } from 'angularfire2';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  EmailSchedulerDialogComponent
} from './dashboard/email-scheduler-dialog/email-scheduler-dialog.component';
import {
  ServersConfiguratorDialogComponent
} from './dashboard/servers-configurator-dialog/servers-configurator-dialog.component';
import { TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './src/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdministrationComponent,
    DashboardComponent,
    WidgetComponent,
    FooterComponent,
    ItaUserSettingsComponent,
    ItaUserTimeSettingsComponent,
    ItaUserLanguageComponent,
    EmailSchedulerDialogComponent,
    ServersConfiguratorDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        })
  ],
  providers: [
    AuthService,
    FirebaseService,
    TranslateService],
  entryComponents: [
    EmailSchedulerDialogComponent,
    ServersConfiguratorDialogComponent
  ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
