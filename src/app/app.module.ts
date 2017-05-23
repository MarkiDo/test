import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
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
import { ItaUserTimeSettingsComponent }
  from './commons/ita-user-time-settings/ita-user-time-settings.component';
import { ItaUserLanguageComponent } from './commons/ita-user-language/ita-user-language.component';
import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { FIREBASE_CONFIG } from './services/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  EmailSchedulerDialogComponent
} from './dashboard/email-scheduler-dialog/email-scheduler-dialog.component';
import {
  LDAPComponent
} from './dashboard/ldap/ldap.component';
import { LDAP_CONFIG, LDAP_CONFIG_CONST } from './dashboard/ldap/ldap.constants';
import { TranslateService } from '@ngx-translate/core';
import { AuthProvider } from './services/auth0.config';

import { ReportingComponent } from './administration/reporting/reporting.component';
import { FilteringComponent } from './administration/filtering/filtering.component';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from 'ng2-charts';
import { FileSizePipe } from './administration/reporting/size.pipe';
import { UsersRolesComponent } from './administration/users-roles/users-roles.component';
import { UsersComponent } from './administration/users-roles/users/users.component';
import { RolesComponent } from './administration/users-roles/roles/roles.component';
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
    LDAPComponent,
    ReportingComponent,
    FilteringComponent,
    FileSizePipe,
    UsersRolesComponent,
    UsersComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxErrorsModule,
    routing,
    ReactiveFormsModule,
    JsonpModule,
    ChartsModule,
    SidebarModule.forRoot(),
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
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
    TranslateService,
    EmailSchedulerDialogComponent,
    AuthProvider,
    LDAPComponent,
    { provide: LDAP_CONFIG, useValue: LDAP_CONFIG_CONST }
    ],
  entryComponents: [
    EmailSchedulerDialogComponent,
    LDAPComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
